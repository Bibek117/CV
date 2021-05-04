const sun = document.querySelector('.fa-sun');
const moon = document.querySelector('.fa-moon');
const holder = document.querySelector('.darkLight');
const section =document.querySelector('section');
const aside = document.querySelector('aside');
const html = document.querySelector('body');
const foot = document.querySelector('footer');
const icon = document.querySelectorAll('.icon');
const icon1 =document.querySelectorAll('.fas');


moon.addEventListener('click',()=>{
    moon.style.right = "-15px";
    sun.style.left = "4px";
   
    section.classList.toggle('active-section');
    aside.classList.toggle('active-aside');
    html.style.backgroundColor ="#fff";
    icon.forEach((value)=>{value.style.color ="black";});
    icon1.forEach((value)=>{value.style.color ="black";});
    foot.classList.toggle('active-footer');
    holder.style.backgroundColor ="black";
     sun.style.color = "white";
})
sun.addEventListener('click',()=>{
    moon.style.right = "4px";
    sun.style.left = "-15px";
    
    section.classList.toggle('active-section');
    aside.classList.toggle('active-aside');
    icon.forEach((value)=>{value.style.color ="white";});
    icon1.forEach((value)=>{value.style.color ="white";});
    html.style.backgroundColor ="#0d0d0d";
    foot.classList.toggle('active-footer');
    holder.style.backgroundColor ="white"
    moon.style.color = "black";
})
