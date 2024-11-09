const List = ({ listItems = [], className }) => {
  return (
    <ul className={className}>
      {listItems.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default List;
