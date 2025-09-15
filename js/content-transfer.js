const desktopOnly = document.querySelector('.container.desktop-only');
const mobileOnly = document.querySelector('.container.mobile-only');

const desktopSections = desktopOnly.querySelectorAll('section');
const mobileSections = mobileOnly.querySelectorAll('section');

const desktopSocialIcons = desktopOnly.querySelector('.social-icons');
const mobileSocialIcons = mobileOnly.querySelector('.social-icons')

// copy the content in the sections from desktop to mobile
desktopSections.forEach(dsec => {
    mobileSections.forEach(msec => {
        if (dsec.id == msec.id){
            msec.innerHTML += dsec.innerHTML;
            msec.innerHTML += '<div class="sticky-end"></div>';
        }
    });
});

mobileSocialIcons.innerHTML = desktopSocialIcons.innerHTML;