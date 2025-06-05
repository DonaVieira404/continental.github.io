const productos = [
  {
    nombre: "Impresora IM 550F",
    descripcion: "Impresora de alta velocidad, ideal para oficinas.",
    imagen: "img/productos/impresoras/IM550F.webp",
    categoria: "impresion"
  },
  {
    nombre: "Impresora Ricoh P 311",
    descripcion: "Impresora de alta velocidad, ideal para oficinas.",
    imagen: "img/productos/impresoras/P311.webp",
    categoria: "impresion"
  },
  {
    nombre: "Impresora Ricoh P 502",
    descripcion: "Impresora de alta velocidad, ideal para oficinas.",
    imagen: "img/productos/impresoras/P502.webp",
    categoria: "impresion"
  },
  {
    nombre: "Impresora P C375",
    descripcion: "Impresora Color de alta velocidad, ideal para oficinas.",
    imagen: "img/productos/impresoras/PC375.webp",
    categoria: "impresion"
  },
  {
    nombre: "Impresora P C600",
    descripcion: "Impresora Color de alta velocidad, ideal para oficinas.",
    imagen: "img/productos/impresoras/PC600.webp",
    categoria: "impresion"
  },      
  {
    nombre: "Escáner Ricoh FI 8040",
    descripcion: "Escaneo de alta resolución para documentos y fotografías.",
    imagen: "img/productos/escaners/FI8040.webp",
    categoria: "scanner"
  },
  {
    nombre: "Escáner Ricoh FI 8170",
    descripcion: "Escaneo de alta resolución para documentos y fotografías.",
    imagen: "img/productos/escaners/FI8170.webp",
    categoria: "scanner"
  },
  {
    nombre: "Escáner Ricoh IX 1600",
    descripcion: "Escaneo de alta resolución para documentos y fotografías.",
    imagen: "img/productos/escaners/IX1600.webp",
    categoria: "scanner"
  },
  {
    nombre: "Escáner Ricoh SP 1130",
    descripcion: "Escaneo de alta resolución para documentos y fotografías.",
    imagen: "img/productos/escaners/SP1130.webp",
    categoria: "scanner"
  },      
  {
    nombre: "Multifuncional 406F",
    descripcion: "Equipo 3 en 1 reacondicionado con garantía de 6 meses.",
    imagen: "img/productos/fotocopiadoras/IM406F.webp",
    categoria: "multifuncional"
  },
  {
    nombre: "Multifuncional IM430F",
    descripcion: "Multifuncional impresora Hecha para Tu Compañia.",
    imagen: "img/productos/fotocopiadoras/IM430F.webp",
    categoria: "multifuncional"
  },
  {
    nombre: "Multifuncional IM 600F",
    descripcion: "Equipo 3 en 1 reacondicionado con garantía de 6 meses.",
    imagen: "img/productos/fotocopiadoras/IM600F.webp",
    categoria: "multifuncional"
  },
  {
    nombre: "Multifuncional IM 2500",
    descripcion: "Multifuncional impresora Hecha para Tu Compañia.",
    imagen: "img/productos/fotocopiadoras/IM2500.webp",
    categoria: "multifuncional"
  },
  {
    nombre: "Multifuncional IM C6500",
    descripcion: "Equipo 3 en 1 reacondicionado con garantía de 6 meses.",
    imagen: "img/productos/fotocopiadoras/IMC6500.webp",
    categoria: "multifuncional"
  },
  {
    nombre: "Multifuncional IM C 8000",
    descripcion: "Multifuncional impresora Hecha para Tu Compañia.",
    imagen: "img/productos/fotocopiadoras/IMC8000.webp",
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