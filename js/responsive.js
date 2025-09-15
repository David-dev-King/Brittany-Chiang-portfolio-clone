// const stickySide = document.querySelector('.sticky-side');
// const scrollSide = document.querySelector('.scroll-side');

// center content when the screen is too wide
function updateSidePadding(){
    if(window.innerWidth >= 1279){
        stickySide.style.paddingLeft = `${(window.innerWidth - 1279)/2}px`;
        scrollSide.style.paddingRight = `${(window.innerWidth - 1279)/2}px`;
    }
    requestAnimationFrame(updateSidePadding);
}
updateSidePadding();
