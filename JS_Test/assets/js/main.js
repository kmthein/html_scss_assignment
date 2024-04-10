const form = document.getElementById("form");
const passwordInput = document.querySelector(".form-input #password");
const conPasswordInput = document.querySelector(".form-input #confirm-password");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const errorBox = document.querySelectorAll(".error-msg");
    errorBox.forEach((span) => {
        span.textContent = '';
    });
    const formInput = form.querySelectorAll("input");
    formInput.forEach((input) => {
        if(input.value.trim() === "") {
            let errorName = input.id[0].toUpperCase() + input.id.slice(1);
            const error = errorName.replace("-", " ");
            const errorField = document.getElementById(`${input.name}-error`);
            errorField.textContent = `${error} is required.`
        } else if(passwordInput.value != conPasswordInput.value) {
            document.getElementById('confirm-password-error').textContent = 'Password must be match.';
        } 
    });
})