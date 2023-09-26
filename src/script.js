const fragment = document.createDocumentFragment();

fetch("products.json")
            .then(res=>res.json())
            .then(json=>window.localStorage.products = JSON.stringify(json));

const products = JSON.parse(window.localStorage.products);
console.log(products);

const ul = document.querySelector('#product-list');
let html = '';

if(ul){
    products.forEach(function(product,index) {
        html += '<div class="col-xs-12 col-md-6 bootstrap snippets bootdeys">' + 
                    '<div class="product-content product-wrap clearfix">' +
                        '<div class="row">' + 
                            '<div class="col-md-5 col-sm-12 col-xs-12">' +
                                '<div class="product-image">' + 
                                    '<img src="'+ product.imagen +'" alt="194x228" height="228" class="img-responsive">' +
                                    '<span class="tag2 hot">' +
                                        'HOT' +
                                    '</span>' +
                                '</div>' +
                            '</div>' +
                            '<div class="col-md-7 col-sm-12 col-xs-12">' +
                                '<div class="product-deatil">' +
                                    '<h5 class="name">' +
                                        '<a href="#">' +
                                            product.codigo +
                                        '</a>' +
                                    '</h5>' +
                                    '<p class="price-container">' +
                                        '<span>$'+ product.precio +'</span>' +
                                    '</p>' +
                                    '<span class="tag1"></span>' +
                                '</div>' +
                                '<div class="description">' +
                                    '<p>'+ product.descripcion +'</p>' +
                                '</div>' +
                                '<div class="product-info smart-form">' +
                                    '<div class="row">' +
                                        '<div class="col-md-6 col-sm-6 col-xs-6">' +
                                            '<a href="product.html" class="btn btn-success" onclick="saveId('+ index +')">Ver Detalle</a>' +
                                        '</div>' +
                                        '<div class="col-md-6 col-sm-6 col-xs-6">' +
                                            '<div class="rating">' +
                                                '<label for="stars-rating-5"><i class="fa fa-star"></i></label>' +
                                                '<label for="stars-rating-4"><i class="fa fa-star"></i></label>' +
                                                '<label for="stars-rating-3"><i class="fa fa-star text-primary"></i></label>' +
                                                '<label for="stars-rating-2"><i class="fa fa-star text-primary"></i></label>' +
                                                '<label for="stars-rating-1"><i class="fa fa-star text-primary"></i></label>' +
                                            '</div>' +
                                        '</div>' +
                                    '</div>' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                '</div>';

    });

    document.getElementById('section').innerHTML = html;
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
    let lista = document.getElementById('puntos_claves');
    let listaHtml = '';
    product.claves.forEach(clave => {
        listaHtml += '<li><i class="fa fa-check text-success"></i>'+ clave +'</li>';
    });
    console.log(listaHtml);
    lista.innerHTML = listaHtml;
}