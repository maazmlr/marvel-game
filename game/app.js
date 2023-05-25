var body=document.querySelector('body');
const ironman =document.querySelector('.iron')
const captain =document.querySelector('.america')
let isMovingForward = false;
let pixel=0
let pixelleft=0

console.log(body.offsetWidth)

document.addEventListener('keyup', function(event) {
    if (event.key === 'ArrowUp') {
        ironman.src = './img/iron-proton.gif';
    } else if (event.key === 'ArrowDown') {
        
        ironman.src = './img/iron-crouchattax.gif';
    } else if (event.key === 'ArrowRight') {
        
        ironman.src = './img/iron-walk.gif';
        ironman.style.paddingRight="100px"
    } else if (event.key === 'ArrowLeft') {
        if(pixel>=0 && pixel<=700){
        pixel+=30;
        
        ironman.style.paddingLeft=pixel+'px';}
        ironman.src = './img/iron-walk.gif';
    } else {
        ironman.src = './img/iron-man-stance.gif';
    }
});


document.addEventListener('keyup', function(event) {
    if (event.key === 'w') {
        captain.src='./img/up.gif'
    } else if (event.key === 's') {
        captain.src = './img/s.gif';
    } else if (event.key === 'd') {
        if(pixel>=0 && pixel<=850){
            pixel+=30;
            
            captain.style.paddingLeft=pixel+'px';}
        captain.src = './img/captainamerica-full.gif';
    } else if (event.key === 'a') {
        captain.src = './img/captainamerica-full.gif';
    } else {
        captain.src = './img/captainamerica-full.gif';
    }
});
