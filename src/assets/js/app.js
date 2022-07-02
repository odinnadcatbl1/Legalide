window.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const headerHeight = header.offsetHeight;
    let scrollPos = window.pageYOffset;
    
    window.addEventListener('scroll', () => {
        scrollPos = window.pageYOffset;
        if (scrollPos > headerHeight && window.innerWidth > 767) {
            header.style.backgroundColor = '#F6F6F6';
            header.style.borderBottom = 'solid 1px #252B4240';
        } else if (scrollPos < headerHeight && window.innerWidth > 767) {
            header.style.backgroundColor = 'transparent';
            header.style.borderBottom = 'none';
        }
    })

    const burger = document.querySelectorAll('.burger');
    const mobileNav = document.querySelector('.mobile__nav');
    burger[1].addEventListener('click', e => {
        console.log(1);
        if (mobileNav.style.display === 'none') {
            mobileNav.style.display = 'block';
        } else {
            mobileNav.style.display = 'none'
        }
    })
});