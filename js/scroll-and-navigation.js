const navlinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.main-section.desktop-only');

const stickySide = document.querySelector('.sticky-side');
const scrollSide = document.querySelector('.scroll-side');

let targetScroll = 0;
let currentScroll = 0;
let isScrolling = false;


function lerp(start, end, ease) {
    return start * (1 - ease) + end * ease;
}

// apply the lerp functionality
function smoothScroll(){
    if (isScrolling){
        currentScroll = lerp(currentScroll, targetScroll, 0.2);
        scrollSide.scrollTop = currentScroll;
    
        // snap the scroll if it gets too close to the target
        if (Math.abs(currentScroll-targetScroll) < 0.5){
            currentScroll = targetScroll;
            isScrolling = false;
        }
    }
    else currentScroll = targetScroll = scrollSide.scrollTop;
    requestAnimationFrame(smoothScroll);
}


function updateActiveNav(){
    const scrollPosition = targetScroll + 200;

    for (let i=sections.length-1; i>-1; i--){
        const section = sections[i];
        sectionTop = section.offsetTop;
        sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop){
            for(let i=0; i<navlinks.length; i++){
                navlinks[i].parentElement.classList.remove('active');
                if (navlinks[i].getAttribute('href') == '#'+section.id){
                    navlinks[i].parentElement.classList.add('active');
                }
            }
            break;
        }
    }
}

// Smooth scroll on link click
navlinks.forEach(link => {
    link.parentElement.addEventListener('click', (e) =>{
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetselection = document.querySelector(targetId);
        targetScroll = targetselection.offsetTop - 50;
        targetScroll = Math.max(0, Math.min(targetScroll, scrollSide.scrollHeight - scrollSide.clientHeight));
        isScrolling = true;
        updateActiveNav();
        console.log(targetId + ": " + targetselection.offsetTop);
    })
})


// Enable scrolling from anywhere in the page
document.querySelector('.container.desktop-only').addEventListener('wheel', (e) => {
    isScrolling = true;
    targetScroll += e.deltaY;
    targetScroll = Math.max(0, Math.min(targetScroll, scrollSide.scrollHeight - scrollSide.clientHeight));
    updateActiveNav();
    e.preventDefault(); // Prevent default scroll behavior
}, {passive : false});

// Initialize smooth scroll
smoothScroll();
