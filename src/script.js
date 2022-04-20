const productContainers = [...document.querySelectorAll('.product-container1')];
const miniitemslider = [...document.querySelectorAll('.miniitemslider')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn1')];
const preBtn = [...document.querySelectorAll('.pre-btn2')];
const minisliderbtn1 = [...document.querySelectorAll('.minisliderbtn1')];
const minisliderbtn2 = [...document.querySelectorAll('.minisliderbtn2')];

const menuBtn = document.querySelector('.menuBtn')
const miniNav = document.querySelector('.miniNav')
const menuBtnClose = document.querySelector('.menuBtnClose')

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })
})

miniitemslider.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    minisliderbtn1[i].addEventListener('click', () => {
        item.scrollLeft -=  containerWidth;
    })
    minisliderbtn2[i].addEventListener('click', () => {

        item.scrollLeft += containerWidth;
    })
})

menuBtn.addEventListener('click',()=>{
    // menuBtnClose btn add 
    menuBtnClose.classList.add('miniNavMenu')
    // menuBtn btn remove
    menuBtn.classList.add('miniNavMenuClose')
    // miniNav menu add
    // miniNav.classList.add('miniNavMenu')
    miniNav.classList.add('miniNavMenuHiden')
})

menuBtnClose.addEventListener('click',()=>{
    // menuBtn btn add
    menuBtn.classList.remove('miniNavMenuClose')
    // menuBtnClose btn reomove
    menuBtnClose.classList.remove('miniNavMenu')
    // miniNav menu remove
    // miniNav.classList.remove('miniNavMenu')
    miniNav.classList.remove('miniNavMenuHiden')
    
})
