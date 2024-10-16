// document.addEventListener('DOMContentLoaded', function () {
//     const productsContainer = document.querySelector('.products');

//     async function fetchProducts(url) {
//         const response = await fetch(url);
//         const data = await response.json();

//         // Clear existing products (if any)
//         productsContainer.innerHTML = '';

//         for (let i = 0; i < data.length; i++) {
//             const { images, description, title, category, price, id } = data[i];

//             // Ensure images is an array and use the first image
//             const imageUrl = images.length > 0 ? images[0] : '';

//             productsContainer.innerHTML += `
//                 <div class="product rounded-xl border-black bg-pink-300 p-4 hover:bg-gray-300">
//                     <img class="rounded-3xl p-2" src="${imageUrl}" alt="${title}" />
//                     <h2 class="p-2 text-center font-bold product-title">${title}</h2>
//                     <p class="p-2 text-center description">${description.length > 20 ? description.substring(0, 20).concat('...more') : description}</p>
//                     <div class="flex justify-center p-4">
//                         <h4 class="p-2 text-center bg-gray-200 font-bold rounded-full w-32 hover:bg-white product-category">${category.name}</h4>
//                     </div>
//                     <div class="p-2 product-price-container">
//                         <h3 class="p-2 rounded-xl text-center bg-purple-500 font-bold product-price hover:bg-red-700">${price}$</h3>
//                         <a href="#!" data-productid="${id}" class="add-to-cart">Add to Cart</a>
//                     </div>
//                 </div>
//             `;
//         }
//     }

//     fetchProducts('https://api.escuelajs.co/api/v1/products');
// });




// const BASE_API_URL = "https://fakestoreapi.com";


// async function fetchCategories() {
//     const url = `${BASE_API_URL}/products/categories`;
//     let data = await fetch(url);
//     let response = await data.json();
//     console.log(response);
//     return response;
// }

// async function fetchProducts(category) {
//     let url = `${BASE_API_URL}/products`;

//     if (category) {
//         url += `/category/${category}`;
//     }
//     const data = await fetch(url);
//     const response = await data.json();
//     console.log(response);
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
//             <div class="products rounded-xl border border-[#262626] bg-[#141414] px-8">
//                 <div class="h-80 flex items-center p-5 mt-5 bg-white rounded-lg overflow-hidden cursor-pointer">
//                     <img class="flex justify-center w-full h-auto max-h-80" src="${image}"/>
//                 </div>
//                 <h2 class="p-2 pt-6 text-start text-white font-bold">${title.length > 30 ? description.substring(0, 30).concat(' ... more') : title}</h2>
//                 <p class="px-2 text-start text-xs text-gray-400">${description.length > 30 ? description.substring(0, 30).concat(' ... more') : description}</p>
//                 <div class="py-4 flex justify-start">
//                     <h4 class="p-1 text-center text-sm font-bold bg-[#1A1A1A] border border-[#262626] text-white rounded-full w-36">${category}</h4>
//                 </div>
//                 <div class="pb-6 flex justify-between items-center">
//                     <div class="p-2">
//                         <h1 class="text-gray-400 text-xs"> Price </h1>
//                         <h3 class="rounded-xl text-center text-white font-bold">$${price}</h3>
//                     </div>
//                     <a href="#!" data-productid="${id}" class="p-1 rounded-lg text-center text-white bg-[#703BF7] font-light w-32">Add To Cart</a>
//                 </div>
//             </div>
//         `;
//     });
// }

// // Event listener to load data on DOMContentLoaded
// document.addEventListener('DOMContentLoaded', async function () {
//     const categories = await fetchCategories();
//     const products = await fetchProducts();
//     loadCategoriesOnUI(categories);
//     loadProductsOnUI(products);
// });




// Search products 
// function search() {
//     const searchInput = document.getElementById('searchbar').value.toLowerCase();


//     if (searchInput.length < 3) {
//         // Clear the search results or show all products if input is less than 3 characters
//         loadProductsOnUI(allProducts);
//         return; // Don't proceed with the search if less than 3 characters
//     }

//     // Filter products by title matching the search input
//     const filteredProducts = allProducts.filter(product =>
//         product.title.toLowerCase().includes(searchInput)
//     );

//     // Load the filtered products onto the UI
//     loadProductsOnUI(filteredProducts);
// }i


