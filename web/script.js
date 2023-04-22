const homeBtn = document.getElementById("home");

homeBtn.addEventListener("click", e => {
    customPass.hidden = true;
    newPass.hidden = true;
    showPass.hidden = true;
})

const genPassBtn = document.getElementById("gen-pass");
const newPass = document.querySelector(".generate_new_password");

genPassBtn.addEventListener("click", e => {
    if (newPass.hidden) {
        newPass.hidden = false;
    } else {
        newPass.hidden = true;
    }
    if (customPass.hidden == false || showPass.hidden == false) {
        customPass.hidden = true;
        showPass.hidden = true;
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
    if (newPass.hidden == false || showPass.hidden == false) {
        newPass.hidden = true;
        showPass.hidden = true;
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
    if (customPass.hidden == false || newPass.hidden == false) {
        customPass.hidden = true;
        newPass.hidden = true;
    }
});

const copyEmail = document.querySelectorAll(".copy_email");
const copyPassword = document.querySelectorAll(".copy_password");

copyEmail.forEach(item => {
    item.addEventListener("click", e => {
        navigator.clipboard.writeText(item.innerText);
    })
});

copyPassword.forEach(item => {
    item.addEventListener("click", e => {
        navigator.clipboard.writeText(item.innerText);
    })
});

// async functions 

const genPass_form = document.getElementById("generate_password");


genPass_form.addEventListener("submit", async (event) => {


    let aso_email = document.getElementById("asociated_email").value;
    let aso_account = document.getElementById("asociated_account").value;
    let pss_sten = document.getElementById("password_strength").value;
    console.log(aso_email, aso_account, pss_sten);



    event.preventDefault();

    await eel.got_data(aso_account, aso_email, pss_sten);

    let output = await eel.got_data()();
    console.log(output);
});

const cusPss_form = document.getElementById("custom_password");

cusPss_form.addEventListener("submit", (event) => {
    let cus_pss = document.getElementById("password_strength").value;
    let cus_account = document.getElementById("asociated_account").value;
    let cus_email = document.getElementById("asociated_email").value;

    console.log(cus_account, cus_email, cus_pss);
    event.preventDefault();

});