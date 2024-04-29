var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n){
  showDivs(slideIndex += n);
}

function showDivs(n) {
    let x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length} ;
    for (let i = 0; i < x.length; i++) {
        if(i == slideIndex-1){
            x[slideIndex-1].style.display = "block";
        }
        else{
            x[i].style.display = "none";
        }
    }
}