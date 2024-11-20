document.addEventListener('DOMContentLoaded', function() {
    // Manejo de formulario de login
    const loginForm = document.querySelector('#loginForm');
    const registerForm = document.querySelector('#registerForm');

    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(loginForm);
            try {
                const response = await fetch('/auth/login', {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                const data = await response.json();
                if (response.ok && data.success) {
                    window.location.href = '/dashboard.html';
                } else {
                    alert(data.message || 'Error en el inicio de sesión');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('Error en el servidor. Por favor, intente nuevamente.');
            }
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(registerForm);
            try {
                const response = await fetch('/auth/register', {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                const data = await response.json();
                if (response.ok && data.success) {
                    alert('Registro exitoso');
                    window.location.href = '/dashboard.html';
                } else {
                    alert(data.message || 'Error en el registro');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('Error en el registro');
            }
        });
    }
});