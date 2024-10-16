const BASE_API_URL = "https://fakestoreapi.com";
let allProducts = []; // Store all products for searching
let basket = JSON.parse(localStorage.getItem('data')) || [];

// Fetch categories
async function fetchCategories() {
    const url = `${BASE_API_URL}/products/categories`;
    let data = await fetch(url);
    let response = await data.json();
    return response;
}
// Fetch products
async function fetchProducts(category) {
    let url = `${BASE_API_URL}/products`;

    if (category) {
        url += `/category/${category}`;
    }
    const data = await fetch(url);
    const response = await data.json();
    allProducts = response;
    return response;
}

async function selectCategory(category, element) {
    const products = await fetchProducts(category);
    loadProductsOnUI(products);

    // Remove the border class from all categories
    const allCategories = document.querySelectorAll('.category');
    allCategories.forEach(cat => cat.classList.remove('border-l-2', 'border-[#703BF7]'));

    // Add border classes to the clicked category
    element.classList.add('border-l-2', 'border-[#703BF7]');
}
// Load categories on UI
function loadCategoriesOnUI(categories) {
    let categoriesElement = document.querySelector('.categories');
    categoriesElement.innerHTML = ''; // Clear previous categories if needed

    for (let i = 0; i < categories.length; i++) {
        categoriesElement.innerHTML += `
            <div class="bg-gradient-to-r from-[#1A1A1A] to-[#141414] category cursor-pointer" onclick="selectCategory(&quot;${categories[i]}&quot;, this )">
                <h2 class="p-2 text-center text-white font-bold product-x">${categories[i]}</h2>
            </div>`;
    }
}
// Load products on UI
function loadProductsOnUI(products) {
    let productsElement = document.querySelector('.products');
    productsElement.innerHTML = ''; // Clear the container

    products.forEach(product => {
        const { image, title, description, category, price, id } = product;
        productsElement.innerHTML += `
            <div class="products rounded-xl border border-[#262626] bg-[#141414] px-8">
                <a href="product-detail.html?id=${id}">
                    <div class="h-80 flex items-center p-5 mt-5 bg-white rounded-lg overflow-hidden cursor-pointer">
                        <img class="flex justify-center w-full h-auto max-h-80" src="${image}" />
                    </div>
                    <h2 class="p-2 pt-6 text-start text-white font-bold">${title}</h2>
                    <p class="px-2 text-start text-xs text-gray-400">${description.length > 30 ? description.substring(0, 30).concat(' ... more') : description}</p>
                    <div class="py-4 flex justify-start">
                        <h4 class="p-1 text-center text-sm font-bold bg-[#1A1A1A] border border-[#262626] text-white rounded-full w-36">${category}</h4>
                    </div>
                    <div class="pb-6 flex justify-between items-center">
                        <div class="p-2">
                            <h1 class="text-gray-400 text-xs"> Price </h1>
                            <h3 class="rounded-xl text-center text-white font-bold">$${price}</h3>
                        </div>
                    </a>
                    <button onclick="addtocart(&quot;${id}&quot; , &quot;${title}&quot; ,   &quot;${image}&quot; , &quot;${category}&quot; , &quot;${description}&quot; , &quot;${price}&quot; )" class="p-1 rounded-lg text-center text-white bg-[#703BF7] font-light w-32 add-to-cart-btn" data-id="${id}">Add To Cart</button> 
                </div> 
            </div>
        `;
    });
}
// Search product
function search() {
    const searchInput = document.getElementById('searchbar').value.toLowerCase();
    if (searchInput.length < 3) {
        loadProductsOnUI(allProducts); // Load all products if search input is less than 3
        return;
    }
    const filteredProducts = allProducts.filter(product => product.title.toLowerCase().includes(searchInput));
    loadProductsOnUI(filteredProducts);
}
// Initial loading of categories and productss
document.addEventListener('DOMContentLoaded', async function () {
    const categories = await fetchCategories();
    const products = await fetchProducts();
    loadCategoriesOnUI(categories);
    loadProductsOnUI(products);
});

   // Function to add product to cart
   let addtocart = (id, title, image,description,category,price ) => {
    basket.push({ id, title, image, description,category,price});
    localStorage.setItem('data', JSON.stringify(basket)); // Save to localStorage
    console.log(price);
    calculate(); // Update cart count
};
    // Function to update cart count display
    let calculate = () => {
        document.getElementById('cartAmount').innerHTML = basket.length;
    };

    // Load cart data on page load
    document.addEventListener('DOMContentLoaded', () => {
        basket = JSON.parse(localStorage.getItem('data')) || []; // Load from localStorage
        calculate(); // Update cart count display
    });
    






