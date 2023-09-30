let products = [];
products = localStorage.getItem("products");
products = JSON.parse(products);



const h1 = document.querySelector('#title');
const description = document.querySelector('#description');
const product = products[window.localStorage.productClick];
const img = document.querySelector('#img');
const precio= document.querySelector('#precio');
const detalle = document.getElementById('detalle');
const estrellas = document.getElementById('rating');


if (h1) {
    h1.textContent = product.codigo;
    description.textContent = product.descripcion;
    img.src = product.imagen;
    detalle.textContent = product.detalle;
    precio.textContent += "$" + product.precio;
    let lista = document.getElementById("puntos_claves");
    let listaHtml = "";
    product.claves.forEach((clave) => {
      listaHtml +=
        '<li><i class="fa fa-check text-success"></i>' + clave + "</li>";
    });

    let cantEstrellas = product.puntuacion.length;
    let listaEstrellas = "";
    for (let index = 1; index <= 5; index++) {
      if(cantEstrellas >= index){
        listaEstrellas += '<label for="stars-rating-3"><i class="fa fa-star text-primary"></i></label>';
      }else{
        listaEstrellas += '<label for="stars-rating-5"><i class="fa fa-star"></i></label>';
      }
    }
    estrellas.innerHTML = listaEstrellas;

    
  
    lista.innerHTML = listaHtml;
  }
  