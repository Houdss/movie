document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("loginForm");
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");
    var successMessage = document.getElementById("successMessage");
    var loadingElement = document.getElementById("loading");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        var email = emailInput.value;
        var password = passwordInput.value;

        if (validateEmail(email) && password) {
            loadingElement.style.display = "block"; // Show loader
            successMessage.style.display = "none"; // Hide success message

            setTimeout(function () {
                loadingElement.style.display = "none"; // Hide loader
                successMessage.style.display = "block"; // Show success message
                window.location.href = "home.html"; // Redirect after 2 seconds
            }, 2000);
        } else {
            alert("Please fill out both fields with valid information.");
        }
    });

    function validateEmail(email) {
        var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});
