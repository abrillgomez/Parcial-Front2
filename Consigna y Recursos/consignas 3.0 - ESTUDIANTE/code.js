/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [
  {
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector("#cambiar-tema");

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */

  datosPersona.nombre = prompt("Ingrese su nombre: ");
  const anioNacimiento = parseInt(prompt("Ingrese su año de nacimiento: "));
  let anioNacimientoValidado = function () {
    let alerta = "";
    if (
      anioNacimiento > 2022 ||
      anioNacimiento < 1900 ||
      isNaN(anioNacimiento)
    ) {
      alerta = parseInt(prompt("Por favor ingrese un año válido: "));
      return alerta;
    } else {
      alerta = 2022 - parseInt(anioNacimiento);
      return alerta;
    }
  };
  anioNacimientoValidado();
  datosPersona.edad = 2022 - anioNacimiento;
  datosPersona.ciudad = prompt("¿En qué ciudad vivís?");
  datosPersona.interesPorJs = confirm("¿Te interesa JavaScript?");
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  const nombre = document.querySelector("#nombre");
  const edad = document.querySelector("#edad");
  const ciudad = document.querySelector("#ciudad");
  const interesPorJs = document.querySelector("#javascript");
  nombre.innerHTML = datosPersona.nombre;
  edad.innerHTML = datosPersona.edad;
  ciudad.innerHTML = datosPersona.ciudad;
  interesPorJs.innerHTML = datosPersona.interesPorJs ? "Si" : "No";
}

function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  listado.forEach((materia) => {
    document.getElementById("fila").innerHTML += `
    <div class='caja'>
      <img
        src= ${materia.imgUrl}
       
          />
      <p class='lenguajes'>
        Lenguajes: ${materia.lenguajes}
      </p>
      <p class='bimestre'>
        Bimestre: ${materia.bimestre}
      </p>
      
    </div>
    `;
  });
  const listaImagenesTarjetas = document.querySelectorAll(
    "section div div img"
  );
  for (let i = 0; i < listaImagenesTarjetas.length; i++) {
    listaImagenesTarjetas[i].alt = listado[i].lenguajes;
  }
  const listaTarjetas = document.querySelectorAll("#fila div");
  listaTarjetas.forEach((tarjeta) => {
    tarjeta.style.pointerEvents = "none";
  });
  materiasBtn.removeEventListener("click", recorrerListadoYRenderizarTarjetas);
}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  let cambiarColorTema = document.getElementById("sitio");
  cambiarColorTema.classList.toggle("dark");
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
document.addEventListener("keydown", function (e) {
  if (e.key == "f" || e.key == "F") {
    const teclaF = document.querySelector("#sobre-mi");
    teclaF.classList.remove("oculto");
  }
});
