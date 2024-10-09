import { FaRegStar, FaStar, FaStarHalfStroke } from "react-icons/fa6";

const getStars = (starRating) => {
  let stars = [];
  for (let i = 1; i <= 5; i++) {
    i <= Math.floor(starRating)
      ? stars.push(<FaStar key={i} />)
      : starRating - Math.floor(starRating) > 0.5 && i <= Math.ceil(starRating)
      ? stars.push(<FaStarHalfStroke key={i} />)
      : stars.push(<FaRegStar key={i} />);
  }

  return stars;
};

export { getStars };
