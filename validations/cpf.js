function validateCPF() {
    var cpf = document.getElementById("cpf").value;
    if (cpf == null || cpf == "" || !isNaN(cpf) || !/^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}$/.test(cpf)) {
        alert("Invalid CPF. Please enter a valid CPF in the format XXX.XXX.XXX-XX.");
        document.getElementById("cpf").value = "";
    }
}