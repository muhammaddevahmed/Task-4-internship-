// document.getElementById('menu-btn').addEventListener('click', () => {
//     const dropdown = document.getElementById('dropdown-menu');
//     dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
//   });

document.addEventListener("DOMContentLoaded", () => {
  const filterDropdown = document.getElementById("filterDropdown");
  const sortDropdown = document.getElementById("sortDropdown");
  const productCards = document.querySelectorAll(".product-card");
  const container = document.querySelector(".dropdown-container").parentNode;

  // Function to reset and display all products
  function displayAllProducts() {
    productCards.forEach((card) => {
      card.style.display = "block";
    });
  }

  // Filtering functionality
  filterDropdown.addEventListener("change", () => {
    displayAllProducts();
    const filterValue = filterDropdown.value;

    if (filterValue === "price") {
      productCards.forEach((card) => {
        const priceText = card.querySelector(".price").textContent.replace("$", "");
        const price = parseFloat(priceText);
        if (price > 300) {
          card.style.display = "none";
        }
      });
    } else if (filterValue === "category") {
      productCards.forEach((card) => {
        const productName = card.querySelector(".product-name").textContent.toLowerCase();
        if (!productName.includes("ipad")) {
          card.style.display = "none";
        }
      });
    }
  });

  // Sorting functionality
  sortDropdown.addEventListener("change", () => {
    const sortValue = sortDropdown.value;
    const cardsArray = Array.from(productCards);

    cardsArray.sort((a, b) => {
      const priceA = parseFloat(a.querySelector(".price").textContent.replace("$", ""));
      const priceB = parseFloat(b.querySelector(".price").textContent.replace("$", ""));

      return sortValue === "asc" ? priceA - priceB : priceB - priceA;
    });

    // Append sorted cards back to the container
    cardsArray.forEach((card) => {
      container.appendChild(card);
    });
  });
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
