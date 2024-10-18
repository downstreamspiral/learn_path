const sidebar = document.getElementById('sidebar-func');
const menu_button_work = document.getElementById('menu-open-close');

menu_button_work.addEventListener('click',()=>{
    
    sidebar.classList.toggle('sbar-closer-wrapper','sbar-closer-content');

});

