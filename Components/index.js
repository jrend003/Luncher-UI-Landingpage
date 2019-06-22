const btn =document.querySelector('button')

btn.addEventListener('dblclick', function(event) {
console.log("dblclick")
})

const nav =document.querySelector('nav')

nav.addEventListener('click', function(event) {
console.log("click")
})

const navBar= ['About', 'Sign Up', 'Sign In', 'Donate'];

const printNavBar= navBar.map(navLinks=>{
    console.log(navLinks);
});