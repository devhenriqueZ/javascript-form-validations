function validateName() {
    var name = document.getElementById("name").value;
    if (name == null || name == "" || !isNaN(name) || /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(name)) {
        alert("Invalid name. Please enter a valid name.");
        document.getElementById("name").value = "";
    }
}