//alert("test")
const elements = document.querySelectorAll('.board div');

for (let i of elements){
    i.style.gridArea = i.classList[0]
}

console.log(document.querySelector('.AC'));