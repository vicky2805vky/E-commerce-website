import InputWithLabel from "components/InputWithLabel";

const CategoryFormInputs = ({ names = [], states = [], setters = [] }) => {
  return states.map((state, i) => {
    return (
      <InputWithLabel
        key={i}
        attributes={{
          name: names[i],
          value: state,
          onChange: (e) => {
            setters[i](e.target.value);
          },
        }}
      />
    );
  });
};

export default CategoryFormInputs;
