const CartProductCardImage = ({ item }) => {
  return (
    <div>
      <img src={item.images.imageURLs[0]} alt={item.name} />
      <p>{`${item.name} (${item.images.color})`}</p>
    </div>
  );
};

export default CartProductCardImage;
