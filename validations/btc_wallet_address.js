function validateBTCAddress() {
    // Get the value of the input field
    const address = document.getElementById("btc-address").value;

    // Regular expression to match a Bitcoin address
    const pattern = /^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$/;

    // Check if the address matches the regular expression
    const isValid = pattern.test(address);

    // Display an alert message depending on whether the address is valid or not
    if (isValid) {
        alert("Valid Bitcoin address");
    } else {
        alert("Invalid Bitcoin address");
    }
}