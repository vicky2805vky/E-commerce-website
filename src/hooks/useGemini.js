import runGemini from "configs/gemini";
import useStoreData from "./useStoreData";

const useGemini = () => {
  const { products } = useStoreData();
  return async (input) => {
    if (!input) return;
    const prompt = `hello Gemini! these are the products that are present in my e commerce website \n\n${JSON.stringify(
      products
    )}\nAnd this is the user input for searching the product\nsearch query: "${input}"\ngive me all the products related to the search query that is given by the user which are presented in the list the output should be in the format given below\n"Apple MacBook Air Apple M3, Apple Macbook Air Apple M1, Infinix y3 max, Infinix zerobook 13, MSI Thin A15, colorful p15, dell g15, dell inspiration 3520, lenovo ideapad slim 3i, lenovo legion pro"\nDon't add any extra sentence to the output, since I am going to use your output to directly filter the data. Try not to send any wrong products, for example if the query has the word mobile don't laptops in the output.  All the output names should be same as the names given in the list. If there is no product matches the search query the send me 0`;

    const response = await runGemini(prompt);
    return response.response.candidates[0].content.parts[0].text;
  };
};

export default useGemini;
