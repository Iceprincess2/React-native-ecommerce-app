const Products = [
  {
    id: 100,
    image: require("../../assets/productsimage/nike-air-monarch.png"),
    title: "Nike Air Monarch IV",
    price: "200",
    company: "Nike",
    color: "white",
    category: "sneakers",
    description: "Nike Air Monarch IV cross trainers Size 7-12.5"
  },
  {
    id: 101,
    image: require("../../assets/productsimage/nike-air-vapormax.png"),
    title: "Nike Air Vapormax Plus",
    price: "200",
    company: "Nike",
    color: "red",
    category: "sneakers",
    description: "Nike Air Vapormax Plus Sneaker Track & Field Shoes",
  },

  {
    id: 102,
    image: require("../../assets/productsimage/nike-waffle.png"),
    title: "Nike Waffle One Sneaker",
    price: "200",
    company: "Nike",
    color: "green",
    category: "sneakers",
    description: "Nike Waffle One low-top women sneakers"

  },
  {
    id: 103,
    image: require("../../assets/productsimage/nike-running-shoes.png"),
    title: "Nike Running Shoe",
    price: "200",
    company: "Adidas",
    color: "black",
    category: "sneakers",
    description: "Nike Running trail Shoe"
  },
  {
    id: 104,
    image: require("../../assets/productsimage/flat-slip.png"),
    title: "Flat Slip On Pumps",
    price: "200",
    company: "Vans",
    color: "green",
    category: "flats",
    description: "Women's Flat Casual Pumps Fashion Shallow Pointed Toe Slip On Flat  Shoes (11,green)"
  },
  {
    id: 105,
    image: require("../../assets/productsimage/knit-ballet.png"),
    title: "Knit Ballet Flat",
    price: "50",
    company: "Adidas",
    color: "black",
    category: "flats",
  },

  {
    id: 106,
    image:require("../../assets/productsimage/loafer-flats.png"),
    title: "Loafer Flats",
    price: "50",
    company: "Vans",
    color: "white",
    category: "flats",
  },

  {
    id: 107,
    image: require("../../assets/productsimage/nike-zoom-freak.png"),
    title: "Nike Zoom Freak",
    price: "200",
    company: "Nike",
    color: "green",
    category: "sneakers",
  },

  {
    id: 108,
    image: require("../../assets/productsimage/nike-mens-sneaker.png"),
    title: "Nike Men's Sneaker",
    price: "200",
    company: "Adidas",
    color: "blue",
    category: "sneakers",
  },

  {
    id: 109,
    image: require("../../assets/productsimage/puma-black-oce.png"),
    title: "PUMA BLACK-OCE",
    price: "150",
    company: "Puma",
    color: "green",
    category: "sneakers",
  },
  {
    id: 110,
    image: require("../../assets/productsimage/pacer-future.png"),
    title: "Pacer Future Sneaker",
    price: "150",
    company: "Puma",
    color: "red",
    category: "sneakers",
  },
  {
    id: 111,
    image: require("../../assets/productsimage/unisex-adult.png"),
    title: "Unisex-Adult Super",
    price: "150",
    company: "Puma",
    color: "black",
    category: "sneakers",
  },
  {
    id: 112,
    image:require("../../assets/productsimage/roma-basic-sneakers.png"),
    title: "Roma Basic Sneaker",
    price: "150",
    company: "Puma",
    color: "white",
    category: "sneakers",
  },
  {
    id: 113,
    image: require("../../assets/productsimage/pace-future-doubleknit.png"),
    title: "Pacer Future Doubleknit",
    price: "150",
    company: "Puma",
    color: "black",
    category: "sneakers",
  },

  {
    id: 114,
    image:require("../../assets/productsimage/fusion-evo-golf.png"),
    title: "Fusion Evo Golf Shoe",
    price: "100",
    company: "Puma",
    color: "green",
    category: "sneakers",
  },
  {
    id: 115,
    image: require("../../assets/productsimage/rainbow-chex-skate.png"),
    title: "Rainbow Chex Skate",
    price: "100",
    company: "Vans",
    color: "red",
    category: "sneakers",
  },
  {
    id: 116,
    image: require("../../assets/productsimage/low-top-trainers.png"),
    title: "Low-Top Trainers",
    price: "100",
    company: "Vans",
    color: "white",
    category: "sneakers",
  },
  {
    id: 117,
    image: require("../../assets/productsimage/vans-unisex-lowtop.png"),
    title: "Vans Unisex Low-Top",
    price: "100",
    company: "Vans",
    color: "blue",
    category: "sneakers",
  },
  {
    id: 118,
    image: require("../../assets/productsimage/classic-bandana-sneakers.png"),
    title: "Classic Bandana Sneakers",
    price: "50",
    company: "Nike",
    color: "black",
    category: "sneakers",
  },
  {
    id: 119,
    image: require("../../assets/productsimage/chunky-high-heel.png"),
    title: "Chunky High Heel",
    price: "50",
    company: "Vans",
    color: "black",
    category: "heels",
  },
  {
    id: 120,
    image: require("../../assets/productsimage/slipon-stiletto-heel.png"),
    title: "Slip On Stiletto High Heel",
    price: "100",
    company: "puma",
    color: "black",
    category: "heels",
  },
  {
    id: 121,
    image: require("../../assets/productsimage/dream-paris-court.png"),
    title: "DREAM PAIRS Court Shoes",
    price: "150",
    company: "Nike",
    color: "red",
    category: "heels",
  },
  {
    id: 122,
    image: require("../../assets/productsimage/nike-air-vapormax.png"),
    title: "Nike Air Vapormax Plus",
    price: "200",
    company: "Nike",
    color: "red",
    category: "sneakers",
  },

  {
    id: 123,
    image:require("../../assets/productsimage/low-mid-block-heel.png"),
    title: "Low Mid Block Heels",
    price: "200",
    company: "Nike",
    color: "black",
    category: "heels",
  },
  {
    id: 124,
    image: require("../../assets/productsimage/chunky-high-heel-brown.png"),
    title: "Chunky High Heel",
    price: "50",
    company: "Adidas",
    color: "black",
    category: "heels",
  },
  {
    id: 125,
    image:require("../../assets/productsimage/amore-fashion.png"),
    title: "Amore Fashion Stilettos",
    price: "150",
    company: "Adidas",
    color: "white",
    category: "heels",
  },
  {
    id: 126,
    image:require("../../assets/productsimage/bridal-sandals-glitter.png"),
    title: "Bridal Sandals Glitter",
    price: "50",
    company: "Adidas",
    color: "black",
    category: "sandals",
    description: "EQAUDES Rhinestone Heels Sandals Low Chunky Block Heels for Women Wedding Dress Sparkly Bridal Glitter Prom Heels"
  },
  {
    id: 127,
    image: require("../../assets/productsimage/wedding-prom.png"),
    title: "Wedding Prom Bridal",
    price: "50",
    company: "Adidas",
    color: "black",
    category: "sandals",
  },
];

export function getProducts() {
  return Products;
}
export function getProduct(id) {
  return Products.find((product) => (product.id == id));
}