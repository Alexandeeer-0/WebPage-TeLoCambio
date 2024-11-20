function validateForm() {
    let isValid = true;
    const dni = document.getElementById('dni').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    
    // Validación DNI
    if (!/^\d{8}$/.test(dni)) {
        document.getElementById('dni-error').textContent = 'El DNI debe tener exactamente 8 números';
        isValid = false;
    }

    // Validación contraseñas coinciden
    if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden');
        isValid = false;
    }

    return isValid;
}
