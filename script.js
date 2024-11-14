function setSize(element, buffer, size) {
    element.style.width = buffer + size * Math.random().toFixed(1) + "px";
    element.style.height = buffer + size * Math.random().toFixed(1) + "px";

    console.log("Width = " + element.style.width + "\nHeight = " + element.style.height);
}

// Set max en fonction du nombre de patterns
function randomIndex(max) {
    return Math.floor(Math.random() * max)
}



patterns = ['url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' height=\'100%25\' width=\'100%25\'%3E%3Cdefs%3E%3Cpattern id=\'doodad\' width=\'123\' height=\'123\' viewBox=\'0 0 40 40\' patternUnits=\'userSpaceOnUse\' patternTransform=\'rotate(135)\'%3E%3Crect width=\'100%25\' height=\'100%25\' fill=\'rgba(42, 67, 101,1)\'/%3E%3Cpath d=\'M-10 30h60v2h-60zM-10-10h60v2h-60\' fill=\'rgba(229, 62, 62,1)\'/%3E%3Cpath d=\'M-10 12h60v1h-60zM-10-28h60v1h-60z\' fill=\'rgba(236, 201, 75,1)\'/%3E%3C/pattern%3E%3C/defs%3E%3Crect fill=\'url(%23doodad)\' height=\'200%25\' width=\'200%25\'/%3E%3C/svg%3E")',
    'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' height=\'100%25\' width=\'100%25\'%3E%3Cdefs%3E%3Cpattern id=\'doodad\' width=\'200\' height=\'200\' viewBox=\'0 0 40 40\' patternUnits=\'userSpaceOnUse\' patternTransform=\'rotate(135)\'%3E%3Crect width=\'100%25\' height=\'100%25\' fill=\'rgba(197, 48, 48,1)\'/%3E%3Cpath d=\'M0 29a 9-9 0 0 0 9-9a 11-11 0 0 1 11-11v2a-9 9 0 0 0-9 9a-11 11 0 0 1-11 11zM0 69a 9-9 0 0 0 9-9a 11-11 0 0 1 11-11v2a-9 9 0 0 0-9 9a-11 11 0 0 1-11 11z\' fill=\'rgba(34, 84, 61,1)\'/%3E%3Cpath d=\'M20 29.5a 9.5-9.5 0 0 0 9.5-9.5a 10.5-10.5 0 0 1 10.5-10.5v1a-9.5 9.5 0 0 0-9.5 9.5a-10.5 10.5 0 0 1-10.5 10.5z\' fill=\'rgba(246, 224, 94,1)\'/%3E%3C/pattern%3E%3C/defs%3E%3Crect fill=\'url(%23doodad)\' height=\'200%25\' width=\'200%25\'/%3E%3C/svg%3E")',
    'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' height=\'100%25\' width=\'100%25\'%3E%3Cdefs%3E%3Cpattern id=\'doodad\' width=\'86\' height=\'86\' viewBox=\'0 0 40 40\' patternUnits=\'userSpaceOnUse\' patternTransform=\'rotate(23)\'%3E%3Crect width=\'100%25\' height=\'100%25\' fill=\'%23702459\'/%3E%3Cpath d=\'M0 15h40v10h-40z\' fill=\'%23f6e05e\'/%3E%3Cpath d=\'M-40 15h20l3 5l-3 5h-20l3-5zM0 15h20l3 5l-3 5h-20l3-5z\' fill=\'%23d69e2e\'/%3E%3C/pattern%3E%3C/defs%3E%3Crect fill=\'url(%23doodad)\' height=\'200%25\' width=\'200%25\'/%3E%3C/svg%3E")',
    'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' height=\'100%25\' width=\'100%25\'%3E%3Cdefs%3E%3Cpattern id=\'doodad\' width=\'55\' height=\'55\' viewBox=\'0 0 40 40\' patternUnits=\'userSpaceOnUse\' patternTransform=\'rotate(217)\'%3E%3Crect width=\'100%25\' height=\'100%25\' fill=\'%23e56161\'/%3E%3Cpath d=\'M-10 10h60v12h-60z\' fill=\'rgba(240, 255, 244,1)\' filter=\'url(%23filter-doodad-1)\'/%3E%3Cpath d=\'M-30 10h6l-12 12h-6zM10 10h6l-12 12h-6zM50 10h6l-12 12h-6z\' stroke-miterlimit=\'99\' fill=\'%23222d59\' filter=\'url(%23filter-doodad-2)\'/%3E%3C/pattern%3E%3Cfilter id=\'filter-doodad-1\'%3E%3CfeTurbulence baseFrequency=\'0.01 0.2\' numOctaves=\'2\' result=\'result1\'/%3E%3CfeDisplacementMap in2=\'result1\' scale=\'5\' result=\'result2\' xChannelSelector=\'R\' yChannelSelector=\'G\' in=\'SourceGraphic\'/%3E%3CfeComposite in2=\'result2\' in=\'SourceGraphic\' operator=\'atop\' result=\'compositeGraphic\'/%3E%3CfeOffset in=\'compositeGraphic\' result=\'fbSourceGraphic\' dx=\'-0.5\'/%3E%3C/filter%3E%3Cfilter id=\'filter-doodad-2\'%3E%3CfeTurbulence baseFrequency=\'0.05 0.01\' numOctaves=\'2\' result=\'result1\'/%3E%3CfeDisplacementMap in2=\'result1\' scale=\'9\' result=\'result2\' xChannelSelector=\'R\' yChannelSelector=\'G\' in=\'SourceGraphic\'/%3E%3CfeComposite in2=\'result2\' in=\'SourceGraphic\' operator=\'atop\' result=\'compositeGraphic\'/%3E%3CfeOffset in=\'compositeGraphic\' result=\'fbSourceGraphic\' dy=\'-0.9\'/%3E%3C/filter%3E%3C/defs%3E%3Crect fill=\'url(%23doodad)\' height=\'200%25\' width=\'200%25\'/%3E%3C/svg%3E")',
    'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' height=\'100%25\' width=\'100%25\'%3E%3Cdefs%3E%3Cpattern id=\'doodad\' width=\'68\' height=\'68\' viewBox=\'0 0 40 40\' patternUnits=\'userSpaceOnUse\' patternTransform=\'rotate(111)\'%3E%3Crect width=\'100%25\' height=\'100%25\' fill=\'rgba(246, 224, 94,1)\'/%3E%3Cpath d=\'M0 8.5a 11.5 11.5 0 0 1 11.5 11.5a 8.5 8.5 0 0 0 8.5 8.5v3a-11.5-11.5 0 0 1-11.5-11.5a-8.5-8.5 0 0 0-8.5-8.5z\' fill=\'rgba(112, 36, 89,1)\'/%3E%3Cpath d=\'M20 28.5a 8.5-8.5 0 0 0 8.5-8.5a 11.5-11.5 0 0 1 11.5-11.5v3a-8.5 8.5 0 0 0-8.5 8.5a-11.5 11.5 0 0 1-11.5 11.5zM20 68.5a 8.5-8.5 0 0 0 8.5-8.5a 11.5-11.5 0 0 1 11.5-11.5v3a-8.5 8.5 0 0 0-8.5 8.5a-11.5 11.5 0 0 1-11.5 11.5z\' fill=\'rgba(112, 36, 89,1)\'/%3E%3C/pattern%3E%3C/defs%3E%3Crect fill=\'url(%23doodad)\' height=\'200%25\' width=\'200%25\'/%3E%3C/svg%3E")',
    'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' height=\'100%25\' width=\'100%25\'%3E%3Cdefs%3E%3Cpattern id=\'doodad\' width=\'68\' height=\'68\' viewBox=\'0 0 40 40\' patternUnits=\'userSpaceOnUse\' patternTransform=\'rotate(111)\'%3E%3Crect width=\'100%25\' height=\'100%25\' fill=\'rgba(56, 178, 172,1)\'/%3E%3Cpath d=\'M0 8.5a 11.5 11.5 0 0 1 11.5 11.5a 8.5 8.5 0 0 0 8.5 8.5v3a-11.5-11.5 0 0 1-11.5-11.5a-8.5-8.5 0 0 0-8.5-8.5z\' fill=\'rgba(255, 255, 240,1)\'/%3E%3Cpath d=\'M20 8.5a 8.5-8.5 0 0 0 8.5-8.5a 11.5-11.5 0 0 1 11.5-11.5v3a-8.5 8.5 0 0 0-8.5 8.5a-11.5 11.5 0 0 1-11.5 11.5zM20 48.5a 8.5-8.5 0 0 0 8.5-8.5a 11.5-11.5 0 0 1 11.5-11.5v3a-8.5 8.5 0 0 0-8.5 8.5a-11.5 11.5 0 0 1-11.5 11.5z\' fill=\'rgba(255, 255, 240,1)\'/%3E%3C/pattern%3E%3C/defs%3E%3Crect fill=\'url(%23doodad)\' height=\'200%25\' width=\'200%25\'/%3E%3C/svg%3E")',
    'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' height=\'100%25\' width=\'100%25\'%3E%3Cdefs%3E%3Cpattern id=\'doodad\' width=\'34\' height=\'34\' viewBox=\'0 0 40 40\' patternUnits=\'userSpaceOnUse\' patternTransform=\'rotate(111)\'%3E%3Crect width=\'100%25\' height=\'100%25\' fill=\'rgba(247, 250, 252,1)\'/%3E%3Cpath d=\'M0 0h10v-3h-10zM20 0h10v-3h-10zM0 40h10v-3h-10zM20 40h10v-3h-10z\' fill=\'rgba(236, 201, 75,1)\'/%3E%3Cpath d=\'M10 20h10v-3h-10zM30 20h10v-3h-10z\' fill=\'rgba(236, 201, 75,1)\'/%3E%3C/pattern%3E%3C/defs%3E%3Crect fill=\'url(%23doodad)\' height=\'200%25\' width=\'200%25\'/%3E%3C/svg%3E")',
    'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' height=\'100%25\' width=\'100%25\'%3E%3Cdefs%3E%3Cpattern id=\'doodad\' width=\'34\' height=\'34\' viewBox=\'0 0 40 40\' patternUnits=\'userSpaceOnUse\' patternTransform=\'rotate(135)\'%3E%3Crect width=\'100%25\' height=\'100%25\' fill=\'rgba(237, 137, 54,1)\'/%3E%3Cpath d=\'M0 20 v-1.5 h1 v3 h1 v-1.5 zM2 20 v-1.5 h1 v3 h1 v-1.5 zM4 20 v-1.5 h1 v3 h1 v-1.5 zM6 20 v-1.5 h1 v3 h1 v-1.5 zM8 20 v-1.5 h1 v3 h1 v-1.5 zM10 20 v-1.5 h1 v3 h1 v-1.5 zM12 20 v-1.5 h1 v3 h1 v-1.5 zM14 20 v-1.5 h1 v3 h1 v-1.5 zM16 20 v-1.5 h1 v3 h1 v-1.5 zM18 20 v-1.5 h1 v3 h1 v-1.5 zM20 20 v-1.5 h1 v3 h1 v-1.5 zM22 20 v-1.5 h1 v3 h1 v-1.5 zM24 20 v-1.5 h1 v3 h1 v-1.5 zM26 20 v-1.5 h1 v3 h1 v-1.5 zM28 20 v-1.5 h1 v3 h1 v-1.5 zM30 20 v-1.5 h1 v3 h1 v-1.5 zM32 20 v-1.5 h1 v3 h1 v-1.5 zM34 20 v-1.5 h1 v3 h1 v-1.5 zM36 20 v-1.5 h1 v3 h1 v-1.5 zM38 20 v-1.5 h1 v3 h1 v-1.5 z\' fill=\'rgba(236, 201, 75,1)\'/%3E%3Cpath d=\'M0 20 v4 h1 v-8 h1 v4 zM2 20 v4 h1 v-8 h1 v4 zM4 20 v4 h1 v-8 h1 v4 zM6 20 v4 h1 v-8 h1 v4 zM8 20 v4 h1 v-8 h1 v4 zM10 20 v4 h1 v-8 h1 v4 zM12 20 v4 h1 v-8 h1 v4 zM14 20 v4 h1 v-8 h1 v4 zM16 20 v4 h1 v-8 h1 v4 zM18 20 v4 h1 v-8 h1 v4 zM20 20 v4 h1 v-8 h1 v4 zM22 20 v4 h1 v-8 h1 v4 zM24 20 v4 h1 v-8 h1 v4 zM26 20 v4 h1 v-8 h1 v4 zM28 20 v4 h1 v-8 h1 v4 zM30 20 v4 h1 v-8 h1 v4 zM32 20 v4 h1 v-8 h1 v4 zM34 20 v4 h1 v-8 h1 v4 zM36 20 v4 h1 v-8 h1 v4 zM38 20 v4 h1 v-8 h1 v4 z\' fill=\'rgba(251, 211, 141,1)\'/%3E%3C/pattern%3E%3C/defs%3E%3Crect fill=\'url(%23doodad)\' height=\'200%25\' width=\'200%25\'/%3E%3C/svg%3E")',
    'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' height=\'100%25\' width=\'100%25\'%3E%3Cdefs%3E%3Cpattern id=\'doodad\' width=\'92\' height=\'92\' viewBox=\'0 0 40 40\' patternUnits=\'userSpaceOnUse\' patternTransform=\'rotate(225)\'%3E%3Crect width=\'100%25\' height=\'100%25\' fill=\'rgba(247, 250, 252,1)\'/%3E%3Ccircle cx=\'-5\' cy=\'15\' r=\'1\' fill=\'rgba(255, 245, 245,1)\'/%3E%3Ccircle cx=\'5\' cy=\'25\' r=\'1\' fill=\'rgba(255, 245, 245,1)\'/%3E%3Ccircle cx=\'15\' cy=\'15\' r=\'1\' fill=\'rgba(255, 245, 245,1)\'/%3E%3Ccircle cx=\'35\' cy=\'15\' r=\'1\' fill=\'rgba(255, 245, 245,1)\'/%3E%3Ccircle cx=\'25\' cy=\'25\' r=\'1\' fill=\'rgba(255, 245, 245,1)\'/%3E%3Ccircle cx=\'45\' cy=\'25\' r=\'1\' fill=\'rgba(255, 245, 245,1)\'/%3E%3Ccircle cx=\'15\' cy=\'15\' r=\'2.5\' fill=\'rgba(229, 62, 62,1)\'/%3E%3Ccircle cx=\'35\' cy=\'15\' r=\'2.5\' fill=\'rgba(229, 62, 62,1)\'/%3E%3Ccircle cx=\'5\' cy=\'25\' r=\'2.5\' fill=\'rgba(229, 62, 62,1)\'/%3E%3Ccircle cx=\'25\' cy=\'25\' r=\'2.5\' fill=\'rgba(229, 62, 62,1)\'/%3E%3C/pattern%3E%3C/defs%3E%3Crect fill=\'url(%23doodad)\' height=\'200%25\' width=\'200%25\'/%3E%3C/svg%3E")'
]



const adventContainer = document.querySelector("#advent-container");

const box = document.createElement("div");

box.classList.add("box");




for (let i = 1; i <= 24; i++) {

    const newBox = box.cloneNode(true);

    newBox.innerText = i;



    //DEBUG
    var f = randomIndex(patterns.length);

    console.log(f);
    //DEBUG



    newBox.style.background = patterns[f];

    setSize(newBox, 150, 100);

    newBox.style.transform = "translate(0,-20)";

    adventContainer.appendChild(newBox);
}


// translateY(-number)









