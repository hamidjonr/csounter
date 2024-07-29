const counterValue = document.getElementById('counter-value');
const counter1 = document.getElementById('counter1');
const counter2 = document.getElementById('counter2');
const resetBtn = document.querySelector('#reset');
let save = document.getElementById("save");
let id = document.getElementById("id");	
let counter = 0;
let arr = []


counter1.addEventListener('click', () => {
	counter++;
	counterValue.innerHTML = counter;
});

counter2.addEventListener('click', () => {
	counter--;
	counterValue.innerHTML = counter;
});

resetBtn.addEventListener('click', reset);

function reset() {
	counter = 0;
	counterValue.innerHTML = counter;
}

save.addEventListener('click', () => {
    id.textContent = ""
    arr.push({number: counter})
    localStorage.setItem("arr", JSON.stringify(arr))
    read()
    counter = 0
    text.innerHTML = counter;
});
