const eye = document.querySelector(".eye");
const pass = document.querySelector(".password");

eye.addEventListener("click", () => {
    if (pass.type === "password") {
        pass.type = "text";
        eye.classList.replace("fa-eye","fa-eye-slash")
    } else if (pass.type === "text") {
        pass.type = "password";
        eye.classList.replace("fa-eye-slash", "fa-eye");
    }
});