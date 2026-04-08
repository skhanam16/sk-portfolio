const navBtn = document.getElementById('nav__btn');
const closeBtn = document.getElementById('close__btn');
const sidebar = document.getElementById('sidebar');


navBtn.addEventListener('click', () => {
   sidebar.classList.toggle('show-sidebar');
});

closeBtn.addEventListener('click', () => {
    sidebar.classList.remove("show-sidebar");
})

