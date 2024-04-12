const loginBtn = document.querySelector(".main .login-btn");
const closeBtn = document.querySelector(".close-btn");
const background = document.querySelector(".modal-overlay");
const modal = document.querySelector(".modal-container");


loginBtn.addEventListener("click", (e) => {
    modal.classList.add("show");
})
background.addEventListener("click", (e) => {
    modal.classList.remove("show");
})  
closeBtn.addEventListener("click", (e) => {
    modal.classList.remove("show");
})  

