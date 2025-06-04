const productos = [
  {
    nombre: "Fotocopiadora Canon",
    descripcion: "Equipo multifuncional de alta velocidad, ideal para oficinas.",
    imagen: "https://cdn-icons-png.flaticon.com/512/2933/2933505.png",
    categoria: "impresion"
  },
  {
    nombre: "Escáner Epson",
    descripcion: "Escaneo de alta resolución para documentos y fotografías.",
    imagen: "https://cdn-icons-png.flaticon.com/512/2965/2965567.png",
    categoria: "scanner"
  },
  {
    nombre: "Video Beam LG",
    descripcion: "Proyector portátil con conexión HDMI y gran calidad de imagen.",
    imagen: "https://cdn-icons-png.flaticon.com/512/2933/2933498.png",
    categoria: "proyector"
  },
  {
    nombre: "Multifuncional Remanufacturado",
    descripcion: "Equipo 3 en 1 reacondicionado con garantía de 6 meses.",
    imagen: "https://cdn-icons-png.flaticon.com/512/4472/4472976.png",
    categoria: "remanufacturada"
  },
  {
    nombre: "Tóner HP 285A",
    descripcion: "Cartucho de tóner compatible con impresoras HP. Alta duración.",
    imagen: "https://cdn-icons-png.flaticon.com/512/2965/2965671.png",
    categoria: "remanufacturada"
  },
  {
    nombre: "Multifuncional Epson EcoTank",
    descripcion: "Impresora multifuncional con sistema continuo de tinta.",
    imagen: "https://cdn-icons-png.flaticon.com/512/2933/2933477.png",
    categoria: "impresion"
  }
];

const container = document.getElementById("productContainer");

// Función para mostrar productos
function mostrarProductos(lista) {
  container.innerHTML = ""; // Limpiar contenido actual
  lista.forEach(producto => {
    const card = document.createElement("div");
    card.className = "bg-white rounded-lg shadow-md p-6 text-center";
    card.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}" class="h-24 mx-auto mb-4">
      <h3 class="text-xl font-semibold mb-2">${producto.nombre}</h3>
      <p class="text-sm text-gray-600">${producto.descripcion}</p>
    `;
    container.appendChild(card);
  });
}

// Mostrar todos al cargar la página
mostrarProductos(productos);

// Función para filtrar por categoría
function filtrarProductos(categoria) {
  if (categoria === "todos") {
    mostrarProductos(productos);
  } else {
    const filtrados = productos.filter(p => p.categoria === categoria);
    mostrarProductos(filtrados);
  }

  // Cambiar estado activo en botones
  const botones = document.querySelectorAll(".filtro");
  botones.forEach(btn => {
    if (btn.getAttribute("data-categoria") === categoria) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
}