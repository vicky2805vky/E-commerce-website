import runGemini from "configs/gemini";
import useStoreData from "./useStoreData";

const useGemini = () => {
  const { products } = useStoreData();
  if (!products) return;
  const allProductDetails = products.map(
    (product, i) =>
      `product ${i + 1}: \nname: ${product.name}\ncategory: ${product.category}\nmrp: ${product.mrp}\nselling price: ${product.price}\nrating: ${product.rating}\ncolor options: ${product.images.map((image) => `${image.color}(${image.code})`).join(", ")} \ndescription: ${product.description.join("\n")}\n`,
  );

  return async (input) => {
    if (!input) return;
    const prompt = `Hello Gemini! Below is the product data from my e-commerce website. Your task is to filter products based on the user's search query.\n\nProducts List:\n${allProductDetails.join("\n")}\n\nUser Search Query: "${input}"\n\nInstructions:\n1. Return a comma-separated list of product names that match the search query.\n2. Ensure the names are exactly as listed in the product data, with all letters in lowercase.\n3. If the query includes a **price range** (e.g., "under 30000," "below 50k," "between 20k and 40k"):\n   - Only include products whose **selling price** falls within the specified range.\n   - Ignore products outside the price range.\n   - Consider "k" as 1,000 (e.g., "30k" = 30,000).\n4. Include only relevant products:\n   - For category-specific queries (e.g., "mobile"), exclude unrelated items.\n   - For general terms like "gaming devices," include all relevant gaming products (laptops, mobiles, accessories).\n5. If no products match the query or price range, return "0" without extra text or newlines.\n\nOutput Example:\n\"apple macbook air apple m3, apple macbook air apple m1, infinix y3 max, infinix zerobook 13\"\n\nRules:\n- Do not include additional text, explanations, or formatting in the output.\n- Ensure the output is precise and consistent.`;

    const response = await runGemini(prompt);
    return response.response.candidates[0].content.parts[0].text;
  };
};

export default useGemini;
