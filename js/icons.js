// Datos de los beneficios
const benefits = [
  {
    icon: "local_shipping",
    title: "Envíos Gratis",
    description: "en todas las órdenes"
  },
  {
    icon: "credit_score",
    title: "Pagos Seguros",
    description: "protegidos por MercadoPago"
  },
  {
    icon: "currency_exchange",
    title: "Devoluciones en 10 Días",
    description: "garantía de reembolso"
  },
  {
    icon: "featured_seasonal_and_gifts",
    title: "Ofertas y Regalos",
    description: "en todas las órdenes"
  }
];

// Genera dinámicamente los beneficios
const benefitsContainer = document.getElementById("benefits-container");

benefits.forEach((benefit) => {
  const benefitDiv = document.createElement("div");
  benefitDiv.className = "icons";
  benefitDiv.innerHTML = `
      <span class="material-symbols-rounded">${benefit.icon}</span>
      <div class="info">
        <h3>${benefit.title}</h3>
        <span>${benefit.description}</span>
      </div>
    `;
  benefitsContainer.appendChild(benefitDiv);
});
