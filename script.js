// Détermine la taille(l, L) d'un élément, ayant une taille minimale de minSize et une taille maximale de minSize + addSize
function setSize(element, minSize, addedSize) {
  element.style.width = minSize + addedSize * Math.random().toFixed(1) + "px";
  element.style.height = minSize + addedSize * Math.random().toFixed(1) + "px";

  console.log(
    `Width = ${element.style.width} \nHeight = ${element.style.height}`
  );
}

// Renvoie un nombre aléatoire compris entre 0 et max
function randomNumber(max) {
  return Math.floor(Math.random() * max);
}

// Mélange les enfants de l'élément sélectionné
function shuffleChildren(parent) {
  let children = parent.children;

  let i = adventContainer.children.length,
    k,
    temp;

  while (--i > 0) {
    // while (i - 1) > 0
    k = Math.floor(Math.random() * (i + 1)); // k stocke un nombre aléatoire basé sur i
    temp = children[k]; // temp pointe temporairement l'élément à la position k dans board
    children[k] = children[i]; // remplace lélément à la position k par l'élément à la position i
    adventContainer.appendChild(temp); // place l'élément k pointé temporairement à la fin du contenu de board
  }
}

function playAudio(audio) {
  audio.play();
  // alert("play");
}

function pauseAudio(audio) {
  audio.pause();
  // alert("pause");
}

function reset() {
  window.confirm("Êtes-vous sûrs de vouloir réinitialiser le calendrier?");
}

// Array contenan tous le spattrens qui serviront de background aux box
patterns = [
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='100%25' width='100%25'%3E%3Cdefs%3E%3Cpattern id='doodad' width='90' height='90' viewBox='0 0 40 40' patternUnits='userSpaceOnUse' patternTransform='rotate(135)'%3E%3Crect width='100%25' height='100%25' fill='rgba(42, 67, 101,1)'/%3E%3Cpath d='M-10 30h60v2h-60zM-10-10h60v2h-60' fill='rgba(229, 62, 62,1)'/%3E%3Cpath d='M-10 12h60v1h-60zM-10-28h60v1h-60z' fill='rgba(236, 201, 75,1)'/%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23doodad)' height='200%25' width='200%25'/%3E%3C/svg%3E\")",
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='100%25' width='100%25'%3E%3Cdefs%3E%3Cpattern id='doodad' width='150' height='150' viewBox='0 0 40 40' patternUnits='userSpaceOnUse' patternTransform='rotate(135)'%3E%3Crect width='100%25' height='100%25' fill='rgba(197, 48, 48,1)'/%3E%3Cpath d='M0 29a 9-9 0 0 0 9-9a 11-11 0 0 1 11-11v2a-9 9 0 0 0-9 9a-11 11 0 0 1-11 11zM0 69a 9-9 0 0 0 9-9a 11-11 0 0 1 11-11v2a-9 9 0 0 0-9 9a-11 11 0 0 1-11 11z' fill='rgba(34, 84, 61,1)'/%3E%3Cpath d='M20 29.5a 9.5-9.5 0 0 0 9.5-9.5a 10.5-10.5 0 0 1 10.5-10.5v1a-9.5 9.5 0 0 0-9.5 9.5a-10.5 10.5 0 0 1-10.5 10.5z' fill='rgba(246, 224, 94,1)'/%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23doodad)' height='200%25' width='200%25'/%3E%3C/svg%3E\")",
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='100%25' width='100%25'%3E%3Cdefs%3E%3Cpattern id='doodad' width='86' height='86' viewBox='0 0 40 40' patternUnits='userSpaceOnUse' patternTransform='rotate(23)'%3E%3Crect width='100%25' height='100%25' fill='%23702459'/%3E%3Cpath d='M0 15h40v10h-40z' fill='%23f6e05e'/%3E%3Cpath d='M-40 15h20l3 5l-3 5h-20l3-5zM0 15h20l3 5l-3 5h-20l3-5z' fill='%23d69e2e'/%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23doodad)' height='200%25' width='200%25'/%3E%3C/svg%3E\")",
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='100%25' width='100%25'%3E%3Cdefs%3E%3Cpattern id='doodad' width='55' height='55' viewBox='0 0 40 40' patternUnits='userSpaceOnUse' patternTransform='rotate(217)'%3E%3Crect width='100%25' height='100%25' fill='%23e56161'/%3E%3Cpath d='M-10 10h60v12h-60z' fill='rgba(240, 255, 244,1)' filter='url(%23filter-doodad-1)'/%3E%3Cpath d='M-30 10h6l-12 12h-6zM10 10h6l-12 12h-6zM50 10h6l-12 12h-6z' stroke-miterlimit='99' fill='%23222d59' filter='url(%23filter-doodad-2)'/%3E%3C/pattern%3E%3Cfilter id='filter-doodad-1'%3E%3CfeTurbulence baseFrequency='0.01 0.2' numOctaves='2' result='result1'/%3E%3CfeDisplacementMap in2='result1' scale='5' result='result2' xChannelSelector='R' yChannelSelector='G' in='SourceGraphic'/%3E%3CfeComposite in2='result2' in='SourceGraphic' operator='atop' result='compositeGraphic'/%3E%3CfeOffset in='compositeGraphic' result='fbSourceGraphic' dx='-0.5'/%3E%3C/filter%3E%3Cfilter id='filter-doodad-2'%3E%3CfeTurbulence baseFrequency='0.05 0.01' numOctaves='2' result='result1'/%3E%3CfeDisplacementMap in2='result1' scale='9' result='result2' xChannelSelector='R' yChannelSelector='G' in='SourceGraphic'/%3E%3CfeComposite in2='result2' in='SourceGraphic' operator='atop' result='compositeGraphic'/%3E%3CfeOffset in='compositeGraphic' result='fbSourceGraphic' dy='-0.9'/%3E%3C/filter%3E%3C/defs%3E%3Crect fill='url(%23doodad)' height='200%25' width='200%25'/%3E%3C/svg%3E\")",
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='100%25' width='100%25'%3E%3Cdefs%3E%3Cpattern id='doodad' width='68' height='68' viewBox='0 0 40 40' patternUnits='userSpaceOnUse' patternTransform='rotate(111)'%3E%3Crect width='100%25' height='100%25' fill='rgba(246, 224, 94,1)'/%3E%3Cpath d='M0 8.5a 11.5 11.5 0 0 1 11.5 11.5a 8.5 8.5 0 0 0 8.5 8.5v3a-11.5-11.5 0 0 1-11.5-11.5a-8.5-8.5 0 0 0-8.5-8.5z' fill='rgba(112, 36, 89,1)'/%3E%3Cpath d='M20 28.5a 8.5-8.5 0 0 0 8.5-8.5a 11.5-11.5 0 0 1 11.5-11.5v3a-8.5 8.5 0 0 0-8.5 8.5a-11.5 11.5 0 0 1-11.5 11.5zM20 68.5a 8.5-8.5 0 0 0 8.5-8.5a 11.5-11.5 0 0 1 11.5-11.5v3a-8.5 8.5 0 0 0-8.5 8.5a-11.5 11.5 0 0 1-11.5 11.5z' fill='rgba(112, 36, 89,1)'/%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23doodad)' height='200%25' width='200%25'/%3E%3C/svg%3E\")",
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='100%25' width='100%25'%3E%3Cdefs%3E%3Cpattern id='doodad' width='68' height='68' viewBox='0 0 40 40' patternUnits='userSpaceOnUse' patternTransform='rotate(111)'%3E%3Crect width='100%25' height='100%25' fill='rgba(56, 178, 172,1)'/%3E%3Cpath d='M0 8.5a 11.5 11.5 0 0 1 11.5 11.5a 8.5 8.5 0 0 0 8.5 8.5v3a-11.5-11.5 0 0 1-11.5-11.5a-8.5-8.5 0 0 0-8.5-8.5z' fill='rgba(255, 255, 240,1)'/%3E%3Cpath d='M20 8.5a 8.5-8.5 0 0 0 8.5-8.5a 11.5-11.5 0 0 1 11.5-11.5v3a-8.5 8.5 0 0 0-8.5 8.5a-11.5 11.5 0 0 1-11.5 11.5zM20 48.5a 8.5-8.5 0 0 0 8.5-8.5a 11.5-11.5 0 0 1 11.5-11.5v3a-8.5 8.5 0 0 0-8.5 8.5a-11.5 11.5 0 0 1-11.5 11.5z' fill='rgba(255, 255, 240,1)'/%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23doodad)' height='200%25' width='200%25'/%3E%3C/svg%3E\")",
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='100%25' width='100%25'%3E%3Cdefs%3E%3Cpattern id='doodad' width='34' height='34' viewBox='0 0 40 40' patternUnits='userSpaceOnUse' patternTransform='rotate(111)'%3E%3Crect width='100%25' height='100%25' fill='rgba(247, 250, 252,1)'/%3E%3Cpath d='M0 0h10v-3h-10zM20 0h10v-3h-10zM0 40h10v-3h-10zM20 40h10v-3h-10z' fill='rgba(236, 201, 75,1)'/%3E%3Cpath d='M10 20h10v-3h-10zM30 20h10v-3h-10z' fill='rgba(236, 201, 75,1)'/%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23doodad)' height='200%25' width='200%25'/%3E%3C/svg%3E\")",
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='100%25' width='100%25'%3E%3Cdefs%3E%3Cpattern id='doodad' width='34' height='34' viewBox='0 0 40 40' patternUnits='userSpaceOnUse' patternTransform='rotate(135)'%3E%3Crect width='100%25' height='100%25' fill='rgba(237, 137, 54,1)'/%3E%3Cpath d='M0 20 v-1.5 h1 v3 h1 v-1.5 zM2 20 v-1.5 h1 v3 h1 v-1.5 zM4 20 v-1.5 h1 v3 h1 v-1.5 zM6 20 v-1.5 h1 v3 h1 v-1.5 zM8 20 v-1.5 h1 v3 h1 v-1.5 zM10 20 v-1.5 h1 v3 h1 v-1.5 zM12 20 v-1.5 h1 v3 h1 v-1.5 zM14 20 v-1.5 h1 v3 h1 v-1.5 zM16 20 v-1.5 h1 v3 h1 v-1.5 zM18 20 v-1.5 h1 v3 h1 v-1.5 zM20 20 v-1.5 h1 v3 h1 v-1.5 zM22 20 v-1.5 h1 v3 h1 v-1.5 zM24 20 v-1.5 h1 v3 h1 v-1.5 zM26 20 v-1.5 h1 v3 h1 v-1.5 zM28 20 v-1.5 h1 v3 h1 v-1.5 zM30 20 v-1.5 h1 v3 h1 v-1.5 zM32 20 v-1.5 h1 v3 h1 v-1.5 zM34 20 v-1.5 h1 v3 h1 v-1.5 zM36 20 v-1.5 h1 v3 h1 v-1.5 zM38 20 v-1.5 h1 v3 h1 v-1.5 z' fill='rgba(236, 201, 75,1)'/%3E%3Cpath d='M0 20 v4 h1 v-8 h1 v4 zM2 20 v4 h1 v-8 h1 v4 zM4 20 v4 h1 v-8 h1 v4 zM6 20 v4 h1 v-8 h1 v4 zM8 20 v4 h1 v-8 h1 v4 zM10 20 v4 h1 v-8 h1 v4 zM12 20 v4 h1 v-8 h1 v4 zM14 20 v4 h1 v-8 h1 v4 zM16 20 v4 h1 v-8 h1 v4 zM18 20 v4 h1 v-8 h1 v4 zM20 20 v4 h1 v-8 h1 v4 zM22 20 v4 h1 v-8 h1 v4 zM24 20 v4 h1 v-8 h1 v4 zM26 20 v4 h1 v-8 h1 v4 zM28 20 v4 h1 v-8 h1 v4 zM30 20 v4 h1 v-8 h1 v4 zM32 20 v4 h1 v-8 h1 v4 zM34 20 v4 h1 v-8 h1 v4 zM36 20 v4 h1 v-8 h1 v4 zM38 20 v4 h1 v-8 h1 v4 z' fill='rgba(251, 211, 141,1)'/%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23doodad)' height='200%25' width='200%25'/%3E%3C/svg%3E\")",
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='100%25' width='100%25'%3E%3Cdefs%3E%3Cpattern id='doodad' width='92' height='92' viewBox='0 0 40 40' patternUnits='userSpaceOnUse' patternTransform='rotate(225)'%3E%3Crect width='100%25' height='100%25' fill='rgba(247, 250, 252,1)'/%3E%3Ccircle cx='-5' cy='15' r='1' fill='rgba(255, 245, 245,1)'/%3E%3Ccircle cx='5' cy='25' r='1' fill='rgba(255, 245, 245,1)'/%3E%3Ccircle cx='15' cy='15' r='1' fill='rgba(255, 245, 245,1)'/%3E%3Ccircle cx='35' cy='15' r='1' fill='rgba(255, 245, 245,1)'/%3E%3Ccircle cx='25' cy='25' r='1' fill='rgba(255, 245, 245,1)'/%3E%3Ccircle cx='45' cy='25' r='1' fill='rgba(255, 245, 245,1)'/%3E%3Ccircle cx='15' cy='15' r='2.5' fill='rgba(229, 62, 62,1)'/%3E%3Ccircle cx='35' cy='15' r='2.5' fill='rgba(229, 62, 62,1)'/%3E%3Ccircle cx='5' cy='25' r='2.5' fill='rgba(229, 62, 62,1)'/%3E%3Ccircle cx='25' cy='25' r='2.5' fill='rgba(229, 62, 62,1)'/%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23doodad)' height='200%25' width='200%25'/%3E%3C/svg%3E\")",
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='100%25' width='100%25'%3E%3Cdefs%3E%3Cpattern id='doodad' width='52' height='52' viewBox='0 0 40 40' patternUnits='userSpaceOnUse' patternTransform='rotate(135)'%3E%3Crect width='100%25' height='100%25' fill='rgba(197, 48, 48,1)'/%3E%3Ccircle cx='40' cy='20' r='3.5' fill='rgba(247, 250, 252,1)'/%3E%3Ccircle cx='0' cy='20' r='3.5' fill='rgba(247, 250, 252,1)'/%3E%3Ccircle cx='20' cy='20' r='3.5' fill='rgba(247, 250, 252,1)'/%3E%3Ccircle cx='0' cy='20' r='6.5' fill='rgba(155, 44, 44,1)'/%3E%3Ccircle cx='40' cy='20' r='6.5' fill='rgba(155, 44, 44,1)'/%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23doodad)' height='200%25' width='200%25'/%3E%3C/svg%3E\")",
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='100%25' width='100%25'%3E%3Cdefs%3E%3Cpattern id='doodad' width='52' height='52' viewBox='0 0 40 40' patternUnits='userSpaceOnUse' patternTransform='rotate(10)'%3E%3Crect width='100%25' height='100%25' fill='rgba(197, 48, 48,1)'/%3E%3Cpath d='M-10 30h60v13h-60zM-10-10h60v13h-60' fill='rgba(47, 133, 90,1)'/%3E%3Cpath d='M-10 14h60v4h-60zM-10-26h60v4h-60z' fill='rgba(246, 224, 94,1)'/%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23doodad)' height='200%25' width='200%25'/%3E%3C/svg%3E\")",
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='100%25' width='100%25'%3E%3Cdefs%3E%3Cpattern id='doodad' width='70' height='70' viewBox='0 0 40 40' patternUnits='userSpaceOnUse' patternTransform='rotate(10)'%3E%3Crect width='100%25' height='100%25' fill='rgba(197, 48, 48,1)'/%3E%3Ccircle cx='5' cy='31' r='3.25' fill='rgba(247, 250, 252,1)' filter='url(%23filter-doodad-1)'/%3E%3Ccircle cx='25' cy='9' r='3.25' fill='rgba(247, 250, 252,1)' filter='url(%23filter-doodad-1)'/%3E%3Ccircle cx='5' cy='-9' r='3.25' fill='rgba(247, 250, 252,1)' filter='url(%23filter-doodad-1)'/%3E%3Ccircle cx='25' cy='49' r='3.25' fill='rgba(247, 250, 252,1)' filter='url(%23filter-doodad-1)'/%3E%3Ccircle cx='15' cy='20' r='3.5' fill='rgba(197, 48, 48,1)' filter='url(%23filter-doodad-2)'/%3E%3Ccircle cx='35' cy='20' r='3.5' fill='rgba(197, 48, 48,1)' filter='url(%23filter-doodad-2)'/%3E%3C/pattern%3E%3Cfilter id='filter-doodad-1'%3E%3CfeTurbulence baseFrequency='0.6000000000000001' numOctaves='2' type='fractalNoise' result='result1'/%3E%3CfeDisplacementMap in2='result1' scale='3' result='result2' xChannelSelector='R' in='SourceGraphic'/%3E%3CfeComposite in2='result2' in='SourceGraphic' operator='atop' result='fbSourceGraphic'/%3E%3C/filter%3E%3Cfilter id='filter-doodad-2'%3E%3CfeTurbulence baseFrequency='0.01 1' numOctaves='2' result='result1'/%3E%3CfeDisplacementMap in2='result1' scale='4' result='result2' xChannelSelector='R' yChannelSelector='G' in='SourceGraphic'/%3E%3CfeComposite in2='result2' in='SourceGraphic' operator='atop' result='compositeGraphic'/%3E%3CfeOffset in='compositeGraphic' result='fbSourceGraphic' dx='-0.4'/%3E%3C/filter%3E%3C/defs%3E%3Crect fill='url(%23doodad)' height='200%25' width='200%25'/%3E%3C/svg%3E\")",
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='100%25' width='100%25'%3E%3Cdefs%3E%3Cpattern id='doodad' width='20' height='20' viewBox='0 0 40 40' patternUnits='userSpaceOnUse' patternTransform='rotate(45)'%3E%3Crect width='100%25' height='100%25' fill='rgba(247, 250, 252,1)'/%3E%3Cpath d='M40 20L34 14L34 6L26 6L20 0L14 6L6 6L6 14L0 20L6 26L6 34L14 34L20 40L26 34L34 34L34 26z' fill='rgba(247, 250, 252,1)'/%3E%3Cpath d='M32 20L34 14L34 6L26 6L20 8L14 6L6 6L6 14L8 20L6 26L6 34L14 34L20 32L26 34L34 34L34 26z' fill='rgba(229, 62, 62,1)'/%3E%3Cpath d='M0 0L6 14v-8h8zM40 0L26 6h8v8zM0 40L6 26v8h8zM40 40L34 26v8h-8z' fill='rgba(247, 250, 252,1)'/%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23doodad)' height='200%25' width='200%25'/%3E%3C/svg%3E\")",
];

quotes = [
  "\"Christmas isn't a season. It's a feeling.\"\n— Edna Ferber",
  '"The best way to spread Christmas cheer is singing loud for all to hear."\n— Elf (movie)',
  '"Gifts of time and love are surely the basic ingredients of a truly merry Christmas."\n— Peg Bracken',
  '"At Christmas, all roads lead home."\n— Marjorie Holmes',
  '"Peace on earth will come to stay when we live Christmas every day."\n— Helen Steiner Rice',
  '"Christmas waves a magic wand over this world, and behold, everything is softer and more beautiful."\n— Norman Vincent Peale',
  '"I will honor Christmas in my heart, and try to keep it all the year."\n— Charles Dickens',
  '"May you never be too grown up to search the skies on Christmas Eve."\n— Anonymous',
  '"What is Christmas? It is tenderness for the past, courage for the present, hope for the future."\n— Agnes M. Pahro',
  '"Christmas is not as much about opening our presents as opening our hearts."\n— Janice Maeditere',
  '"The joy of brightening other lives becomes for us the magic of the holidays."\n— W.C. Jones',
  '"Maybe Christmas, he thought, doesn\'t come from a store. Maybe Christmas… perhaps… means a little bit more!"\n— Dr. Seuss, How the Grinch Stole Christmas!',
  '"Christmas will always be as long as we stand heart to heart and hand in hand."\n— Dr. Seuss',
  '"Christmas is a stocking stuffed with sugary goodness."\n— Mo Rocca',
  '"Blessed is the season which engages the whole world in a conspiracy of love."\n— Hamilton Wright Mabie',
  '"It’s not what’s under the Christmas tree that matters, it’s who’s around it."\n— Charlie Brown',
  '"Christmas gives us the opportunity to pause and reflect on the important things around us."\n— David Cameron',
  '"Kindness is like snow. It beautifies everything it covers."\n— Khalil Gibran',
  '"T\'was the night before Christmas, when all through the house, not a creature was stirring, not even a mouse."\n— Clement Clarke Moore',
  '"The best of all gifts around any Christmas tree: the presence of a happy family all wrapped up in each other."\n— Burton Hillis',
  '"Christmas is forever, not for just one day. For loving, sharing, giving, are not to put away."\n— Norman Wesley Brooks',
  '"To cherish peace and goodwill, to be plenteous in mercy, is to have the real spirit of Christmas."\n— Calvin Coolidge',
  '"Every time we love, every time we give, it’s Christmas."\n— Dale Evans',
  '"Christmas is the spirit of giving without a thought of getting. It is happiness because we see joy in people. It is forgetting self and finding time for others."\n— Thomas S. Monson',
];

// audio

const audioTest = new Audio("audio/test.mp3");

// on trouve l'élément avec l'id #advent-container
const adventContainer = document.querySelector("#advent-container");

// création d'une div boxContainer
const boxContainer = document.createElement("div");

// on attribue la classe .box_container à boxContainer
boxContainer.classList.add("box_container");

// création d'une div box
const box = document.createElement("div");

// on attribue la classe .box à box
box.classList.add("box");

localStorage.clear();

for (let i = 1; i <= 24; i++) {
  var newBox = box.cloneNode(true);

  newBox.classList.add(i);

  newBox.innerText = i;

  //DEBUG
  var f = randomNumber(patterns.length);

  console.log(`Box ${i}, pattern n° ${f}`);
  //DEBUG

  newBox.style.background = patterns[f];

  if (i == 24) {
    newBox.classList.add("box_christmas");
    setSize(newBox, 250, 0);
  } else {
    setSize(newBox, 150, 100);
  }

  const newBoxContainer = boxContainer.cloneNode(true);

  const heightNewBox = parseInt(newBox.style.height, 10);
  const widthtNewBox = parseInt(newBox.style.width, 10);

  newBoxContainer.style.height = heightNewBox * 1.5 + "px";
  newBoxContainer.style.width = widthtNewBox * 1.5 + "px";

  newBoxContainer.appendChild(newBox);

  adventContainer.appendChild(newBoxContainer);

  // DEBUG
  offsetX = randomNumber(30);
  offsetY = randomNumber(50);

  console.log(
    `Box ${i} offset in X by ${offsetX}%\nBox ${i} offset in Y by ${offsetY}%`
  );
  // DEBUG

  newBox.style.transform = `translate(${offsetX}%, ${offsetY}%)`;
}

// gestion du popup

const boxes = document.querySelectorAll(".box");

const popup = document.getElementById("popup");

const closePopup = document.getElementById("close-popup");

const popupInnerText = document.getElementById("popup-inner-text");

boxes.forEach((box) => {

  box.addEventListener("touchstart", () => {
    box.classList.add("hover");
  })

  box.addEventListener("touchend", () => {
    box.classList.remove("hover");
  })

  box.addEventListener("click", () => {
    box.innerText = "";

    box.classList.add("clicked");

    playAudio(audioTest);

    popupInnerText.innerText = quotes[box.classList[1] - 1]; // bricolage

    popup.classList.add("open");
  });
});

closePopup.addEventListener("click", () => {
  popup.classList.remove("open");

  pauseAudio(audioTest);
});

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("pop");
      } else {
        entry.target.classList.remove("pop");
      }
    })
  },
  {
    threshold: 1,
  }
)

boxes.forEach(box => {
  observer.observe(box);
})


// mélange les cases à chaque chargement de la page
shuffleChildren(adventContainer);
