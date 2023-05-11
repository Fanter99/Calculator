//alert("test")
const elements = document.querySelectorAll('.board div');

for (let i of elements){
    i.style.gridArea = i.classList[0]
}

const button = document.querySelector('button');
button.addEventListener("focus", i => console.log("hover"))
button.addEventListener("click", i => console.log("piska"))