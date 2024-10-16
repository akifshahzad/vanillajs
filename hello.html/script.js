document.addEventListener('DOMContentLoaded', function () {
    let products = document.querySelector('.products');
    let url = `https://api.escuelajs.co/api/v1/products?offset=0&limit=5`;
    let opset = 0;
    async function fetchProducts(url) {
        try {
            let data = await fetch(url);
            opset = opset + 5;
            if (data.ok) {
                let response = await data.json();

                for (let i = 0; i < response.length; i++) {
                    let description = response[i].description;
                    let title = response[i].title;
                    products.innerHTML += `
       <div class="product">
           <img src="${response[i].images[1]}" alt="${response[i].category.name
                        }" class="product-img">
           <div class="product-content">
           <h2 class="product-title">${title.length > 18 ? title.substring(0, 18).concat(' ...') : title
                        }</h2>
           <h4 class="product-category">${response[i].category.name}</h4>
           <p class="product-description">${description.length > 80
                            ? description.substring(0, 80).concat(' ...more')
                            : description
                        }</p>
           <div class="product-price-container">
               <h3 class="product-price">$${response[i].price}</h3>
               <a href="#!" data-productId="${response[i].id
                        }" class="add-to-cart"><ion-icon name="cart-outline"></ion-icon></a>
           </div>
           </div>

       </div>
       `;
                }
            }
        } catch (err) {
            console.log(err);
        }
    }
    fetchProducts(url);

    window.addEventListener('scroll', function () {
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
        if (scrollTop + clientHeight >= scrollHeight - 3 / 4) {
            setTimeout(() => {
                fetchProducts(
                    `https://api.escuelajs.co/api/v1/products?offset=${opset}&limit=5`
                );
            }, 1000);
        }
    });
});


// const BASE_API_URL = "https://fakestoreapi.com";
// let allProducts = []; // Store all products for searching
// let cart = []; // Array to store cart items
// let basket = JSON.parse(localStorage.getItem('data')) || [];


// async function fetchCategories() {
//     const url = `${BASE_API_URL}/products/categories`;
//     let data = await fetch(url);
//     let response = await data.json();
//     return response;
// }
// // Fetch products
// async function fetchProducts(category) {
//     let url = `${BASE_API_URL}/products`;

//     if (category) {
//         url += `/category/${category}`;
//     }
//     const data = await fetch(url);
//     const response = await data.json();
//     allProducts = response;
//     return response;
// }

// async function selectCategory(category, element) {
//     const products = await fetchProducts(category);
//     loadProductsOnUI(products);

//     // Remove the border class from all categories
//     const allCategories = document.querySelectorAll('.category');
//     allCategories.forEach(cat => cat.classList.remove('border-l-2', 'border-[#703BF7]'));

//     // Add border classes to the clicked category
//     element.classList.add('border-l-2', 'border-[#703BF7]');
// }

// // Load categories on UI
// function loadCategoriesOnUI(categories) {
//     let categoriesElement = document.querySelector('.categories');
//     categoriesElement.innerHTML = ''; // Clear previous categories if needed

//     for (let i = 0; i < categories.length; i++) {
//         categoriesElement.innerHTML += `
//             <div class="bg-gradient-to-r from-[#1A1A1A] to-[#141414] category cursor-pointer" onclick="selectCategory(&quot;${categories[i]}&quot;, this )">
//                 <h2 class="p-2 text-center text-white font-bold product-x">${categories[i]}</h2>
//             </div>`;
//     }
// }

// // Load products on UI
// function loadProductsOnUI(products) {
//     let productsElement = document.querySelector('.products');
//     productsElement.innerHTML = ''; // Clear the container

//     products.forEach(product => {
//         const { image, title, description, category, price, id } = product;
//         productsElement.innerHTML += `
//                 <div class="products rounded-xl border border-[#262626] bg-[#141414] px-8">
//                     <a href="product-detail.html?id=${id}">
//                     <div class="h-80 flex items-center p-5 mt-5 bg-white rounded-lg overflow-hidden cursor-pointer">
//                         <img class="flex justify-center w-full h-auto max-h-80" src="${image}" />
//                     </div>
//                     <h2 class="p-2 pt-6 text-start text-white font-bold">${title}</h2>
//                     <p class="px-2 text-start text-xs text-gray-400">${description.length > 30 ? description.substring(0, 30).concat(' ... more') : description}</p>
//                     <div class="py-4 flex justify-start">
//                         <h4 class="p-1 text-center text-sm font-bold bg-[#1A1A1A] border border-[#262626] text-white rounded-full w-36">${category}</h4>
//                     </div>
//                     <div class="pb-6 flex justify-between items-center">
//                         <div class="p-2">
//                             <h1 class="text-gray-400 text-xs"> Price </h1>
//                             <h3 class="rounded-xl text-center text-white font-bold">$${price}</h3>
//                         </div>
//                             </a>
//                         <button onclick = "addtocart('${id}','${title}','${image}','${price}','${description}', )" class="p-1 rounded-lg text-center text-white bg-[#703BF7] font-light w-32 add-to-cart-btn" data-id="${id}">Add To Cart</button> 
            
//                     </div>
//                 </div>
//             `;
//     });

//     // Add event listeners to "Add to Cart" buttons
//     const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
//     addToCartButtons.forEach(button => {
//         button.addEventListener('click', () => addToCart(button.getAttribute('data-id')));
//     });
// }

// function addToCart(productId) {
//     const product = allProducts.find(prod => prod.id == productId);
//     if (product) {
//         const existingProduct = basket.find(item => item.id == productId);

//         if (existingProduct) {
//             existingProduct.quantity += 1; // Increase the quantity if product already exists
//         } else {
//             basket.push({ ...product, quantity: 1 }); // Add new product with quantity 1
//         }

//         localStorage.setItem('data', JSON.stringify(basket)); // Save the cart to localStorage
//         updateCartCount(); // Update the cart icon count
//     }
// }
// // Add to cart function
// function addToCart(productId) {
//     const product = allProducts.find(prod => prod.id == productId);
//     if (product) {
//         cart.push(product); // Add product to the cart
//         updateCartCount(); // Update the cart icon count
//     }
// }
// // // Update the cart count in the navbar
// // function updateCartCount() {
// //     const cartCountElement = document.querySelector('.cart-count');
// //     cartCountElement.textContent = cart.length; // Update the cart count text
// // }

// // search product
// function search() {
//     const searchInput = document.getElementById('searchbar').value.toLowerCase();
//     if (searchInput.length)
//         if (searchInput.length < 3) {
//             loadProductsOnUI();
//             return;
//         }
//     const filteredProducts = allProducts.filter(product => product.title.toLowerCase().includes(searchInput));
//     loadProductsOnUI(filteredProducts);
// }

// // Initial loading of categories and products
// document.addEventListener('DOMContentLoaded', async function () {
//     const categories = await fetchCategories();
//     const products = await fetchProducts();
//     loadCategoriesOnUI(categories);
//     loadProductsOnUI(products);
// });



// // let addtocart = (id, name, image, price, description) => {
// //     console.log(id)

// //     basket.push({
// //         id: id,
// //         items: 1,
// //         title: name,
// //         price: price,
// //         image: image,
// //         description: description,
// //     })
// //     localStorage.setItem('data', JSON.stringify(basket));

// //     calculate()
// // }



// // let calculate = () => {
// //     let cart_Icon = document.getElementById('cartAmount')
// //     let cartAmount = basket.length
// //     cart_Icon.innerHTML = cartAmount
// // }

// // calculate()

