function setSize(element) {
    console.log("setSize called");

    element.style.width = 100 + 150 * Math.random().toFixed(2) + "px";
    element.style.height = 100 + 150 * Math.random().toFixed(2) + "px";

    console.log("Width = " + element.style.width + "\nHeight = " + element.style.height);
}

const adventContainer = document.querySelector("#advent-container");

const box = document.createElement("div");

box.classList.add("box");

box.innerText = "test";


for (let i = 0; i < 10; i++) {
    const newBox = box.cloneNode(true);
    
    setSize(newBox);
    
    adventContainer.appendChild(newBox);
}

