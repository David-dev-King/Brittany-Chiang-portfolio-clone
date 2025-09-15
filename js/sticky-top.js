const stickyTops = document.querySelectorAll('.sticky-top');
let tempPlaceholderText = "";

function updateTop(){
    for (let i = stickyTops.length-1; i > -1; i--) {
        const stickyTop = stickyTops[i];
        const stickyPlaceholder = document.getElementById(stickyTop.id+"-placeholder");
        const stickyEnd = stickyTop.parentElement.querySelector('.sticky-end');
        const stickyParent = stickyTop.parentElement;
        const globalScroll = document.querySelector('html').scrollTop;
        if (globalScroll >= stickyPlaceholder.offsetTop && globalScroll < stickyEnd.offsetTop){
            if (stickyPlaceholder.innerHTML != "") tempPlaceholderText = stickyPlaceholder.innerHTML;
            stickyPlaceholder.innerHTML = "";
            stickyTop.classList.add('sticky-active');
        }
        else{
            if (stickyPlaceholder.innerHTML == "" && !stickyTop.classList.contains('sticky-active')){
                stickyPlaceholder.innerHTML = tempPlaceholderText;
            }
            stickyTop.classList.remove('sticky-active');
        }
        
    }
    requestAnimationFrame(updateTop);
}
updateTop();