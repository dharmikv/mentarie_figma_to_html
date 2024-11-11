const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

document.addEventListener("DOMContentLoaded", () => {

    const video1 = document.getElementById("videoElement1");
    const playButton1 = document.querySelectorAll(".playButton1");

    function togglePlayPauseFirst() {
        if (video1.paused) {
            video1.play();
        } else {
            video1.pause();
        }
    }
    playButton1.forEach(button => button.addEventListener("click", togglePlayPauseFirst));

    const video2 = document.getElementById("videoElement2");
    const playButton2 = document.querySelectorAll(".playButton2");

    function togglePlayPauseSecond() {
        if (video2.paused) {
            video2.play();
        } else {
            video2.pause();
        }
    }
    playButton2.forEach(button => button.addEventListener("click", togglePlayPauseSecond));

    const video3 = document.getElementById("videoElement3");
    const playButton3 = document.querySelectorAll(".playButton3");

    function togglePlayPauseThird() {
        if (video3.paused) {
            video3.play();
        } else {
            video3.pause();
        }
    }
    playButton3.forEach(button => button.addEventListener("click", togglePlayPauseThird));

    // ======================================================= for counter values ==========================================================

    const counters = document.querySelectorAll(".counter");
    let isCounting = false;

    const countUp = (element, speed) => {
        const target = element.getAttribute("data-target");
        const suffix = element.getAttribute("data-suffix") || "";
        let count = 0;
        const increment = Math.ceil(target / (speed / 100));

        const updateCount = () => {
            count += increment;
            if (count < target) {
                element.textContent = count + suffix;
                setTimeout(updateCount, 100);
            } else {
                element.textContent = target + suffix;
            }
        };
        updateCount();
    };
        
    const onScroll = () => {
        if (window.scrollY >= 190 && !isCounting) {
            isCounting = true;
            countUp(counters[0], 1500);
            countUp(counters[1], 1500);
            countUp(counters[2], 1500);
            countUp(counters[3], 1500);
            window.removeEventListener('scroll', onScroll);
        }
    };

    window.addEventListener('scroll', onScroll);
});
  
  
// ============================================================ for header ============================================================



function HeaderScrollSticky() {
    const header = document.querySelector('header');

    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 50) {
        header.classList.add('bg-[#4646B6]/85');
        header.classList.add('shadow-md');
        header.classList.add('backdrop-blur-md');
        header.classList.remove('bg-transparent');
    } else {
        header.classList.remove('bg-[#4646B6]/85');
        header.classList.add('bg-transparent');
        header.classList.remove('backdrop-blur-md');
        header.classList.remove('shadow-md');
    }
}

window.onscroll = function() { 
    HeaderScrollSticky() 
};
window.onload = function() {
     HeaderScrollSticky() 
};
// ============================================================= GSAP =============================================================


// ----------------------------------------------------------- sidebar -----------------------------------------------------------

let close_btn = document.querySelector(".close_btn")
let sidebar = document.querySelector(".sidebar")
let sidebarLinks = document.querySelectorAll(".sidebar ul *")
let menu_btn = document.querySelector(".menu_btn")


let sidebar_timeline = gsap.timeline()

sidebar_timeline.to(sidebar, {
    right: "0",
    duration: 0.3,
});
sidebar_timeline.from(sidebarLinks,{
    x:50,
    opacity:0,
    stagger:0.05
})
sidebar_timeline.pause()

menu_btn.addEventListener("click",function(){
    sidebar_timeline.play()
})
close_btn.addEventListener("click",function(){
    sidebar_timeline.reverse()
})

// ----------------------------------------------------------- anchor link animation -----------------------------------------------------------


let anchor_links_green = document.querySelectorAll(".link-green a");

anchor_links_green.forEach(link => {
    const hover = gsap.timeline()
        hover.to(link, {
            color: "#0C0C1C", 
            duration: 0.5 
        },0)
        hover.to(link, { 
            borderBottomColor: "#0C0C1C", 
            duration: 0.5 
        }, 0);
        hover.pause()

    link.addEventListener("mouseenter", () => hover.play());
    link.addEventListener("mouseleave", () => hover.reverse());
});

let anchor_links_white = document.querySelectorAll(".link-white a");

anchor_links_white.forEach(link => {
    const hover = gsap.timeline()
        hover.to(link, {
            color: "#D5EE36", 
            duration: 0.5 
        },0)
        hover.to(link, { 
            borderBottomColor: "#D5EE36", 
            duration: 0.5 
        }, 0);
        hover.pause()

    link.addEventListener("mouseenter", () => hover.play());
    link.addEventListener("mouseleave", () => hover.reverse());
});


// ----------------------------------------------------------- header animation -----------------------------------------------------------

let header_logo = document.querySelector(".nav_logo")
let nav_links = document.querySelectorAll("nav ul li")
let nav_btn = document.querySelector("nav .btn-ylw")

let header_timeline = gsap.timeline()

header_timeline.from(header_logo,{
    y:20,
    opacity:0,
    delay:0.1
})
header_timeline.from(nav_links,{
    y:20,
    opacity:0,
    stagger:0.1
})
header_timeline.from(nav_btn,{
    opacity:0,
})

// ----------------------------------------------------------- hero section animation -----------------------------------------------------------

let banner_heading = document.querySelector(".banner-content h1")
let banner_text = document.querySelector(".banner-content p:first-child");

herosection_left_timeline = gsap.timeline()


herosection_left_timeline.from(banner_heading,{
    x:-70,
    duration:0.5,
    opacity:0
})
herosection_left_timeline.from(banner_text,{
    opacity:0,
    duration:0.4
})


herosection_right_timeline = gsap.timeline()

herosection_right_timeline.from(".gridimg",{
    opacity:0,
    duration:1.4,
    delay:0.2
})


gsap.utils.toArray(".fade-up").forEach((fadeElement) => {
    gsap.from(fadeElement, {
      y: -40,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: fadeElement,
        start: "top 80%", 
        end: "bottom top",
        toggleActions: "play none none reverse",
      },
    });
});

gsap.utils.toArray(".fade-in").forEach((fadeElement) => {
    gsap.from(fadeElement, {
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: fadeElement,
        start: "top 80%", 
        end: "bottom top",
        toggleActions: "play none none reverse",
      },
    });
});
  