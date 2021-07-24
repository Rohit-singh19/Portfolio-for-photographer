const hero = document.querySelector('.hero');

var i = 0;

setInterval(() => {
    const image = [
        'url("Images/slideshow1.jpg")',
        'url("Images/slideshow2.jpg")',
    ]

    hero.style.backgroundImage = image[i];
    hero.style.opacity = "1";

    (i == 0)? i = 1:i = 0;
}, 4000);