let products = [];
products = localStorage.getItem("products");
products = JSON.parse(products);



const h1 = document.querySelector('#title');
const description = document.querySelector('#description');
const product = products[window.localStorage.productClick];
const img = document.querySelector('#img');
const precio= document.querySelector('#precio');
const detalle = document.getElementById('detalle');

if (h1) {
    h1.textContent = product.codigo;
    description.textContent = product.descripcion;
    img.src = product.imagen;
    detalle.textContent = product.detalle;
    precio.textContent += "$" + product.precio + "";
    let lista = document.getElementById("puntos_claves");
    let listaHtml = "";
    product.claves.forEach((clave) => {
      listaHtml +=
        '<li><i class="fa fa-check text-success"></i>' + clave + "</li>";
    });
    console.log(listaHtml);
    lista.innerHTML = listaHtml;
  }
  