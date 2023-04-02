console.log("Hello world")


document.getElementById('home').addEventListener('click', () => {
    getDataFromPython();
    // document.getElementById('output').innerText = "password manager"
});


async function getDataFromPython() {
    document.getElementById('output').innerText = await eel.get_data()();
}