const toggleMenu = document.querySelector('.toggle-menu');
      const sideBar = document.querySelector('.sidebar');
      const menuIcon = document.querySelector('.toggle-menu i');

      toggleMenu.addEventListener('click', ()=>{
          sideBar.classList.toggle('show');
          toggleMenu.classList.toggle('margin');
          if(menuIcon.className == 'fas fa-bars'){
              menuIcon.className = 'fas fa-times';
            }
            else if(menuIcon.className == 'fas fa-times'){
                menuIcon.className = 'fas fa-bars';
          }
      });
