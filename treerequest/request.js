document.addEventListener("DOMContentLoaded", function () {
    const formContainer = document.getElementById("form-container");
    const form = document.getElementById("write-form");
    const textInput = document.getElementById("textInput");
    const confirmationMessage = document.getElementById("confirmation");
    const requestAnotherButton = document.getElementById("requestAnother");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent the default form submission
        formContainer.style.display = "none";
        confirmationMessage.style.display = "block";
        requestAnotherButton.style.display = "block";
        tags= requestedtag.json()
        tags[""]
    });

    requestAnotherButton.addEventListener("click", function () {
        formContainer.style.display = "block";
        confirmationMessage.style.display = "none";
        requestAnotherButton.style.display = "none";
        textInput.value = ""; // Clear the input field
    });
});
