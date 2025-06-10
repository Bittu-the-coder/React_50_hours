const generateRandomShoes = () => {
  const brands = [
    "Nike",
    "Adidas",
    "Puma",
    "Reebok",
    "New Balance",
    "Converse",
    "Vans",
    "Under Armour",
    "Skechers",
    "Fila",
  ];
  const countries = [
    "USA",
    "Japan",
    "Germany",
    "Italy",
    "China",
    "UK",
    "France",
    "Brazil",
    "Spain",
    "South Korea",
  ];
  const colors = [
    "black",
    "brown",
    "red",
    "white",
    "blue",
    "green",
    "yellow",
    "gray",
    "pink",
    "purple",
  ];
  const shoeTypes = [
    "Running",
    "Casual",
    "Athletic",
    "Basketball",
    "Training",
    "Walking",
    "Skateboarding",
    "Hiking",
    "Soccer",
    "Tennis",
  ];
  const shoeStyles = [
    "Sneakers",
    "Shoes",
    "Kicks",
    "Footwear",
    "Trainers",
    "Boots",
    "Sandals",
    "Loafers",
    "Oxfords",
    "Slip-ons",
  ];

  // Base Amazon image URLs for different shoe types (these are actual working Amazon image URLs)
  const amazonImageBases = {
    black: "https://m.media-amazon.com/images/I/61mXGX1JwIL._AC_UL320_.jpg",
    brown: "https://m.media-amazon.com/images/I/71YHjVXyR0L._AC_UL320_.jpg",
    red: "https://m.media-amazon.com/images/I/71S8qt+K8hL._AC_UL320_.jpg",
    white: "https://m.media-amazon.com/images/I/71q9KXLN1VL._AC_UL320_.jpg",
    blue: "https://m.media-amazon.com/images/I/61lSgBmTHBL._AC_UL320_.jpg",
    green: "https://m.media-amazon.com/images/I/61WZ55OjY5L._AC_UL320_.jpg",
    yellow: "https://m.media-amazon.com/images/I/61X9RaJ2ZBL._AC_UL320_.jpg",
    gray: "https://m.media-amazon.com/images/I/61X9RaJ2ZBL._AC_UL320_.jpg",
    pink: "https://m.media-amazon.com/images/I/61X9RaJ2ZBL._AC_UL320_.jpg",
    purple: "https://m.media-amazon.com/images/I/61X9RaJ2ZBL._AC_UL320_.jpg",
  };

  const randomShoes = [];

  for (let i = 1; i <= 100; i++) {
    const brand = brands[Math.floor(Math.random() * brands.length)];
    const colorCount = Math.floor(Math.random() * 4) + 2; // 2-5 colors per shoe
    const selectedColors = colors
      .sort(() => 0.5 - Math.random())
      .slice(0, colorCount);

    const imgObj = {};
    selectedColors.forEach((color) => {
      imgObj[color] = amazonImageBases[color];
    });

    randomShoes.push({
      id: i.toString(),
      img: imgObj,
      title: `${shoeTypes[Math.floor(Math.random() * shoeTypes.length)]} ${
        shoeStyles[Math.floor(Math.random() * shoeStyles.length)]
      }`,
      price: Math.floor(Math.random() * 300) + 50, // $50-$350
      company: brand,
      country: countries[Math.floor(Math.random() * countries.length)],
      colors: selectedColors,
      rating: (Math.random() * 2 + 3).toFixed(1), // 3.0-5.0 rating
      reviews: Math.floor(Math.random() * 500) + 1, // 1-500 reviews
    });
  }

  return randomShoes;
};

const shoeData = generateRandomShoes();
