// const menuTag = document.querySelector("div.menu");
// const menuBtn = document.querySelector("#ham");

// menuBtn.addEventListener("click",function(){
//     menuTag.classList.toggle("open")
// })

const navbarBurger = document.querySelector('#ham');
const navbarburgerback = document.querySelector('.navbar_burger_back');
const navbarMenu = document.querySelector('.navbar_menu');
const navbarOverlay = document.querySelector('.navbar_overlay');

navbarBurger.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
    navbarOverlay.classList.toggle('active');
});

navbarburgerback.addEventListener('click', () => {
    navbarMenu.classList.remove('active');
    navbarOverlay.classList.remove('active');
});

navbarOverlay.addEventListener('click', () => {
    navbarMenu.classList.remove('active');
    navbarOverlay.classList.remove('active');
});


const photoWrap1 = document.querySelector(".photo-wrap-1");
const photos1 = photoWrap1.querySelectorAll("img");

photoWrap1.addEventListener("mouseover", function(){
    photos1.forEach(photo => {
        let randomX = Math.round(Math.random()*4)*10 - 20;
        let randomY = Math.round(Math.random()*4)*10 - 20;
        photo.style.transform = `translate(${randomX}px, ${randomY}px)`;
    })
})
photoWrap1.addEventListener("mouseout", function(){
    photos1.forEach(photo => {
        photo.style.transform = `translate(0px, 0px)`;
    })
})

const photoWrap2 = document.querySelector(".photo-wrap-2");
const photos2 = photoWrap2.querySelectorAll("img");

photoWrap2.addEventListener("mouseover", function(){
    photos2.forEach(photo => {
        let randomX = Math.round(Math.random()*4)*10 - 20;
        let randomY = Math.round(Math.random()*4)*10 - 20;
        photo.style.transform = `translate(${randomX}px, ${randomY}px)`;
    })
})
photoWrap2.addEventListener("mouseout", function(){
    photos2.forEach(photo => {
        photo.style.transform = `translate(0px, 0px)`;
    })
})

const photoWrap3 = document.querySelector(".photo-wrap-3");
const photos3 = photoWrap3.querySelectorAll("img");

photoWrap3.addEventListener("mouseover", function(){
    photos3.forEach(photo => {
        let randomX = Math.round(Math.random()*4)*10 - 20;
        let randomY = Math.round(Math.random()*4)*10 - 20;
        photo.style.transform = `translate(${randomX}px, ${randomY}px)`;
    })
})
photoWrap3.addEventListener("mouseout", function(){
    photos3.forEach(photo => {
        photo.style.transform = `translate(0px, 0px)`;
    })
})

let clickNum = 0;
photoWrap1.addEventListener("click", function(){
    clickNum++;
    photos1[clickNum%photos1.length].style.zIndex = clickNum
})
photoWrap2.addEventListener("click", function(){
    clickNum++;
    photos2[clickNum%photos2.length].style.zIndex = clickNum
})
photoWrap3.addEventListener("click", function(){
    clickNum++;
    photos3[clickNum%photos3.length].style.zIndex = clickNum
})