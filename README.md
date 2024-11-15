# Christmas Advent Calendar

Le site 👉 🎅[Merry Christmas](https://loic-1.github.io/JS-Advent.github.io/)📅

## Table de matière
- [Captures d'écran](#captures-décran)

- [Fonctionnalités](#fonctionnalités)

## Captures d'écran

## Fonctionnalités

- Affichage des cases du calendrier dans un ordre aléatoire
  - Utilisation de la fonction shuffleChildren pour mélanger les enfants de #advent-container:
    ```js
    function shuffleChildren(parent) {
    let children = parent.children;

    let i = board.children.length, k, temp;

    while (--i > 0) { // while (i - 1) > 0
        k = Math.floor(Math.random() * (i + 1)); // k stocke un nombre aléatoire basé sur i
        temp = children[k]; // temp pointe temporairement l'élément à la position k dans board
        children[k] = children[i]; // remplace lélément à la position k par l'élément à la position i
        board.appendChild(temp); // place l'élément k pointé temporairement à la fin du contenu de board
    }
    ```
    <br/>
- Les cases sont cliquables et l'ordre importe!
  ```js
  contenu js
  ```
  <br/>
- Il y a une animation au clic! <br/>
  [Animation de case](link)
<br/>
- La taille des cases est randomisée grâce à la fonction setSize:
 ```js
// This is a simple JavaScript function
function setSize(element, minSize, addedSize) {}
```
