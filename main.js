const products = [
    {
        title: "THE LONGWEAR LIPSTICK 503",
        description: "Labial líquido mate",
        seller: "3ina",
        price: 16.95,
        link: "https://es.3ina.com/products/the-longwear-lipstick-503?variant=40566523920463",
        image: "/assets/labial1.webp"
    },
    {
        title: "EYELINER WATERPROOF",
        description: "Delineador de ojos 24H",
        seller: "Nyx",
        price: 15.95,
        link: "https://www.nyxcosmetics.es/ojos/eyeliner/eyeliner-waterproof-epic-ink-liner/NYX_409.html",
        image: "https://www.nyxcosmetics.es/dw/image/v2/AAQP_PRD/on/demandware.static/-/Sites-nyx-master-catalog/default/dwc2918e6b/ProductImages/2017/Eyes/Epic_Ink_Liner/800897085605_epicinkliner_main.jpg?sw=698&sfrm=jpg&q=70"
    },
    {
        title: "THE SORBET FACE CREAM",
        description: "Crema hidratante facial en textura sorbet",
        seller: "3ina",
        price: 24.95,
        link: "https://es.3ina.com/products/the-24h-level-up-mascara?variant=39588857413711",
        image: "/assets/cream1.webp"
    },
    {
        title: "THE 24H LEVEL UP MASCARA",
        description: "Máscara de pestañas 24H",
        seller: "Savage",
        price: 15.95,
        link: "https://es.3ina.com/products/the-24h-level-up-mascara?variant=39588857413711",
        image: "/assets/mask1.webp"
    },
    {
        title: "THE LONGWEAR LIPSTICK 503",
        description: "Labial líquido mate",
        seller: "3ina",
        price: 16.95,
        link: "https://es.3ina.com/products/the-longwear-lipstick-503?variant=40566523920463",
        image: "/assets/labial1.webp"
    },
    {
        title: "EYELINER WATERPROOF",
        description: "Delineador de ojos 24H",
        seller: "Nyx",
        price: 15.95,
        link: "https://www.nyxcosmetics.es/ojos/eyeliner/eyeliner-waterproof-epic-ink-liner/NYX_409.html",
        image: "https://www.nyxcosmetics.es/dw/image/v2/AAQP_PRD/on/demandware.static/-/Sites-nyx-master-catalog/default/dwc2918e6b/ProductImages/2017/Eyes/Epic_Ink_Liner/800897085605_epicinkliner_main.jpg?sw=698&sfrm=jpg&q=70"
    },
    {
        title: "THE SORBET FACE CREAM",
        description: "Crema hidratante facial en textura sorbet",
        seller: "3ina",
        price: 24.95,
        link: "https://es.3ina.com/products/the-24h-level-up-mascara?variant=39588857413711",
        image: "/assets/cream1.webp"
    },
    {
        title: "THE 24H LEVEL UP MASCARA",
        description: "Máscara de pestañas 24H",
        seller: "Savage",
        price: 15.95,
        link: "https://es.3ina.com/products/the-24h-level-up-mascara?variant=39588857413711",
        image: "/assets/mask1.webp"
    },    {
        title: "THE LONGWEAR LIPSTICK 503",
        description: "Labial líquido mate",
        seller: "RareBeauty",
        price: 16.95,
        link: "https://es.3ina.com/products/the-longwear-lipstick-503?variant=40566523920463",
        image: "/assets/labial1.webp"
    },
    {
        title: "THE 24H PEN EYELINER",
        description: "Delineador de ojos 24H",
        seller: "3ina",
        price: 15.95,
        link: "https://es.3ina.com/products/the-24h-pen-eyeliner?variant=28599604281423",
        image: "/assets/eyeliner1.webp"
    },
    {
        title: "THE SORBET FACE CREAM",
        description: "Crema hidratante facial en textura sorbet",
        seller: "3ina",
        price: 24.95,
        link: "https://es.3ina.com/products/the-24h-level-up-mascara?variant=39588857413711",
        image: "/assets/cream1.webp"
    },
    {
        title: "THE 24H LEVEL UP MASCARA",
        description: "Máscara de pestañas 24H",
        seller: "3ina",
        price: 15.95,
        link: "https://es.3ina.com/products/the-24h-level-up-mascara?variant=39588857413711",
        image: "/assets/mask1.webp"
    }
]

const productBox = document.querySelector('.products');
const sellerSelector = document.querySelector('.seller-selector');
const priceFilterButton = document.querySelector('.price-filter-button');
const priceSelector = document.querySelector('.price-filter-input');
const clearFilterButton = document.querySelector('.clear-filter-button');

const sellers = new Set();
let filterBySeller = undefined;
let filterByPrice = undefined;

products.forEach((product) => {
    sellers.add(product.seller);
});

sellerSelector.addEventListener("change", (event) => {
    const selectedSeller = sellerSelector.value;

    if (sellers.has(selectedSeller)) {
        filterBySeller = selectedSeller;
    } else {
        filterBySeller = undefined;
    }

    displayCarousel(products.filter((product) => filterProduct(product, filterBySeller, filterByPrice)));
});

priceFilterButton.addEventListener("click", (event) => {
    const selectedPrice = priceSelector.value;

   if (selectedPrice != "") {
       filterByPrice = selectedPrice;
   } else {
       filterByPrice = undefined;
   }

    displayCarousel(products.filter((product) => filterProduct(product, filterBySeller, filterByPrice)));
});

clearFilterButton.addEventListener("click", (event) => {
    filterByPrice = undefined;
    filterBySeller = undefined;

    sellerSelector.value = "";
    priceSelector.value = "";

    displayCarousel(products);
});

const filterProduct = (product, seller, price) => (seller == undefined || product.seller == seller) &&
    (price == undefined || product.price < price);

const ProductCard = (product) => {
    return `<article class="product-container">
                <div class="product-detail">
                    <img src=${product.image} alt="labial" class="product-link">
                    <a class="product-title"
                       href=${product.link}
                       rel="noopener">
                        ${product.title}
                    </a>
                    <p class="product-description">
                        ${product.description} (${product.seller})
                    </p>
                </div>
                <button class="product-add-to-cart-button">
                    <p>Añadir al carrito</p>
                    <p>${product.price}</p>
                </button>
            </article>`
};

const displayCarousel = (products) => {
    productBox.innerHTML = "";
    products.forEach((product) => {
        productBox.innerHTML += ProductCard(product);
    });
    if (products.length == 0) {
        productBox.innerHTML = "<p>¡Ups! No se han encontrado productos con estas características</p>"
    }
};

const fillSelector = () => {
    sellers.forEach((seller) => {
        sellerSelector.innerHTML += `<option value=${seller}>${seller}</option>`;
    });
};

displayCarousel(products);
fillSelector();
