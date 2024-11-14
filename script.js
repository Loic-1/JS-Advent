const adventContainer = document.querySelector("#advent-container");

const box = document.createElement("div");

box.classList.add("box");

box.innerText = "test";

adventContainer.appendChild(box);

function setSize(element) {
    console.log("setSize called");

    element.style.width = 100 + 150 * Math.random().toFixed(2) + "px";
    element.style.height = 100 + 150 * Math.random().toFixed(2) + "px";

    console.log("Width = " + element.style.width + "\nHeight = " + element.style.height);
}


setSize(box);