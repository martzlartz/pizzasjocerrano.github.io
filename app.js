
    // 1. Coordenadas de tus 3 sucursales
    const sucursales = [
      { nombre: "Gustavo A. Madero", lat: 19.492558743703068, lng: -99.13329216132865 },
      { nombre: "Ecatepec",         lat: 19.60597161145595, lng: -99.04605415532589 },
      { nombre: "San Agustín Aragón", lat: 19.53413070896985, lng: -99.02684350544337 }
    ];

    // 2. Fórmula de Haversine (distancia en km)
    function calcularDistancia(lat1, lon1, lat2, lon2) {
      const R = 6371; // Radio de la Tierra en km
      const toRad = (deg) => deg * Math.PI / 180;

      const dLat = toRad(lat2 - lat1);
      const dLon = toRad(lon2 - lon1);

      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);

      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      return R * c;
    }

    // 3. Referencia al div donde mostraremos el resultado
    const divResultado = document.getElementById("resultado");

    // 4. Pedir ubicación al usuario
    if (!navigator.geolocation) {
      divResultado.innerHTML = '<span class="error">Tu navegador no soporta geolocalización.</span>';
    } else {
      navigator.geolocation.getCurrentPosition(exito, error, {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
      });
    }

    // 5. Función si el usuario acepta
    function exito(position) {
      console.log("¡Ubicación obtenida!", position.coords.latitude, position.coords.longitude);
      const userLat = position.coords.latitude;
      const userLng = position.coords.longitude;

      let masCercana = null;
      let distanciaMinima = Infinity;

      sucursales.forEach(sucursal => {
        const d = calcularDistancia(userLat, userLng, sucursal.lat, sucursal.lng);
        if (d < distanciaMinima) {
          distanciaMinima = d;
          masCercana = sucursal.nombre;
        }
      });

      divResultado.innerHTML = `
        La sucursal más cercana es:
        <strong>${masCercana}</strong>
        a ${distanciaMinima.toFixed(2)} km de tu ubicación.
      `;
    }

    // 6. Función si el usuario rechaza o hay error
    function error(err) {
      let mensaje = "No se pudo obtener tu ubicación.";
      if (err.code === 1) mensaje = "Permiso de ubicación denegado.";
      if (err.code === 2) mensaje = "Ubicación no disponible.";
      if (err.code === 3) mensaje = "Tiempo de espera agotado.";
      divResultado.innerHTML = `<span class="error">${mensaje}</span>`;
      function error(err) {
  console.log("Error de geolocalización:", err.code, err.message);
}
    }



const combos = [ 

  // Combos
  {
   nombre: "Combo Solo amigos",
   imagen: "amigos.png",
   descripcion: "2 mini pizzas (sabor a escoger) + 2 refrescos de 600ml",
   precio: "$149"
  },
  {
   nombre: "Combo Fiesta",
   imagen: "fiesta.png",
   descripcion: "2 pizzas mega + 1 refresco de 3 litros + 2 complementos a escoger",
   precio: "$389"
  },
  {
   nombre: "Combo Indeciso",
   imagen: "indeciso.png",
   descripcion: "1 pizza grande de 2 especialidades a escoger + un complemento + 1 refresco 1 litro",
   precio: "$249"
  },
  {
   nombre: "Combo Botanero",
   imagen: "botana.png",
   descripcion: "3 complementos a escoger + 2 refrescos de 1 Litro ",
   precio: "$179"
  },
  {
   nombre: "Combo horas extra",
   imagen: "horas.png",
   descripcion: "2 pizzas cuadradas grandes + 1 refresco de 3 litros + complemento",
   precio: "$350"
  },
  {
    nombre: "Combo Almuerzo",
    imagen: "almuerzo.png",
    descripcion: "1 pizza individual de 1 ingrediente + 1 refresco de 600ml + papas gajo.",
    precio: "$119"
  },
  {
    nombre: "Combo Maratón",
    imagen: "maraton.png",
    descripcion: "1 pizza familiar + orden de alitas o boneless (8 pzas) + 1 refresco de 2 litros.",
    precio: "$299"
  },
  {
    nombre: "Combo Cumpleaños",
    imagen: "cumpleaños.png",
    descripcion: "3 pizzas grandes + 2 refrescos de 2 litros + 2 órdenes de dedos de queso.",
    precio: "$489"
  },
];

const promos = [

// Promociones
  {
   nombre: "Martes Especial:",
   descripcion: "Combo Horas Extra a precio especial!",
   precio: "$299"
  },
  {
   nombre: "Miércoles 2x1:",
   descripcion: "En la compra de cualquier pizza grande en combo, la segunda pizza mediana a precio especial!",
   precio: "$99"
  },
  {
   nombre: "Jueves de Botana:",
   descripcion: "Agrega un Combo Botanero al 50% de descuento!",
   precio: "Compras mayores a $240"
  },
  {
   nombre: "Viernes de Desconexión:",
   descripcion: "Pide tu Combo Maratón o Fiesta y llévate unas papas gajo o aros de cebolla",
   precio: "¡Gratis!"
  },
  {
   nombre: "Domingo Familiar:",
   descripcion: "En la compra de 2 pizzas familiares o Combo Mega, llévate un refresco de 2L y una orden de pan de ajo",
   precio: "¡Gratis!"
  },
  {
   nombre: "Todos los días:",
   descripcion: "¡Haz tu combo más grande por unos cuantos pesos más!",
   precio: "¡Solo por $50 mas!"
  }
];

// EDICION DE CUERPO


const vistas = {
  "/": () => `
  <h2 class="titulo-inicio">Inicio</h2>
    <section class="carrusel-contenedor">
        <div class="carrusel">
            <img src="pizza1.jpg" alt="Pizza 1" class="pizza-img">
            <img src="pizza2.jpg" alt="Pizza 2" class="pizza-img">
            <img src="pizza3.jpg" alt="Pizza 3" class="pizza-img">
            <img src="pizza4.jpg" alt="Pizza 4" class="pizza-img">
            <img src="pizza5.jpg" alt="Pizza 5" class="pizza-img">
            <img src="fachada1.jpg" alt="Fachada 1" class="pizza-img">
            <img src="fachada2.jpg" alt="Fachada 2" class="pizza-img">
            <img src="fachada3.jpg" alt="Fachada 3" class="pizza-img">
            <img src="pizza6.jpg" alt="Pizza 6" class="pizza-img">
            <img src="pizza7.jpg" alt="Pizza 7" class="pizza-img">
            <img src="fachada4.jpg" alt="Fachada 4" class="pizza-img">
            <img src="fachada5.jpg" alt="Fachada 5" class="pizza-img">
            <img src="pizza8.jpg" alt="Pizza 8" class="pizza-img">
            <img src="pizza9.jpg" alt="Pizza 9" class="pizza-img">
            <img src="fachada6.jpg" alt="Fachada 6" class="pizza-img">
            <img src="pizza10.jpg" alt="Pizza 10" class="pizza-img">
        </div>
    </section>
`,

  "/menu": () => `
  <h2 class="Menu">Menú</h2>
    <div class="grid">

    <div class="card Chesse">
        <img src="Chesse.png">
        <h3>Chessy MC</h3>
    </div>

    <div class="card Papas">
        <img src="Papas.png">
        <h3>Red Potato</h3>
    </div>

    <div class="card Puffys">
        <img src="Puffy.jpg">
        <h3>Puffys</h3>
    </div>

    <div class="card IT">
        <img src="IT.png">
        <h3>Italiana</h3>
    </div>

    <div class="card MX">
        <img src="MX.png">
        <h3>Mexicana</h3>
    </div>

    <div class="card PE">
        <img src="PE.png">
        <h3>Peperroni</h3>
    </div>

    <div class="card PH">
        <img src="PH.png">
        <h3>Remix</h3>
    </div>

    <div class="card GT">
        <img src="GT.png">
        <h3>Pizza Gigant</h3>
    </div>

    <div class="card HW">
        <img src="HW.png">
        <h3>Hawaiana</h3>
    </div>

    <div class="card Orilla">
        <img src="Orilla.jpg">
        <h3>Orilla de Queso</h3>
    </div>

    <div class="card RT">
        <img src="RT.png">
        <h3>Individual</h3>
    </div>

    <div class="card VG">
        <img src="VG.png">
        <h3>Vegetariana</h3>
    </div>
  `,

  "/sucursales": () => `
    <section class="sucursales-container">
  <h2 class="titulo-seccion">Nuestras Sucursales</h2>
  <p class="subtitulo-seccion">¡Encuentra tu pizzería más cercana y disfruta de las mejores pizzas!</p>

  <div class="grid">
    <!-- Sucursal 1: Ecatepec (Centro) -->
    <article class="card card-sucursal">
      <div class="card-header">
        <h3>Sucursal Ecatepec Centro</h3>
      </div>
      <div class="card-body">
        <p><strong>📍 Dirección:</strong> Av. San Cristóbal #45, Col. Centro, Ecatepec de Morelos, Edo. de México.</p>
        <p><strong>📞 Teléfono:</strong> 55 5787 0000</p>
        <p><strong>🕒 Horario:</strong> Lunes a Domingo de 11:00 am a 10:00 pm</p>
        <span class="badge">Servicio a domicilio y comedor</span>
      </div>
    </article>

    <!-- Sucursal 2: Ecatepec (Plaza / Aragón) -->
    <article class="card card-sucursal">
      <div class="card-header">
        <h3>Sucursal San Agustín / Aragón</h3>
      </div>
      <div class="card-body">
        <p><strong>📍 Dirección:</strong> Av. Central #102, Col. San Agustín, Ecatepec de Morelos, Edo. de México.</p>
        <p><strong>📞 Teléfono:</strong> 55 5774 1122</p>
        <p><strong>🕒 Horario:</strong> Lunes a Domingo de 12:00 pm a 10:30 pm</p>
        <span class="badge">Servicio a domicilio</span>
      </div>
    </article>

    <!-- Sucursal 3: Gustavo A. Madero (Lindavista) -->
    <article class="card card-sucursal">
      <div class="card-header">
        <h3>Sucursal Lindavista (GAM)</h3>
      </div>
      <div class="card-body">
        <p><strong>📍 Dirección:</strong> Av. Instituto Politécnico Nacional #1820, Col. Lindavista, Gustavo A. Madero, CDMX.</p>
        <p><strong>📞 Teléfono:</strong> 55 5586 3344</p>
        <p><strong>🕒 Horario:</strong> Lunes a Domingo de 11:30 am a 10:00 pm</p>
        <span class="badge">Comedor y para llevar</span>
      </div>
    </article>
  </div>
</section>
  `,

  "/promos": () => `
    <h2>Nuestras Promociones y Combos </h2>
    <p>ㅤ</p>
    <div class="grid grid-promos">
      ${combos.map(combo => `
        <div class="card promo-card">
           <h3>${combo.nombre}</h3>
           <img src="${combo.imagen}" alt="${combo.nombre}" class="promo-img">
           <p class="promo-desc">${combo.descripcion}</p>
           <p class="promo-precio">${combo.precio}</p>
           </div>
           `).join("")} 
      </div>

    <div class="separador-seccion">
      <h2>Promociones Especiales</h2>
      <p style="color: #666; margin-bottom: 1rem;">Aprovecha descuentos exclusivos según el día de la semana.</p>
      <p>ㅤ</p>
      <div class="grid grid-promos">
      ${promos.map(combo => `
        <div class="card promo-card">
           <h3>${combo.nombre}</h3>
           <p class="promo-desc">${combo.descripcion}</p>
           <p class="promo-precio">${combo.precio}</p>
           </div>
           `).join("")} 

    </div>
  
  `,



  "/contacto": () => `
  

<section class="contacto-card">
  <h2>Contáctanos</h2>
  <!-- Redes sociales o iconos -->
  <div class="social-icons">
    <a href="#" aria-label="Red social 1">
      <img src="FB.png" alt="Facebook">
    </a>
    <a href="#" aria-label="Red social 2">
         <img src="IG.png" alt="Instagram">
    </a>
    <a href="#" aria-label="Red social 3">
      <img src="X.png" alt="Twitter">
    </a>
    <a href="#" aria-label="Red social 4">
      <img src="YT.png" alt="YouTube">
    </a>
  </div>

  <!-- Información de contacto -->
  <div class="info-grupo">
    <h3>Teléfono</h3>
    <a href="tel:5512345678" class="info-dato">55-1234-5678</a>
  </div>

  <div class="info-grupo">
    <h3>Correo</h3>
    <a href="mailto:pizzatencion@gmail.com" class="info-dato enlace">pizzatencion@gmail.com</a>
  </div>

</section>  
<br>
<br>
<center>
<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1155.3144143025304!2d-99.0272195167753!3d19.533691305381375!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f009c8fb29df%3A0xa5cd0280cc58c48b!2sMexipuerto%20Ciudad%20Azteca!5e1!3m2!1ses-419!2smx!4v1789342184445!5m2!1ses-419!2smx" width="400" height="500" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
</center>
  </center>
  `,

  "404": () => `
    <h2>404</h2>
    <p>Página no encontrada.</p>
  `,
};

// --------------------------------------------
// NO MOVER NADA DE AQUI
// --------------------------------------------
function router() {
  let ruta = location.hash.replace("#", "") || "/";
  const vista = vistas[ruta] || vistas["404"];
  document.getElementById("app").innerHTML = vista();
}

window.addEventListener("hashchange", router);
window.addEventListener("DOMContentLoaded", router);







