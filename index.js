const sidebar = document.getElementById('sidebar-func');
const menu_button_work = document.getElementById('menu-open-close');


    menu_button_work.addEventListener('click', () => {
        // Check if both classes are present
        if (sidebar.classList.contains('sbar-closer-wrapper') && sidebar.classList.contains('sbar-closer-content')) {
            // If both classes are present, remove them
            sidebar.classList.remove('sbar-closer-wrapper', 'sbar-closer-content');
        } else {
            // Otherwise, add both classes
            sidebar.classList.add('sbar-closer-wrapper', 'sbar-closer-content');
        }
    });
    
        

    

    
