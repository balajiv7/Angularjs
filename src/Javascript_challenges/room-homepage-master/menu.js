const menuToggle = document.getElementById('menuToggle');

menuToggle.addEventListener('click', () =>{
    menuToggle.classList.toggle('active');
    const nav = document.getElementById('navbar');
     nav.classList.toggle('active');
})  