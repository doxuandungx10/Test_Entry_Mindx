
const genNewColor = document.getElementById("genNewColor");
const genNewGrad = document.getElementById("genNewGrad");
const copyBtn = document.getElementById("copy");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");

const setColor = () => {
    document.body.style.backgroundImage = "none";
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    color.innerHTML = "#" + randomColor;
    copyBtn.style.display = "inline-block"
}

genNewColor.addEventListener("click", setColor);

genNewGrad.addEventListener("click", () => {
    document.body.style.backgroundImage = `linear-gradient(${input1.value}, ${input2.value})`;
});

copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(color.textContent);
    alert("Color copied: " + color.textContent);
})

setColor();