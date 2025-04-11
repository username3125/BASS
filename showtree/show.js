document.addEventListener("DOMContentLoaded", function () {
    const tagInput = document.getElementById("tagInput");
    const searchButton = document.getElementById("searchButton");
    const postsContainer = document.getElementById("posts");

    // Load the posts from JSON file (you need a server for this)
    fetch("posts.json")
        .then(response => response.json())
        .then(posts => {
            // Display all posts initially
            displayPosts(posts);

            searchButton.addEventListener("click", function () {
                const searchTag = tagInput.value.trim().toLowerCase();
                const filteredPosts = posts.filter(post => post.tags.includes(searchTag));
                displayPosts(filteredPosts);
            });
        })
        .catch(error => {
            console.error("Error loading posts.json:", error);
            // Handle the error here
        });

    function displayPosts(posts) {
        postsContainer.innerHTML = "";
        if (posts.length === 0) {
            postsContainer.textContent = "No matching posts found.";
        } else {
            posts.forEach(post => {
                const postElement = document.createElement("div");
                postElement.textContent = post.title;
                postsContainer.appendChild(postElement);
            });
        }
    }
});
