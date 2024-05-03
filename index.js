var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n){
  showDivs(slideIndex += n);
}

function showDivs(n) {
    let x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length} ;
    x[slideIndex-1].classList.remove('no-show');
    for (let i = 0; i < x.length; i++) {
        if(i != slideIndex-1){
            x[i].classList.add('no-show');
        }
    }
}
let animation = {
    revealDistance: 150,
    initialOpacity: 0,
    transitionDelay: 0, 
    transitionDuration: '2s',
    transitionProperty: 'all',
    trnasitionTimingFunction: 'ease'
}  

let revealableContainers = document.getElementsByClassName('revealable')

const reveal = () => {
    console.log(revealableContainers.length);
    for(let i = 0; i < revealableContainers.length; i++){
        let windowHeight = window.innerHeight;
        let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
        if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
            /* add the active class to the revealableContainer's classlist */
            revealableContainers[i].classList.add('action');
        }else {
            /* remove the active class to the revealableContainer's classlist */
            revealableContainers[i].classList.remove('action');
        }

    }
}
window.addEventListener("scroll",reveal)