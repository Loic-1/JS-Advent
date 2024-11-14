function setSize(element, buffer, size) {
    console.log("--------------- setSize called ---------------");

    element.style.width = buffer + size * Math.random().toFixed(2) + "px";
    element.style.height = buffer + size * Math.random().toFixed(2) + "px";

    console.log("Width = " + element.style.width + "\nHeight = " + element.style.height);
}

const adventContainer = document.querySelector("#advent-container");

const box = document.createElement("div");

box.classList.add("box");




for (let i = 0; i < 10; i++) {
    const newBox = box.cloneNode(true);

    newBox.innerText = "test" + (i + 1);

    setSize(newBox, 100, 150);
    
    adventContainer.appendChild(newBox);
}

