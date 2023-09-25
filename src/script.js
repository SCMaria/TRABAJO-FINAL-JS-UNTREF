const fragment = document.createDocumentFragment();

fetch("products.json")
            .then(res=>res.json())
            .then(json=>window.localStorage.products = JSON.stringify(json));

const products = JSON.parse(window.localStorage.products);
console.log(products);

const ul = document.querySelector('#product-list');

if(ul){
    products.forEach(function(product,index) {
        let li=fragment.appendChild(document.createElement("li"));
        li.textContent=product.codigo;
        let icono = document.createElement("img");
        icono.src="img/boton-mas.png"
        let btn = fragment.appendChild(document.createElement("a"));
        btn.addEventListener("click",function(event){ saveId(index); }, false);
        btn.setAttribute('href', 'product.html');
        btn.classList.add("miBoton");
        let br = fragment.appendChild(document.createElement("br"));
        ul.appendChild(li);
        ul.appendChild(btn);
        ul.appendChild(br);
        btn.appendChild(icono);

    });
}

function saveId(id){
    window.localStorage.productClick = id;

}


const h1 = document.querySelector('#title');
const description = document.querySelector('#description');
const product = products[window.localStorage.productClick];
const img = document.querySelector('#img');

if(h1){
    h1.textContent = product.codigo;
    description.textContent = product.descripcion;
    img.src = product.imagen;
}