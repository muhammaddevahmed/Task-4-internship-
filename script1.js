document.getElementById('menu-btn').addEventListener('click', () => {
    const dropdown = document.getElementById('dropdown-menu');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  });


// Function to handle tab switching
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove 'active' class from all tabs and contents
    tabs.forEach(tab => tab.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));
    
    // Add 'active' class to clicked tab and corresponding content
    tab.classList.add('active');
    const contentId = tab.id.replace('-tab', '-content');
    document.getElementById(contentId).classList.add('active');
  });
});

// Set the default active tab to "All Categories"
document.getElementById('all-tab').classList.add('active');
document.getElementById('all-content').classList.add('active');  

// Placeholder for dropdown actions
document.getElementById('filterDropdown').addEventListener('change', function () {
    alert(`Filter selected: ${this.value}`);
  });
  
  document.getElementById('sortDropdown').addEventListener('change', function () {
    alert(`Sort selected: ${this.value}`);
  });

  const products = Array.from({ length: 30 }, (_, i) => `Product ${i + 1}`);

const productList = document.getElementById('product-list');

function renderProducts() {
  products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.textContent = product;
    productList.appendChild(productCard);
  });
}

// Initial render
renderProducts();

  