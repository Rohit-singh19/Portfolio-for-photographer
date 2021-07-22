const hero = document.querySelector('.hero');

var i = 0;
setInterval(() => {

    const image = [
    'url("Images/slideshow1.jpg")',
    'url("Images/slideshow2.jpg")'
    ]
    // const bg = image[i];

    hero.style.backgroundImage = image[i];
    hero.style.opacity = "1";
    (i==0)? i = 1:i = 0;
    // console.log(i);
    

}, 4000);

