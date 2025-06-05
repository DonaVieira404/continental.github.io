const productos = [
  {
    nombre: "Impresora IM 550F",
    descripcion: "Impresora de alta velocidad, ideal para oficinas.",
    imagen: "https://continental.githuh.io/img/productos/impresoras/IM 550F.webp",
    categoria: "impresion"
  },
  {
    nombre: "Impresora Ricoh P 311",
    descripcion: "Impresora de alta velocidad, ideal para oficinas.",
    imagen: "https://continental.githuh.io/img/productos/impresoras/P 311.webp",
    categoria: "impresion"
  },
  {
    nombre: "Impresora Ricoh P 502",
    descripcion: "Impresora de alta velocidad, ideal para oficinas.",
    imagen: "https://continental.githuh.io/img/productos/impresoras/p 502.webp",
    categoria: "impresion"
  },
  {
    nombre: "Impresora P C375",
    descripcion: "Impresora Color de alta velocidad, ideal para oficinas.",
    imagen: "https://continental.githuh.io/img/productos/impresoras/p c375.webp",
    categoria: "impresion"
  },
  {
    nombre: "Impresora P C600",
    descripcion: "Impresora Color de alta velocidad, ideal para oficinas.",
    imagen: "https://continental.githuh.io/img/productos/impresoras/p c600.webp",
    categoria: "impresion"
  },      
  {
    nombre: "Escáner Ricoh FI 8040",
    descripcion: "Escaneo de alta resolución para documentos y fotografías.",
    imagen: "https://continental.githuh.io/img/productos/escaners/FI 8040.webp",
    categoria: "scanner"
  },
  {
    nombre: "Escáner Ricoh FI 8170",
    descripcion: "Escaneo de alta resolución para documentos y fotografías.",
    imagen: "https://continental.githuh.io/img/productos/escaners/FI 8170.webp",
    categoria: "scanner"
  },
  {
    nombre: "Escáner Ricoh IX 1600",
    descripcion: "Escaneo de alta resolución para documentos y fotografías.",
    imagen: "https://continental.githuh.io/img/productos/escaners/IX 1600.webp",
    categoria: "scanner"
  },
  {
    nombre: "Escáner Ricoh SP 1130",
    descripcion: "Escaneo de alta resolución para documentos y fotografías.",
    imagen: "https://continental.githuh.io/img/productos/escaners/SP 1130.webp",
    categoria: "scanner"
  },      
  {
    nombre: "Multifuncional 406F",
    descripcion: "Equipo 3 en 1 reacondicionado con garantía de 6 meses.",
    imagen: "https://continental.githuh.io/img/productos/fotocopiadoras/IM 406F.webp",
    categoria: "multifuncional"
  },
  {
    nombre: "Multifuncional IM430F",
    descripcion: "Multifuncional impresora Hecha para Tu Compañia.",
    imagen: "https://continental.githuh.io/img/productos/fotocopiadoras/IM 430F.webp",
    categoria: "multifuncional"
  },
  {
    nombre: "Multifuncional IM 600F",
    descripcion: "Equipo 3 en 1 reacondicionado con garantía de 6 meses.",
    imagen: "https://continental.githuh.io/img/productos/fotocopiadoras/IM 600F.webp",
    categoria: "multifuncional"
  },
  {
    nombre: "Multifuncional IM 2500",
    descripcion: "Multifuncional impresora Hecha para Tu Compañia.",
    imagen: "https://continental.githuh.io/img/productos/fotocopiadoras/IM 2500.webp",
    categoria: "multifuncional"
  },
  {
    nombre: "Multifuncional IM C6500",
    descripcion: "Equipo 3 en 1 reacondicionado con garantía de 6 meses.",
    imagen: "https://continental.githuh.io/img/productos/fotocopiadoras/IM C6500.webp",
    categoria: "multifuncional"
  },
  {
    nombre: "Multifuncional IM C 8000",
    descripcion: "Multifuncional impresora Hecha para Tu Compañia.",
    imagen: "https://continental.githuh.io/img/productos/fotocopiadoras/IM C8000.webp",
    categoria: "multifuncional"
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