// Hamburger = document.querySelector('.Hamburger')
// Navbar = document.querySelector('.Navbar')
// Navbarlist = document.querySelector('.Navbar-list')

// Hamburger.addEventListener('click', ()=>{
//     Navbarlist.classList.toggle('v-class-resp')
//     Navbar.classList.toggle('H-Nav-resp')
// }

// --------------------Sticky Navbar Start------------------- //

window.onscroll = function() {ToggleNavbarStickness()}

var Navbar = document.querySelector(".Navbar")

var sticky = Navbar.offsetTop;

function ToggleNavbarStickness() {
    if (window.pageYOffset >= sticky) {
        Navbar.classList.add("sticky")
    } else {
        Navbar.classList.remove("sticky")
    }
}

// --------------------Sticky Navbar End------------------- //
// -------------------Hamburger Menu Start----------------- //
const mainMenu = document.querySelector('.RightNavbar');
const closeMenu = document.querySelector('.CloseMenu');
const openMenu = document.querySelector('.OpenMenu');
// const menu_items = document.querySelectorAll('.Navbar .RightNavbar li a');




openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

// menu_items.forEach(item => {
//     item.addEventListener('click',function(){
//         close();
//     })
// })

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}