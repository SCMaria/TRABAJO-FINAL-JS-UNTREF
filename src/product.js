

const productList = document.querySelector("#product-list");
let products = [];
const lista = async () => {
    productList.innerHTML = "";
    products = localStorage.getItem("products");


    if (products == null) {
        const response = await fetch("json/products.json");
        product = await response.json();

        localStorage.setItem("products", JSON.stringify(product));
  }
  if (typeof products == "string") {
    products = JSON.parse(products);
  }

};


const h1 = document.querySelector('#title');
const description = document.querySelector('#description');
const product = products[window.localStorage.productClick];
const img = document.querySelector('#img');

if(h1){
    h1.textContent = product.codigo;
    description.textContent = product.descripcion;
    img.src = product.imagen;
    let lista = document.getElementById('puntos_claves');
    let listaHtml = '';
    product.claves.forEach(clave => {
        listaHtml += '<li><i class="fa fa-check text-success"></i>'+ clave +'</li>';
    });
    console.log(listaHtml);
    lista.innerHTML = listaHtml;
}