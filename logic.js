// ==== Header Toogle START ==== //
let MenuBtn = document.getElementById('MenuBtn')
MenuBtn.addEventListener('click', ()=> {
    document.querySelector('body').classList.toggle('toggle-header')
    MenuBtn.classList.toggle('fa-xmark')
})

console.log('Hello World')
// ==== Header Toogle END ==== //

//==================================================//


// ==== Typing Animation START ==== //
let type = new Typed('.TypingAnimation',{
    strings: ['hold you best moment','capture you moment'],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000,
    loop: true, 
})
// ==== Typing Animation END ==== //


//==================================================//


// ==== Skill Bar Animation START ==== //
const progressBars = document.querySelectorAll('.inner-bar');
window.addEventListener('scroll', function(){
    progressBars.forEach(function (progressBars) {
        const rect = progressBars.getBoundingClientRect();
        if(rect.top < window.innerHeight && rect.bottom >= 0) {
            const width = progressBars.getAttribute('data-width');
            progressBars.style.width = width + '%'

        }
    });
});
// ==== Skill Bar Animation END ==== //

//==================================================//

// ==== Active Link State on scroll START ==== //
//Get all Nav Links
let navLinks = document.querySelectorAll('header nav ul li a')
let section = document.querySelectorAll('section')

window.addEventListener('scroll', ()=>{
    const scrollPos = window.scrollY +20
    section.forEach(section => {
        if (scrollPos > section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if(section.getAttribute('id') == link.getAttribute('herf').substring(1)) {
                    link.classList.add("active");
                }              
            });
        }
    });
});
// ==== Active Link State on scroll END ==== //  

//==================================================//
