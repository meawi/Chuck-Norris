const text = document.querySelector(".text");

fetch("https://api.chucknorris.io/jokes/random")
.then(res => res.json())
.then(data => {
    text.innerText = data.value;
});

function random() {
    location.reload();
}