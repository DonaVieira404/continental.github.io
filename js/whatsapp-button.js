// whatsapp-button.js
const whatsappBtn = document.createElement('a');
whatsappBtn.href = "https://wa.me/3176581580?text=Hola%2C%20quiero%20más%20información%20sobre%20sus%20productos%20y%20servicios";
whatsappBtn.className = "whatsapp-float";
whatsappBtn.target = "_blank";
whatsappBtn.setAttribute("aria-label", "Chat en WhatsApp");

const img = document.createElement('img');
img.src = "https://img.icons8.com/color/96/000000/whatsapp--v1.png";
img.alt = "WhatsApp";
img.style.width = "60px";
img.style.height = "60px";

whatsappBtn.appendChild(img);
document.body.appendChild(whatsappBtn);
