function validateEmail() {
    var email = document.getElementById("email").value;
    var bigTechCompanies = ["gmail.com", "yahoo.com", "outlook.com", "aol.com", "hotmail.com", "icloud.com"];
    var isValid = false;

    for (var i = 0; i < bigTechCompanies.length; i++) {
        if (email.includes(bigTechCompanies[i])) {
            isValid = true;
            break;
        }
    }

    if (isValid) {
        // Accept the email
        alert("Email is valid!");
    } else {
        // Reject the email
        alert("Email is not valid!");
    }
}