function validatePhone() {
    var phone = document.getElementById("phone").value;
    if (phone == null || phone == "" || !isNaN(phone) || !/^\([0-9]{2}\) [0-9]{4,5}-[0-9]{4}$/.test(phone)) {
        alert("Invalid phone number. Please enter a valid phone number in the format (XX) XXXXX-XXXX.");
        document.getElementById("phone").value = "";
    }
}