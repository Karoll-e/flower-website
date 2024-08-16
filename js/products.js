// product data
const products = [
  {
    discount: "-10%",
    imgSrc: "assets/bouquet-flower-1.png",
    name: "Rosas Vintage",
    price: "$11.69",
    originalPrice: "$12.99"
  },
  {
    discount: "-15%",
    imgSrc: "assets/bouquet-flower-2.png",
    name: "Tulipanes Rosados",
    price: "$13.59",
    originalPrice: "$15.99"
  },
  {
    discount: "-7%",
    imgSrc: "assets/bouquet-flower-3.png",
    name: "Ramo de Gladiolos",
    price: "$14.87",
    originalPrice: "$15.99"
  },
  {
    discount: "-20%",
    imgSrc: "assets/bouquet-flower-4.png",
    name: "Lirios Blancos",
    price: "$12.79",
    originalPrice: "$15.99"
  },
  {
    discount: "-50%",
    imgSrc: "assets/bouquet-flower-5.png",
    name: "Flores Blancas Silvestres",
    price: "$7.99",
    originalPrice: "$15.99"
  },
  {
    discount: "-10%",
    imgSrc: "assets/bouquet-flower-6.png",
    name: "Azucenas Blancas",
    price: "$14.39",
    originalPrice: "$15.99"
  }
];


const productContainer = document.getElementById("product-container");

// dynamically generate product HTML
products.forEach((product) => {
  const productBox = document.createElement("div");
  productBox.className = "box";
  productBox.innerHTML = `
      <span class="discount">${product.discount}</span>
      <div class="image">
        <img src="${product.imgSrc}" alt="${product.name}" />
        <div class="icons">
          <a href="#products" class="material-symbols-rounded">favorite</a>
          <a href="#products" class="material-symbols-rounded">shopping_cart</a>
          <a href="#products" class="material-symbols-rounded">send</a>
        </div>
      </div>
      <div class="content">
        <h3>${product.name}</h3>
        <div class="price">${product.price} <span>${product.originalPrice}</span></div>
      </div>
    `;
  productContainer.appendChild(productBox);
});
