// desimta uzduotis

let rezultatas = 0;

const submit = document.querySelector("button");
const inputt = document.querySelector("input");
const spann = document.querySelector("span");

function submitClick() {
    spann.value = inputt.innerText;

    // galima buvo rasyti = numberDOM.innerText = --rezultatas
}


minusDOM.addEventListener('click', submitClick);