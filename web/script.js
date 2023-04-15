console.log("Hello world")
const genPassBtn = document.getElementById("gen-pass");
const newPass = document.querySelector(".generate_new_password");

genPassBtn.addEventListener("click", e => {
    if (newPass.hidden) {
        newPass.hidden = false;
    }
    else {
        newPass.hidden = true;
    }
});
const customPassBtn = document.getElementById("custom-password");
const customPass = document.querySelector(".custom-password");

customPassBtn.addEventListener("click", e => {
    if (customPass.hidden) {
        customPass.hidden = false;
    }
    else {
        customPass.hidden = true;
    }
});
const showPassBtn = document.getElementById("show_pass")
const showPass = document.querySelector(".view_all_passwords");

showPassBtn.addEventListener("click", e => {
    if (showPass.hidden) {
        showPass.hidden = false;
    }
    else {
        showPass.hidden = true;
    }
});

const copyEmail = document.querySelectorAll(".copy_email");
const copyPassword = document.querySelectorAll(".copy_password");

copyEmail.forEach(item => {
    item.addEventListener("click", e=>{
        navigator.clipboard.writeText(item.innerText);
    })
});