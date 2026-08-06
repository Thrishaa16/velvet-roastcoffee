/* ==========================================
            LOADER
========================================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        setTimeout(() => {

            loader.style.opacity = "0";
            loader.style.visibility = "hidden";

            setTimeout(() => {

                loader.style.display = "none";

            }, 600);

        }, 1200);

    }

});

/* ==========================================
            STICKY NAVBAR
========================================== */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 80) {

        header.style.background = "rgba(11,9,8,.75)";
        header.style.backdropFilter = "blur(18px)";
        header.style.boxShadow = "0 15px 40px rgba(0,0,0,.35)";

    } else {

        header.style.background = "transparent";
        header.style.boxShadow = "none";

    }

});

/* ==========================================
            MOBILE MENU
========================================== */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("open");

    });

}

/* ==========================================
        CLOSE MENU AFTER CLICK
========================================== */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        if (navLinks)
            navLinks.classList.remove("open");

    });

});

/* ==========================================
            SCROLL REVEAL
========================================== */

const revealElements = document.querySelectorAll(

".hidden,.about-container,.product-card,.process-card,.gallery-item,.testimonial-card,.contact-wrapper"

);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold:0.15

});

revealElements.forEach(el => {

    if(!el.classList.contains("hidden"))
        el.classList.add("hidden");

    observer.observe(el);

});

/* ==========================================
        HERO IMAGE PARALLAX
========================================== */

const heroImage = document.querySelector(".hero-image img");

document.addEventListener("mousemove",(e)=>{

    if(!heroImage) return;

    const x = (window.innerWidth/2 - e.clientX)/45;
    const y = (window.innerHeight/2 - e.clientY)/45;

    heroImage.style.transform =

    `rotateY(${x}deg)
     rotateX(${-y}deg)
     translateY(-8px)`;

});

/* ==========================================
            BUTTON RIPPLE
========================================== */

document.querySelectorAll(".primary-btn").forEach(button=>{

button.addEventListener("mousemove",(e)=>{

const rect=button.getBoundingClientRect();

const x=e.clientX-rect.left;
const y=e.clientY-rect.top;

button.style.setProperty("--x",x+"px");
button.style.setProperty("--y",y+"px");

});

});

/* ==========================================
        BACK TO TOP
========================================== */

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(!topBtn) return;

if(window.scrollY>500){

topBtn.classList.add("show");

}

else{

topBtn.classList.remove("show");

}

});

if(topBtn){

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}

/* ==========================================
        SCROLL PROGRESS BAR
========================================== */

const progress=document.querySelector(".progress-bar");

window.addEventListener("scroll",()=>{

if(!progress) return;

const scrollTop=document.documentElement.scrollTop;

const height=

document.documentElement.scrollHeight-

document.documentElement.clientHeight;

const percent=(scrollTop/height)*100;

progress.style.width=percent+"%";

});

/* ==========================================
        GALLERY TILT
========================================== */

document.querySelectorAll(".gallery-item").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;
const y=e.clientY-rect.top;

const rotateY=((x/rect.width)-0.5)*14;
const rotateX=((y/rect.height)-0.5)*-14;

card.style.transform=

`perspective(900px)
 rotateY(${rotateY}deg)
 rotateX(${rotateX}deg)
 scale(1.04)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="perspective(900px) rotateX(0) rotateY(0) scale(1)";

});

});

/* ==========================================
        PRODUCT CARD TILT
========================================== */

document.querySelectorAll(".product-card").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;
const y=e.clientY-rect.top;

const rx=((y/rect.height)-0.5)*10;
const ry=((x/rect.width)-0.5)*-10;

card.style.transform=

`perspective(1000px)
 rotateX(${rx}deg)
 rotateY(${ry}deg)
 translateY(-10px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="perspective(1000px) rotateX(0) rotateY(0)";

});

});

/* ==========================================
        ACTIVE NAVIGATION
========================================== */

const sections=document.querySelectorAll("section");
const links=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(sec=>{

const top=sec.offsetTop-150;

if(window.scrollY>=top){

current=sec.getAttribute("id");

}

});

links.forEach(link=>{

link.classList.remove("active");

const href=link.getAttribute("href");

if(href===`#${current}`){

link.classList.add("active");

}

});

});

/* ==========================================
        COUNTER ANIMATION
========================================== */

const counters=document.querySelectorAll(".stat h2");

let counterStarted=false;

function runCounter(){

if(counterStarted) return;

counterStarted=true;

counters.forEach(counter=>{

const target=parseInt(counter.innerText.replace(/\D/g,""));

const suffix=counter.innerText.replace(/[0-9]/g,"");

let count=0;

const speed=Math.max(1,Math.floor(target/80));

const update=()=>{

count+=speed;

if(count>=target){

counter.innerText=target+suffix;

return;

}

counter.innerText=count+suffix;

requestAnimationFrame(update);

};

update();

});

}

window.addEventListener("scroll",()=>{

const stats=document.querySelector(".hero-stats");

if(!stats) return;

const top=stats.getBoundingClientRect().top;

if(top<window.innerHeight-100){

runCounter();

}

});

/* ==========================================
        CURSOR GLOW
========================================== */

const glow=document.createElement("div");

glow.className="cursor-glow";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});

/* ==========================================
            END
========================================== */

console.log("Velvet Roast Loaded Successfully");

/*==========================
WISHLIST
==========================*/

document.querySelectorAll(".wishlist-btn").forEach(btn=>{

btn.addEventListener("click",()=>{

btn.classList.toggle("active");

if(btn.classList.contains("active")){

btn.innerHTML="❤";

}else{

btn.innerHTML="♡";

}

});

});



/*==========================
CART COUNT
==========================*/
let cartCount=0;

const cart=document.querySelector(".nav-icons span:nth-child(2)");

const badge=document.createElement("span");

badge.className="cart-count";

badge.innerHTML="0";

cart.appendChild(badge);

document.querySelectorAll(".add-cart").forEach(btn=>{

btn.addEventListener("click",()=>{

cartCount++;

badge.innerHTML=cartCount;

alert("Added to Cart");

});

});
