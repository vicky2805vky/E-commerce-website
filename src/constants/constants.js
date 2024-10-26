export const CATEGORIES = [
  "select",
  "mobile",
  "mobile accessories",
  "laptop",
  "smart wearables",
  "gaming",
  "computer accessories",
  "speaker",
  "camera",
  "others",
];

export const FORM_ELEMENTS = [
  {
    name: "name",
    type: "text",
    optionalParameters: {
      value: "",
    },
  },
  {
    name: "category",
    type: "select",
    optionalParameters: {
      value: "",
      options: CATEGORIES,
    },
  },
  {
    name: "description",
    type: "text-area",
    optionalParameters: {
      value: "",
    },
  },
  {
    name: "mrp",
    type: "number",
    optionalParameters: {
      value: "",
    },
  },
  {
    name: "price",
    type: "number",
    optionalParameters: {
      value: "",
    },
  },
  {
    name: "rating",
    type: "number",
    optionalParameters: {
      value: "",
    },
  },
];

export const ADMINS = ["DcC6ajUeFse5J6RF2x7Jy2xC5z42"];
