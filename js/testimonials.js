// Datos de los testimonios
const testimonials = [
  {
    stars: 5,
    text: "“¡Increíble experiencia! El servicio al cliente fue excepcional, y la calidad de los productos superó mis expectativas. Sin duda volveré a comprar.”",
    imgSrc: "assets/avatar-customer-1.png",
    name: "Sarah Johnson",
    role: "Contenta con la compra"
  },
  {
    stars: 5,
    text: "“Excelente atención y productos de calidad. Lo recomendaría a cualquiera que busque algo único y bien hecho. Estoy más que satisfecho. Los recomiendo siempre.”",
    imgSrc: "assets/avatar-customer-2.png",
    name: "Carlos Martínez",
    role: "Cliente satisfecho"
  },
  {
    stars: 5,
    text: "“Desde el primer contacto, me sentí valorada como cliente. El equipo fue muy amable y profesional. Definitivamente recomendaría sus productos.”",
    imgSrc: "assets/avatar-customer-3.png",
    name: "Laura Pérez",
    role: "Cliente leal"
  }
];

// Genera dinámicamente los testimonios
const testimonialsContainer = document.getElementById("testimonials-container");

testimonials.forEach((testimonial) => {
  const testimonialBox = document.createElement("div");
  testimonialBox.className = "box";

  // Generar estrellas
  let starsHTML = "";
  for (let i = 0; i < testimonial.stars; i++) {
    starsHTML += '<i><span class="material-symbols-rounded"> star </span></i>';
  }

  testimonialBox.innerHTML = `
      <div class="stars">
        ${starsHTML}
      </div>
      <p>${testimonial.text}</p>
      <div class="user">
        <img src="${testimonial.imgSrc}" alt="${testimonial.name}" />
        <div class="user-info">
          <h3>${testimonial.name}</h3>
          <span>${testimonial.role}</span>
        </div>
      </div>
      <span class="material-symbols-rounded quote-icon">format_quote</span>
    `;

  testimonialsContainer.appendChild(testimonialBox);
});
