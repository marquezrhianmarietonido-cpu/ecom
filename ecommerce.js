/* =========================================================
   ROSÉ BEAUTY | E-COMMERCE JAVASCRIPT
   ========================================================= */


/* =========================================================
   CART
========================================================= */

let cartCount = 0;

function addToCart(productName) {

    cartCount++;

    const cart = document.getElementById("cartCount");

    if (cart) {
        cart.textContent = cartCount;
    }

    alert(productName + " has been added to your bag! ♡");
}


/* =========================================================
   CATEGORY FILTER
========================================================= */

function showCategory(category) {

    const products = document.querySelectorAll(".product-card");

    const selectedCategory =
        document.getElementById("selectedCategory");

    const categoryTitle =
        document.getElementById("categoryProductTitle");

    const productArea =
        document.getElementById("productArea");

    const searchInput =
        document.getElementById("productSearch");


    /* Clear search */

    if (searchInput) {
        searchInput.value = "";
    }


    /* Show product area */

    if (productArea) {
        productArea.style.display = "block";
    }


    /* Filter products */

    products.forEach(function(product) {

        const productCategory =
            product.getAttribute("data-category");

        if (
            category === "ALL" ||
            productCategory === category
        ) {

            product.style.display = "";

        } else {

            product.style.display = "none";

        }

    });


    /* Update heading */

    if (category === "ALL") {

        if (selectedCategory) {
            selectedCategory.textContent =
                "ALL PRODUCTS";
        }

        if (categoryTitle) {
            categoryTitle.textContent =
                "All Products";
        }

    } else {

        if (selectedCategory) {
            selectedCategory.textContent =
                category;
        }

        if (categoryTitle) {

            const names = {
                LIPS: "Lip Products",
                FACE: "Face Products",
                EYES: "Eye Products",
                CHEEKS: "Cheek Products"
            };

            categoryTitle.textContent =
                names[category] || category;

        }

    }


    /* Scroll to products */

    if (productArea) {

        setTimeout(function() {

            productArea.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }, 100);

    }
}


/* =========================================================
   BACK TO CATEGORIES
========================================================= */

function backToCategories() {

    const productArea =
        document.getElementById("productArea");

    const searchInput =
        document.getElementById("productSearch");

    const products =
        document.querySelectorAll(".product-card");


    /* Clear search */

    if (searchInput) {
        searchInput.value = "";
    }


    /* Hide all products */

    products.forEach(function(product) {
        product.style.display = "none";
    });


    /* Update heading */

    const selectedCategory =
        document.getElementById("selectedCategory");

    const categoryTitle =
        document.getElementById("categoryProductTitle");

    if (selectedCategory) {
        selectedCategory.textContent =
            "CHOOSE A CATEGORY";
    }

    if (categoryTitle) {
        categoryTitle.textContent =
            "Explore Our Products";
    }


    /* Scroll to category cards */

    const categorySection =
        document.querySelector(".category-grid");

    if (categorySection) {

        categorySection.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }
}


/* =========================================================
   PRODUCT SEARCH
========================================================= */

function searchProducts() {

    const searchInput =
        document.getElementById("productSearch");

    const products =
        document.querySelectorAll(".product-card");

    const productArea =
        document.getElementById("productArea");

    const selectedCategory =
        document.getElementById("selectedCategory");

    const categoryTitle =
        document.getElementById("categoryProductTitle");


    if (!searchInput) {
        return;
    }


    const searchValue =
        searchInput.value.toLowerCase().trim();


    /* If search is empty */

    if (searchValue === "") {

        products.forEach(function(product) {
            product.style.display = "";
        });

        if (selectedCategory) {
            selectedCategory.textContent =
                "ALL PRODUCTS";
        }

        if (categoryTitle) {
            categoryTitle.textContent =
                "All Products";
        }

        return;
    }


    /* Show product area */

    if (productArea) {
        productArea.style.display = "block";
    }


    let foundProducts = 0;


    products.forEach(function(product) {

        /* Get product name */

        const productNameElement =
            product.querySelector(".product-details h3");


        /* Get category */

        const categoryElement =
            product.querySelector(".product-category");


        /* Get description */

        const descriptionElement =
            product.querySelector(".product-details p");


        const productName =
            productNameElement
                ? productNameElement.textContent.toLowerCase()
                : "";


        const productCategory =
            categoryElement
                ? categoryElement.textContent.toLowerCase()
                : "";


        const productDescription =
            descriptionElement
                ? descriptionElement.textContent.toLowerCase()
                : "";


        /* Search name, category, and description */

        if (
            productName.includes(searchValue) ||
            productCategory.includes(searchValue) ||
            productDescription.includes(searchValue)
        ) {

            product.style.display = "";
            foundProducts++;

        } else {

            product.style.display = "none";

        }

    });


    /* Update heading */

    if (selectedCategory) {
        selectedCategory.textContent =
            "SEARCH RESULTS";
    }

    if (categoryTitle) {

        if (foundProducts > 0) {

            categoryTitle.textContent =
                "Results for \"" +
                searchInput.value +
                "\"";

        } else {

            categoryTitle.textContent =
                "No Products Found";

        }

    }
}


/* =========================================================
   SIGN IN VALIDATION
========================================================= */

function validateSignIn() {

    const email =
        document.getElementById("loginEmail").value.trim();

    const password =
        document.getElementById("loginPassword").value.trim();

    const message =
        document.getElementById("loginMessage");


    /* Empty fields */

    if (email === "" || password === "") {

        message.textContent =
            "Please fill in all fields.";

        message.style.color = "#d96f91";

        return false;
    }


    /* Email validation */

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!emailPattern.test(email)) {

        message.textContent =
            "Please enter a valid email address.";

        message.style.color = "#d96f91";

        return false;
    }


    /* Success */

    message.textContent =
        "Sign in successful! Welcome back ♡";

    message.style.color = "#6f9d78";


    return false;
}


/* =========================================================
   SIGN UP VALIDATION
========================================================= */

function validateSignUp() {

    const name =
        document.getElementById("fullName").value.trim();

    const email =
        document.getElementById("signupEmail").value.trim();

    const password =
        document.getElementById("signupPassword").value;

    const confirmPassword =
        document.getElementById("confirmPassword").value;

    const message =
        document.getElementById("signupMessage");


    /* Check empty fields */

    if (
        name === "" ||
        email === "" ||
        password === "" ||
        confirmPassword === ""
    ) {

        message.textContent =
            "Please fill in all fields.";

        message.style.color = "#d96f91";

        return false;
    }


    /* Check email */

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!emailPattern.test(email)) {

        message.textContent =
            "Please enter a valid email address.";

        message.style.color = "#d96f91";

        return false;
    }


    /* Check password length */

    if (password.length < 6) {

        message.textContent =
            "Password must be at least 6 characters.";

        message.style.color = "#d96f91";

        return false;
    }


    /* Check matching passwords */

    if (password !== confirmPassword) {

        message.textContent =
            "Passwords do not match.";

        message.style.color = "#d96f91";

        return false;
    }


    /* Success */

    message.textContent =
        "Account created successfully! ♡";

    message.style.color = "#6f9d78";


    return false;
}


/* =========================================================
   INQUIRY FORM
========================================================= */

function validateInquiry() {

    const name =
        document.getElementById("inquiryName").value.trim();

    const email =
        document.getElementById("inquiryEmail").value.trim();

    const subject =
        document.getElementById("inquirySubject").value.trim();

    const messageText =
        document.getElementById("inquiryMessage").value.trim();

    const status =
        document.getElementById("inquiryStatus");


    /* Check empty fields */

    if (
        name === "" ||
        email === "" ||
        subject === "" ||
        messageText === ""
    ) {

        status.textContent =
            "Please complete all fields.";

        status.style.color = "#d96f91";

        return false;
    }


    /* Email validation */

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!emailPattern.test(email)) {

        status.textContent =
            "Please enter a valid email address.";

        status.style.color = "#d96f91";

        return false;
    }


    /* Success */

    status.textContent =
        "Your inquiry has been sent successfully! ♡";

    status.style.color = "#6f9d78";


    return false;
}


/* =========================================================
   NEWSLETTER
========================================================= */

const newsletterForm =
    document.querySelector(".newsletter-form");


if (newsletterForm) {

    newsletterForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const emailInput =
                newsletterForm.querySelector("input");

            const email =
                emailInput.value.trim();


            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (email === "") {

                alert(
                    "Please enter your email address."
                );

                return;
            }


            if (!emailPattern.test(email)) {

                alert(
                    "Please enter a valid email address."
                );

                return;
            }


            alert(
                "Thank you for subscribing to Rosé Beauty! ♡"
            );


            emailInput.value = "";

        }
    );

}


/* =========================================================
   PAGE LOAD
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        const products =
            document.querySelectorAll(".product-card");


        /*
           Hide products when the page first loads.
           Users can click a category or
           View All Products to display them.
        */

        products.forEach(function(product) {
            product.style.display = "none";
        });


        const selectedCategory =
            document.getElementById("selectedCategory");

        const categoryTitle =
            document.getElementById("categoryProductTitle");


        if (selectedCategory) {
            selectedCategory.textContent =
                "CHOOSE A CATEGORY";
        }


        if (categoryTitle) {
            categoryTitle.textContent =
                "Explore Our Products";
        }

    }
)