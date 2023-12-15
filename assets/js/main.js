// Javascript for index.html

// pre loader START
// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Function to hide the pre-loader
  function pre_loader() {
    var preLoader = document.getElementById("pre-loader");
    preLoader.style.opacity = "0"; // Set the opacity to 0 for fade out effect
    setTimeout(function () {
      preLoader.style.display = "none"; // Hide the pre-loader after fading out
    }, 3000); // Adjust the delay (in milliseconds) as needed
  }

  // Call the pre_loader function
  pre_loader();
  // PRE LOADER STOP

  // AGE CALCULATOR START
  // JavaScript to calculate age
  const birthdate = new Date("2005-08-25"); // Replace with your birthdate
  const currentDate = new Date();

  const age = currentDate.getFullYear() - birthdate.getFullYear();
  document.getElementById("age").textContent = age + "yrs";
  // AGE CALCULATOR END
});

// menu buttons start

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

// menu buttons end

// BANNERS FUNCTION START
document.addEventListener("DOMContentLoaded", function () {
  const banners = document.querySelectorAll(".st");
  const navAutoItems = document.querySelectorAll(".nav-auto div");
  let currentBannerIndex = 0;

  function showBanner(index) {
    banners.forEach((banner, i) => {
      if (i === index) {
        banner.style.opacity = 1; // Make the banner visible
        banner.style.display = "inline-flex";
      } else {
        banner.style.opacity = 0; // Hide other banners
        banner.style.display = "none";
      }
    });

    navAutoItems.forEach((nav, i) => {
      nav.style.backgroundColor = i === index ? "var(--gold)" : "transparent";
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
    nav.addEventListener("click", () => {
      currentBannerIndex = index;
      showBanner(currentBannerIndex);
    });
  });

  startBannerSlideshow();
});
// BANNER FUNCTION STOP

// CATEGORIES<->FILTER<->SORT BUTTONS
var activeDropdown = null;

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

// FILTER, SORT FUNCTIONS
document.addEventListener("DOMContentLoaded", function() {
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
// CATEGORIES<->FILTER<->SORT BUTTONS

// PRODUCT SLIDER STARTS
document.addEventListener("DOMContentLoaded", function () {
  // Fetch JSON data from file
  fetch("/assets/json/data.json")
    .then((response) => response.json())
    .then((data) => {

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

              // Append the item to the section
              sectionElement.appendChild(itemElement);
              console.log("appended child:", itemElement);
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
// PRODUCT SLIDER ENDS


// Fetch and display a single product's data, including thumbnails
function fetchProductData(productId) {
  // Fetch the product data for the given productId from your data.json file
  fetch("/assets/json/data.json")
    .then((res) => res.json())
    .then((data) => {
      // Find the product data with the matching productId
      const productData = data[productId][0].product[productId][0]

      // Create a container element for the product carousel
      const carouselContainer = document.createElement("div")
      carouselContainer.classList.add("carousel-container")

      $(document).ready(function () {
        const $carousel = $("#pr_top-container .carousel-container .carousel img.carousel-img")
        const $thumbnails = $(".thumbnail-container img.thumbnail")
    
        console.log("carousel image:", $carousel)
        console.log("thumbnails image:", $thumbnails)
    
        // i console.logged $carousel and $thumbnails but it reads "ce. fn. init [prevObject: ce. fn.init(1)] length: 0"
        $thumbnails.on("click", function () {
          console.log("Clicked on thumbnail");
          const index = $(this).index();
          console.log("index:", index);
          $carousel.fadeTo(200, 0, function () {
            $carousel.hide();
            console.log("carousel hidden");
            $carousel.eq(index).show().fadeTo(200, 1);
            console.log("New carousel item shown");
          });
          $thumbnails.css("opacity", "0.5");
          $(this).css("opacity", "1");
          console.log("Opacity updated")
        });
      });

      // Check if the Web Share API is supported by the browser
if (navigator.share) {
  const shareButton = document.getElementById("shareButton");

  // Add a click event listener to the share button
  shareButton.addEventListener("click", async () => {
    try {
      const shareData = {
        title: "Check out this product",
        text: "I found an amazing product you might like!",
        url: window.location.href,
        // Add an image to the shared content
        files: [new File(["product-image1-1.jpg"], "product-image1-1.jpg", { type: "image/jpg" })],
      };

      // Use the Web Share API to open the share dialog
      await navigator.share(shareData);
    } catch (error) {
      console.error("Error sharing:", error);
    }
  });
} else {
  // Web Share API not supported, provide an alternative behavior
  shareButton.style.display = "none"; // Hide the share button if not supported
}

      // Create the carousel element
      const carousel = document.createElement("div")
      carousel.classList.add("carousel")

      // Create the thumbnail container element
      const thumbnailContainer = document.createElement("div")
      thumbnailContainer.classList.add("thumbnail-container")

      // create the description container element
      const detail = document.createElement("div");
      const description = document.createElement("div");
      const specifications = document.createElement("div");
      const descContainer = document.getElementById("desc-container");
      console.log("description:", productData.description);

      detail.classList.add("description", "detail");
      description.classList.add("description");
      specifications.classList.add("description", "specification");


      // Iterate through the product details
      detail.innerHTML=`
        <span style="font-size: 20px; font-weight: 700; margin-left: 20px;">Specs</span>
        <p>
          <ul style="text-align: left; margin-left: 40px; gap: 10px; font-size: 15px;">
            <li>Brand: ${productData.brand}</li>
            <li>Color: <span style="color: ${productData.color};">${productData.color}</span></li>
            <li>Size: ${productData.size}</li>
          </ul>
        </p>
      `;
      descContainer.appendChild(detail);
      console.log("detail:", detail);

      description.innerHTML=`
        <span style="font-size: 23px; font-weight: 700; margin-left: 20px;">Description</span>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;${productData.description}</p>
      `;
      descContainer.appendChild(description);
      console.log("description:", description);

      // Iterate through the thumbnails and create img elements
      productData.thumbnails.forEach((thumbnailURL) => {
        const thumbnailImage = document.createElement("img")
        const carouselImage = document.createElement("img")
        thumbnailImage.src = thumbnailURL
        carouselImage.src = thumbnailURL
        thumbnailImage.alt = "thumbnail"
        carouselImage.alt = "carouselImage"
        thumbnailImage.classList.add("thumbnail")
        carouselImage.classList.add("carousel-img")
        carousel.appendChild(carouselImage)

        // Create a corresponding thumbnail in the thumbnail container
        const thumbnailClone = thumbnailImage.cloneNode(true)
        thumbnailContainer.appendChild(thumbnailClone)
      })

      // Append the carousel and thumbnail container to the carousel container
      carouselContainer.appendChild(carousel)
      carouselContainer.appendChild(thumbnailContainer)

      // Append the carousel container to the product page (replace with your target element)
      const productPage = document.getElementById("pr_top-container") // Replace with your actual product page element
      productPage.appendChild(carouselContainer)
    })
    .catch((error) => console.error("Error fetching product data:", error))
}

document.addEventListener("DOMContentLoaded", function () {
  // Call the fetchProductData function with the desired productId
  fetchProductData(0) // Replace with the actual productId you want to display
});

// fetch thumbnail end


// FETCH TRENDING PRODUCT START
document.addEventListener("DOMContentLoaded", function () {
  fetch("/assets/json/data.json")
    .then((response) => response.json())
    .then((data) => {
      const fashionSlider = document.getElementById("fashion-slider");
      // fashion banner
      document.addEventListener("DOMContentLoaded", function () {
        const slides = document.querySelectorAll(".fashion-slide");
        let currentIndex = 0;

        function showSlide(index) {
          slides.forEach((slide, i) => {
            if (i === index) {
              setTimeout(() => {
                slide.classList.add("show");
              }, 1000);
              slide.style.display = "flex";
            } else {
              setTimeout(() => {
                slide.style.display = "none";
              }, 1000);

              slide.classList.remove("show");
            }
          });
        }

        function nextSlide() {
          currentIndex = (currentIndex + 1) % slides.length;
          showSlide(currentIndex);
          setTimeout(nextSlide, 8000); // 8 seconds delay before next slide
        }

        // Initial setup
        showSlide(currentIndex);
        setTimeout(nextSlide, 8000); // Start the slideshow
      });

      for (const key in data) {
        const user = data[key][0];
        const fashions = Object.values(user.product);

        for (const product of fashions) {
          if (product[0].trending === true) {
            const fashionDiv = document.createElement("div");
            fashionDiv.classList.add("fashion-slide");

            fashionDiv.innerHTML = `
            <div class="fashion-image">
                <span>Trending  </span>
                <img loading="lazy" src="${product[0].image}" alt="jewelry product">
            </div>
            <div class="fashion-desc">
                <div class="name">${product[0].name}</div>
                <div class="detail">${product[0].description}</div>
                <a href="/product-page.html">
                    <button class="btn">View Product</button>
                </a>
            </div>
            `;

            fashionSlider.appendChild(fashionDiv);
          }
        }
      }
    });
});

// TRENDING PRODUCT END 

// Fetch and display featured products
document.addEventListener("DOMContentLoaded", function () {
  // Fetch JSON data from file
  fetch("/assets/json/data.json")
    .then((response) => response.json())
    .then((data) => {
      const featuredProductContainer = document.getElementById("feature-grid");

      for (const key in data) {
        const user = data[key][0];
        const products = Object.values(user.product); // Convert the object to an array

        // Iterate through products for this user
        for (const product of products) {
          // Check if the product is featured
          if (product[0].featured === true) {
            // Create a new div element for displaying the featured product
            const featuredDiv = document.createElement("div");
            featuredDiv.classList.add("feature-card");

            featuredDiv.innerHTML = `
              <div class="featured-image">
                <span class="discount-tag">50% off</span>
                <img loading="lazy"
                  src="${product[0].image}"
                  alt="featured image"
                  class="feature-thumb"
                />
                <button class="card-btn" id="card-btn">
                  Add to wishlist <i class="fa-solid fa-cart-plus"></i>
                </button>
              </div>
              <div class="feature-info">
                <h3 class="feature-name">${product[0].name}</h3>
                <h5 class="feature-brand">${product[0].brand}</h5>
                <div class="feature-prices">
                  <span class="feature-price">
                    ${product[0].currency}${product[0].newPrice}.00
                  </span>
                </div>
              </div>
            `;

            // Append the new div to the featuredProductContainer
            featuredProductContainer.appendChild(featuredDiv);
          }
        }
      }
    });
});

// Fetch and display latest premium products
document.addEventListener("DOMContentLoaded", function () {
  // Fetch JSON data from file
  fetch("/assets/json/data.json")
    .then((response) => response.json())
    .then((data) => {
      const latestProductContainer = document.getElementById("latest-grid");

      for (const key in data) {
        const user = data[key][0];
        const products = Object.values(user.product); // Convert the object to an array

        // Iterate through products for this user
        for (const product of products) {
          // Check if the product is premium
          if (product[0].premium === true) {
            // Create a new div element for displaying the latest premium product
            const latestDiv = document.createElement("div");
            latestDiv.classList.add("feature-card");

            latestDiv.innerHTML = `
              <div class="featured-image">
                <span class="discount-tag">50% off</span>
                <img loading="lazy"
                  src="${product[0].image}"
                  alt="latest image"
                  class="feature-thumb"
                />
                <button class="card-btn" id="card-btn">
                  Add to wishlist <i class="fa-solid fa-cart-plus"></i>
                </button>
              </div>
              <div class="feature-info">
                <h3 class="feature-name">${product[0].name}</h3>
                <h5 class="feature-brand">${product[0].brand}</h5>
                <div class="feature-prices">
                  <span class="feature-price">
                    ${product[0].currency}${product[0].newPrice}.00
                  </span>
                </div>
              </div>
            `;

            // Append the new div to the latestProductContainer
            latestProductContainer.appendChild(latestDiv);
          }
        }
      }
    });
});

// fashion banner
document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".fashion-slide");
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        setTimeout(() => {
          slide.classList.add("show");
        }, 1000);
        slide.style.display = "flex";
      } else {
        setTimeout(() => {
          slide.style.display = "none";
        }, 1000);

        slide.classList.remove("show");
      }
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
    setTimeout(nextSlide, 8000); // 8 seconds delay before next slide
  }

  // Initial setup
  showSlide(currentIndex);
  setTimeout(nextSlide, 8000); // Start the slideshow
});