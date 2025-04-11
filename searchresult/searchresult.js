/*
// Add event listener to the search button
const searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", submitForm());

// Perform the search when Enter key is pressed in the search input
const searchInput = document.getElementById("tag-search-input");
searchInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        submitForm();
    }
});


document.addEventListener("DOMContentLoaded", function () {
    function submitForm() {
        // Get the input value
        const inputValue = document.getElementById("tag-search-input").value;
    
        // Check if the input is "수능" (you can use case-insensitive comparison)
        if (inputValue.toLowerCase() === "수능") {
            // Redirect to page A
            window.location.replace('../searchresult/searchresult.html');
        } else {
            // Redirect to page B
            window.location.href = "../showtree/noresult.html";
        }
    }
    
});
*/

// Get a reference to the button element by its ID

const searchButton = document.getElementById("search-form-button");


document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.getElementById("search-form-button");

    searchButton.addEventListener("click", function () {
        window.location.href = "../searchresult/searchresult.html";
    });
});

