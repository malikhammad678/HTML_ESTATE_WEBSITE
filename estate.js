let menu = document.querySelector('.menu');
let menuBtn = document.querySelector('#menubtn') 


menuBtn.onclick = () => {
    menuBtn.classList.toggle('bx-x');
    menu.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('active');
}

document.querySelectorAll('.view-property .detail .thumb .small-images img').forEach((images) => {
    images.onclick = () => {
        src = images.getAttribute('src');
        document.querySelector('.view-property .detail .thumb .big-image img').src = src;
    }
})

document.querySelectorAll('.faq .box-container .box h3').forEach((headings) => {
    headings.onclick = () => {
        headings.parentElement.classList.toggle('active');
    }
})