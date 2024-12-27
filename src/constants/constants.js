export const REDIRECT_MAP = {
  offline: {
    imageName: "offline",
    buttonText: "retry",
    destination: 0,
    iconName: "HiStatusOffline",
    message: "It seems you are offline",
  },
  pageNotFound: {
    destination: "/",
    imageName: "404",
    buttonText: "go home",
    iconName: "TbError404",
    message: "Page not found",
  },
  noResult: {
    destination: null,
    imageName: "noResult",
    iconName: "ImSad2",
    message: "We cannot find the product",
  },
  deleteAccount: {
    destination: "/",
    imageName: "delete",
    iconName: "RiUserUnfollowFill",
    buttonText: "go home",
    message: "Your Account Deleted Successfully",
  },
  emptyCart: {
    destination: "/",
    imageName: "empty-cart",
    iconName: "TbShoppingCartExclamation",
    buttonText: "shop now",
    message: "Your cart is empty",
  },
  login: {
    destination: "/profile",
    imageName: "login",
    iconName: "RiLoginBoxLine",
    buttonText: "login",
    message: "please To login to access cart items",
  },
  aiSearch: {
    destination: null,
    imageName: "aisearch",
    iconName: "MdScreenSearchDesktop",
    message: "ai is searching. please wait.",
  },
};

export const ADMINS = ["DcC6ajUeFse5J6RF2x7Jy2xC5z42"];

export const SLIDER_SETTINGS = {
  dots: true,
  infinite: true,
  speed: 700,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  swipeToSlide: true,
  pauseOnHover: true,
};
