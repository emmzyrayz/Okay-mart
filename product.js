// pre loader
// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Function to hide the pre-loader
  function pre_loader() {
    var preLoader = document.getElementById("pre-loader")
    preLoader.style.opacity = "0" // Set the opacity to 0 for fade out effect
    setTimeout(function () {
      preLoader.style.display = "none" // Hide the pre-loader after fading out
    }, 500) // Adjust the delay (in milliseconds) as needed
  }

  // Call the pre_loader function
  pre_loader()
})

// Fetch and display a single product's data, including thumbnails
function fetchProductData(productId) {
  // Fetch the product data for the given productId from your data.json file
  fetch("/data.json")
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
// btn

// menu buttons

function catMenuBtn() {
  var menuSub = document.getElementById("sub-links")
  var body = document.querySelector("body")

  menuSub.classList.toggle("active")
  body.classList.toggle("active")
}

function closeMenuBtn() {
  var menuClose = document.getElementById("menu-con")
  var body = document.querySelector("body")
  var bar = document.querySelector(".menu-bar")

  bar.classList.remove("active")
  menuClose.classList.remove("active")
  body.classList.remove("active")
}

function openMenuBtn() {
  var menuOpen = document.getElementById("menu-con")
  var body = document.querySelector("body")
  var bar = document.querySelector(".menu-bar")

  menuOpen.classList.add("active")
  body.classList.add("active")
  bar.classList.add("active")
}

// JavaScript for btn scrolltotop
document.addEventListener("DOMContentLoaded", function () {
  const scrollToTopBtn = document.getElementById("scrollToTopBtn")

  // Show the button when the user scrolls down 200px
  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 200) {
      scrollToTopBtn.style.display = "block"
    } else {
      scrollToTopBtn.style.display = "none"
    }
  })

  // Scroll to the top when the button is clicked
  scrollToTopBtn.addEventListener("click", () => {
    // Smooth scroll for better user experience
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  })
})

document.addEventListener("DOMContentLoaded", function () {

  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      const fashionSlider = document.getElementById("fashion-slider");
      // fashion banner
document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".fashion-slide")
  let currentIndex = 0

  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        setTimeout(() => {
          slide.classList.add("show")
        }, 1000)
        slide.style.display = "flex"
      } else {
        setTimeout(() => {
          slide.style.display = "none"
        }, 1000)

        slide.classList.remove("show")
      }
    })
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length
    showSlide(currentIndex)
    setTimeout(nextSlide, 8000) // 8 seconds delay before next slide
  }

  // Initial setup
  showSlide(currentIndex)
  setTimeout(nextSlide, 8000) // Start the slideshow
});


      for (const key in data) {
        const user = data[key][0];
        const fashions = Object.values(user.product);

        for (const product of fashions) {
          if(product[0].trending === true) {
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

// Fetch and display featured products
document.addEventListener("DOMContentLoaded", function () {
  // Fetch JSON data from file
  fetch("data.json")
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
  fetch("data.json")
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
  const slides = document.querySelectorAll(".fashion-slide")
  let currentIndex = 0

  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        setTimeout(() => {
          slide.classList.add("show")
        }, 1000)
        slide.style.display = "flex"
      } else {
        setTimeout(() => {
          slide.style.display = "none"
        }, 1000)

        slide.classList.remove("show")
      }
    })
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length
    showSlide(currentIndex)
    setTimeout(nextSlide, 8000) // 8 seconds delay before next slide
  }

  // Initial setup
  showSlide(currentIndex)
  setTimeout(nextSlide, 8000) // Start the slideshow
});
