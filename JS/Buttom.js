const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropMenu = document.querySelector('.drop_menu');


toggleBtn.onclick = function (){
    dropMenu.classList.toggle("open");
    const isOpen = dropMenu.classList.contains("open")
 toggleBtnIcon.classList = isOpen
 ? 'bx bx-x'
 : 'bx bx-menu'
}