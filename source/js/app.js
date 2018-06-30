function showNav(){
  console.log("hello");
  var x = document.getElementById("responsive-nav");
  if(x.className === "responsive-nav"){
    x.className += " unfold";
  } else {
      x.className = "responsive-nav";
  }
}

// JavaScript
window.sr = ScrollReveal();

sr.reveal('#header img.phone', {
    delay: 0,
    duration: 800,
    opacity: 0,
    origin: 'bottom',
    distance: '100px'
});

sr.reveal('.car', {
    delay: 200,
    duration: 300,
    opacity: 0,
    origin: 'top',
    distance: '100px'
});
sr.reveal('.shoe', {
    delay: 400,
    duration: 300,
    opacity: 0,
    origin: 'top',
    distance: '100px'
});
sr.reveal('.device', {
    delay: 600,
    duration: 300,
    opacity: 0,
    origin: 'top',
    distance: '100px'
});

sr.reveal('.discount-layout img', {
    delay: 100,
    duration: 600,
    opacity: 0,
    origin: 'left',
    distance: '100px'
});

sr.reveal('.offer', {
    delay: 100,
    duration: 600,
    opacity: 0,
    origin: 'right',
    distance: '300px'
});
