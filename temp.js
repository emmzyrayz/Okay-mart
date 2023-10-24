// JavaScript
document.addEventListener('DOMContentLoaded', function() {
  const banners = document.querySelectorAll('.st');
  const navAutoItems = document.querySelectorAll('.nav-auto div');
  let currentBannerIndex = 0;

  function showBanner(index) {
    banners.forEach((banner, i) => {
      if (i === index) {
        banner.style.opacity = 1; // Make the banner visible
        banner.style.display = 'inline-flex';
      } else {
        banner.style.opacity = 0; // Hide other banners
        banner.style.display = 'none';
      }
    });

    navAutoItems.forEach((nav, i) => {
      nav.style.backgroundColor = i === index ? 'var(--gold)' : 'transparent';
    });
  }

  function nextBanner() {
    currentBannerIndex = (currentBannerIndex + 1) % banners.length;
    showBanner(currentBannerIndex);
  }

  function startBannerSlideshow() {
    showBanner(currentBannerIndex);
    setInterval(nextBanner, 6000); // Change banner every 6 seconds
  }

  navAutoItems.forEach((nav, index) => {
    nav.addEventListener('click', () => {
      currentBannerIndex = index;
      showBanner(currentBannerIndex);
    });
  });

  startBannerSlideshow();
});

// pre loader
// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Function to hide the pre-loader
  function pre_loader() {
    var preLoader = document.getElementById("pre-loader");
    preLoader.style.opacity = "0"; // Set the opacity to 0 for fade out effect
    setTimeout(function () {
      preLoader.style.display = "none"; // Hide the pre-loader after fading out
    }, 5000); // Adjust the delay (in milliseconds) as needed
  }

  // Call the pre_loader function
  pre_loader();

  // JavaScript to calculate age
  const birthdate = new Date("2003-04-15"); // Replace with your birthdate
  const currentDate = new Date();

  const age = currentDate.getFullYear() - birthdate.getFullYear();
  document.getElementById("age").textContent = age + "yrs";

  // JavaScript to toggle project descriptions on click
  const projectTitles = document.querySelectorAll(".project-title");

  projectTitles.forEach((title) => {
    title.addEventListener("click", () => {
      const projectDescription = title.nextElementSibling;
      const isActive = title.classList.contains("active");

      // Toggle the 'active' class on the title
      title.classList.toggle("active", !isActive);

      // Toggle the display of the description
      projectDescription.style.display = isActive ? "none" : "block";
    });
  });

  
});

//  product slider
document.addEventListener("DOMContentLoaded", function () {
  // Fetch JSON data from file
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      // filter and sort function
      // Add a click event listener to each category button
      document.querySelectorAll(".filler-dropdown button").forEach((button) => {
        button.addEventListener("click", () => {
          // Extract the selected category from the button's class
          const selectedCategory = button.classList[0]; // e.g., "fashion"

          // Get all the product cards
          const productCards = document.querySelectorAll(".item.sort");

          // Loop through each product card
          productCards.forEach((card) => {
            // Check if the card has the selected category class
            if (card.classList.contains(selectedCategory)) {
              // Display the matching card
              card.style.display = "block";
            } else {
              // Hide non-matching cards
              card.style.display = "none";
            }
          });
          // Update the filter button name with the selected category
          document.getElementById("filler-name").textContent =
            button.textContent;
        });
      });

      // Add a click event listener to each category button
      document.querySelectorAll(".filter-dropdown button").forEach((button) => {
        button.addEventListener("click", () => {
          // Extract the selected category from the button's class
          const selectedCategory = button.classList[0]; // e.g., "fashion"

          // Get all the product cards
          const productCards = document.querySelectorAll(".item.sort");

          // Loop through each product card
          productCards.forEach((card) => {
            // Check if the card has the selected category class
            if (card.classList.contains(selectedCategory)) {
              // Display the matching card
              card.style.display = "block";
            } else {
              // Hide non-matching cards
              card.style.display = "none";
            }
          });
          // Update the filter button name with the selected category
          document.getElementById("filter-toggle").textContent =
            button.textContent;
        });
      });

      document.addEventListener("DOMContentLoaded", function () {
        // Select the buttons in the sort-dropdown
        const sortButtons = document.querySelectorAll(".sort-dropdown button");

        // Function to sort and update the product cards
        function updateSortedCards(sortingType) {
          // Select the product cards again inside this function
          const productCards = document.querySelectorAll(".item.sort");

          // Convert the NodeList of product cards into an array
          const productCardArray = Array.from(productCards);

          // Sort the product cards based on the sorting type
          productCardArray.sort((a, b) => {
            const aValue = parseFloat(a.getAttribute(`data-${sortingType}`));
            const bValue = parseFloat(b.getAttribute(`data-${sortingType}`));

            if (sortingType === "prices") {
              return aValue - bValue; // Sort by price in ascending order
            } else if (sortingType === "discount") {
              return bValue - aValue; // Sort by discount in descending order
            }
          });

          // Clear the product container
          const productContainer = document.getElementById("grid-container");
          productContainer.innerHTML = ""; // Clear the container
          console.log("pc.innerhtml", productContainer.innerHTML);

          // Append the sorted product cards back to the container
          productCardArray.forEach((card) => {
            productContainer.appendChild(card);
          });
        }

        // Add click event listeners to the sort buttons
        sortButtons.forEach((button) => {
          button.addEventListener("click", () => {
            // Get the sorting type (prices or discount) from the button's id
            const sortingType = button.id;

            // Update the sorted cards
            updateSortedCards(sortingType);
          });
        });
      });

      // Populate the second section
      const newSectionContent = document.getElementById("grid-container");
      const productsContainer = document.getElementById("product-container");
      populateSection(newSectionContent, data);

      // Iterate through users
      for (const userId in data) {
        const user = data[userId][0];

        // Iterate through user's products
        for (const productId in user.product) {
          const productArray = user.product[productId];

          console.log(productArray);
          // Iterate through product items in the array
          productArray.forEach((product) => {
            // Create a product card for each product
            const div = document.createElement("div");
            div.classList.add("item");

            div.innerHTML = `
              <div class="product-card">
                <div class="product-image">
                  <span class="discount-tag">50% off</span>
                  <img loading="lazy" src="${product.image}" alt="product image" class="product-thumb">
                  <a href="${product.productLink}"><button class="card-btn">Add to wishlist</button></a>
                </div>
                <div class="product-info">
                  <h2 class="product-brand">${product.name}</h2>
                  <p class="product-short-description">${product.description}</p>
                  <span class="price">${product.newPrice}.00</span><span class="actual-price">${product.oldPrice}.00</span>
                  <div class="product-review">
                    <i class="font-13 fa fa-star"></i>
                    <i class="font-13 fa fa-star"></i>
                    <i class="font-13 fa fa-star"></i>
                    <i class="font-13 fa fa-star-o"></i>
                    <i class="font-13 fa fa-star-o"></i>
                  </div>
                  <ul class="swatches">
                    <li class="swatch medium rounded"><img loading="lazy" src="${product.image}" alt="image" /></li>
                    <li class="swatch medium rounded"><img loading="lazy" src="${product.image}" alt="image" /></li>
                    <li class="swatch medium rounded"><img loading="lazy" src="${product.image}" alt="image" /></li>
                    <li class="swatch medium rounded"><img loading="lazy" src="${product.image}" alt="image" /></li>
                    <li class="swatch medium rounded"><img loading="lazy" src="${product.image}" alt="image" /></li>
                    <li class="swatch medium rounded"><img loading="lazy" src="${product.image}" alt="image" /></li>
                  </ul>
                </div>
              </div>
            `;

            productsContainer.appendChild(div);
          });
        }
      }

      // Function to populate a section with data
      function populateSection(sectionElement, data) {
        for (const key in data) {
          const user = data[key][0];
          const products = user.product;

          // Iterate through products
          for (const productId in products) {
            const productArray = products[productId];

            // Iterate through product items in the array
            productArray.forEach((product) => {
              // Create an element for each item
              const itemElement = document.createElement("div");
              itemElement.classList.add(
                "item",
                "sort",
                `${product.category}`,
                `${product.tag}`
              );

              // Set data attributes
              itemElement.setAttribute("data-id", product.category);
              itemElement.setAttribute("data-tag", product.tag);
              itemElement.setAttribute("data-price", product.newPrice);
              itemElement.setAttribute("data-discount", product.discount);

              // Populate the item element with data
              itemElement.innerHTML = `
      <div class="grid-content " id="grid-content">
      <div class="grid-image" id="grid-image">
          <img loading="lazy" src="${product.image}" alt="product img" class="grid-thumb">
          <button onclick="popUp()" class="grid-btn" id="grid-btn grid-btn-${user.id}">Add to wishlist <i class="fa-solid fa-cart-plus"></i></button>
      </div>
      <div class="grid-info">
          <h2 class="grid-brand">${product.brand}</h2>
          <p class="grid-description">${product.sumDescription}</p>
          <span class="grid-price">${product.currency} ${product.newPrice}.00</span>
          <div class="product-review">
              <i class="font-13 fa fa-star"></i>
              <i class="font-13 fa fa-star"></i>
              <i class="font-13 fa fa-star"></i>
              <i class="font-13 fa fa-star-o"></i>
              <i class="font-13 fa fa-star-o"></i>
          </div>
      </div>
  </div>
      `;

              // const gridBtn = document.getElementById("grid-btn-${user.id}");
              //   gridBtn.addEventListener("click", popUp);

              // Append the item to the section
              sectionElement.appendChild(itemElement);
              // console.log("appended child:", itemElement)
            });
          }
        }
      }

      // After populating product cards, set up the navigation buttons
      const productContainer = document.getElementById("product-container");
      const prevButton = document.querySelector(".pre-btn");
      const nextButton = document.querySelector(".nxt-btn");

      let scrollPosition = 0;
      const containerWidth = productContainer.clientWidth;

      // Function to scroll to the next product card
      function scrollNext() {
        if (scrollPosition < productContainer.scrollWidth - containerWidth) {
          scrollPosition += containerWidth;
          productContainer.scrollTo({
            left: scrollPosition,
            behavior: "smooth",
          });
        } else {
          // If we're at the end, loop back to the start
          scrollPosition = 0;
          productContainer.scrollTo({
            left: scrollPosition,
            behavior: "smooth",
          });
        }
      }

      // Function to scroll to the previous product card
      function scrollPrev() {
        if (scrollPosition > 0) {
          scrollPosition -= containerWidth;
          productContainer.scrollTo({
            left: scrollPosition,
            behavior: "smooth",
          });
        } else {
          // If we're at the start, loop to the end
          scrollPosition = productContainer.scrollWidth - containerWidth;
          productContainer.scrollTo({
            left: scrollPosition,
            behavior: "smooth",
          });
        }
      }

      // Add click event listeners to the buttons
      nextButton.addEventListener("click", scrollNext);
      prevButton.addEventListener("click", scrollPrev);

      // Auto-scroll loop function
      let autoScrollInterval;

      function startAutoScroll() {
        autoScrollInterval = setInterval(() => {
          scrollNext();
        }, 3000); // Adjust the interval (in milliseconds) as needed
      }

      // Start auto-scroll loop when the page loads
      startAutoScroll();

      // Stop auto-scroll loop when the user interacts with the buttons
      nextButton.addEventListener("click", () => {
        clearInterval(autoScrollInterval);
      });

      prevButton.addEventListener("click", () => {
        clearInterval(autoScrollInterval);
      });
    })
    .catch((error) => console.error("Error fetching data:", error));
});

// Keep track of the currently open dropdown
var activeDropdown = null;

// // Event listener to close dropdowns when clicking anywhere on the webpage
// document.body.addEventListener("click", function(event) {
//   // Check if the clicked element is not inside an open dropdown
//   if (activeDropdown && !activeDropdown.contains(event.target)) {
//     activeDropdown.classList.remove("active");
//     activeDropdown = null;
//   }
// });

function dropDownMenu() {
  var element = document.getElementById("filter-dropdown");

  // Close the previously active dropdown if there is one
  if (activeDropdown && activeDropdown !== element) {
    activeDropdown.classList.remove("active");
  }

  element.classList.toggle("active");
  activeDropdown = element;
}

function dropDown() {
  var element = document.getElementById("filler-dropdown");

  // Close the previously active dropdown if there is one
  if (activeDropdown && activeDropdown !== element) {
    activeDropdown.classList.remove("active");
  }

  element.classList.toggle("active");
  activeDropdown = element;
}

function sortMenu() {
  var element = document.getElementById("sort-dropdown");

  // Close the previously active dropdown if there is one
  if (activeDropdown && activeDropdown !== element) {
    activeDropdown.classList.remove("active");
  }

  element.classList.toggle("active");
  activeDropdown = element;
}

// pop-up
function popUp() {
  var element = document.getElementById("pop-up");
  var body = document.querySelector("body");

  // Close the previously active dropdown if there is one
  if (activeDropdown && activeDropdown !== element) {
    activeDropdown.classList.remove("active");
  }

  element.classList.add("active");
  body.classList.add("active");
  activeDropdown = element;
}

// close pop-up
function closePopup() {
  var element = document.getElementById("pop-up");
  var body = document.querySelector("body");

  // Close the previously active dropdown if there is one
  if (activeDropdown && activeDropdown !== element) {
    activeDropdown.classList.remove("active");
  }

  element.classList.remove("active");
  body.classList.remove("active");
  activeDropdown = element;
}

// JavaScript for btn scrolltotop
document.addEventListener("DOMContentLoaded", function () {
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  // Show the button when the user scrolls down 200px
  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 200) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });

  // Scroll to the top when the button is clicked
  scrollToTopBtn.addEventListener("click", () => {
    // Smooth scroll for better user experience
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

// product page js

// menu buttons

function catMenuBtn() {
  var menuSub = document.getElementById("sub-links");
  var body = document.querySelector("body");

  menuSub.classList.toggle("active");
  body.classList.toggle("active");
}

function closeMenuBtn() {
  var menuClose = document.getElementById("menu-con");
  var body = document.querySelector("body");
  var bar = document.querySelector(".menu-bar");

  bar.classList.remove("active");
  menuClose.classList.remove("active");
  body.classList.remove("active");
}

function openMenuBtn() {
  var menuOpen = document.getElementById("menu-con");
  var body = document.querySelector("body");
  var bar = document.querySelector(".menu-bar");

  bar.classList.add("active");
  menuOpen.classList.add("active");
  body.classList.add("active");
}
