document.addEventListener("DOMContentLoaded", function () { 
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");
    const logoutLink = document.getElementById("logout-link");
    const loginLink = document.getElementById("login-link");
    const registerLink = document.getElementById("register-link");

    let isLoggedIn = localStorage.getItem("isLoggedIn") === "true"; // Verifica si el usuario ya está autenticado

    // Actualizar la interfaz de acuerdo a si el usuario está autenticado o no
    function updateInterface() {
        if (isLoggedIn) {
            logoutLink.style.display = "block";
            loginLink.style.display = "none";
            registerLink.style.display = "none";
        } else {
            logoutLink.style.display = "none";
            loginLink.style.display = "block";
            registerLink.style.display = "block";
        }
    }

    // Control de inicio de sesión
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault(); 
            
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            // Validación del correo 
            const emailPattern = /^[a-zA-Z0-9._%+-]+@uleam\.com$/;
            // Validación de la contraseña: al menos 7 caracteres, una mayúscula y un número
            const passwordPattern = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{7,}$/;

            console.log("Validando formulario..."); 

            if (emailPattern.test(email) && passwordPattern.test(password)) {
                // Guarda el estado de autenticación en localStorage
                localStorage.setItem("isLoggedIn", "true");

                // Redirigir a la página principal
                window.location.href = '/interfaz-libro2';  
            } else {
                // Mostrar un mensaje de error si las credenciales no cumplen las condiciones
                const errorMessage = document.getElementById("login-error-message");
                errorMessage.innerText = "Correo o contraseña inválidos. Asegúrate de usar un correo @uleam.com y que la contraseña tenga al menos 7 caracteres, una mayúscula y un número.";
                errorMessage.style.display = "block";
            }
        });
    }

    // Control de registro
    if (registerForm) {
        registerForm.addEventListener("submit", function (e) {
            e.preventDefault();
            
            const name = document.getElementById("name").value;
            const apellidos = document.getElementById("apellidos").value;
            const email = document.getElementById("register-email").value;
            const password = document.getElementById("register-password").value;

            // Validación del correo 
            const emailPattern = /^[a-zA-Z0-9._%+-]+@uleam\.com$/;
            // Validación de la contraseña: al menos 7 caracteres, una mayúscula y un número
            const passwordPattern = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{7,}$/;

            // Verificar que todos los campos estén completos y cumplan con los requisitos
            if (name && apellidos && emailPattern.test(email) && passwordPattern.test(password)) {
                localStorage.setItem("isLoggedIn", "true");
                isLoggedIn = true;  
                window.location.href = '/inisio-sesion';  // Redirigir a la página principal después de registrarse
            } else {
                let errorMessage = "Por favor completa todos los campos correctamente:";
                if (!name) errorMessage += "\n- El nombre no puede estar vacío.";
                if (!apellidos) errorMessage += "\n- Los apellidos no pueden estar vacíos.";
                if (!emailPattern.test(email)) errorMessage += "\n- El correo debe ser un @uleam.com válido.";
                if (!passwordPattern.test(password)) errorMessage += "\n- La contraseña debe tener al menos 7 caracteres, una mayúscula y un número.";
                
                document.getElementById("register-error-message").innerText = errorMessage;
            }
        });
    }

    // Cerrar sesión
    if (logoutLink) {
        logoutLink.addEventListener("click", function () {
            localStorage.removeItem("isLoggedIn");
            isLoggedIn = false;  
            window.location.href = '/inicio-sesion';  // Redirigir a la página de inicio de sesión después de cerrar sesión
        });
    }
    updateInterface();
});




