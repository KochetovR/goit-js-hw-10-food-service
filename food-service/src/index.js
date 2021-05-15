import './styles/styles.css';

import menu from './data/menu.json';

import menuTemplate from './template/menu.hbs';

const menuData = {
    menu: menu,
}

const menuHTML = menuTemplate(menuData)
document.querySelector('.js-menu').innerHTML = menuHTML;

const body = document.querySelector('body')
const checkBoxTheme = document.querySelector('.theme-switch__toggle')

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

  // const savedTheme = localStorage.getItem('theme')
  if(localStorage.getItem('theme')) {
    body.classList.add(localStorage.getItem('theme'))
  }

  if(body.classList.contains('dark-theme')) {
    checkBoxTheme.checked = true
    
    
  }
  if(!body.classList.contains('dark-theme')){
    body.classList.add('light-theme')
  }
  
  checkBoxTheme.addEventListener('input', () => {
    body.classList.replace('light-theme', 'dark-theme')
    localStorage.setItem('theme', Theme.DARK)

    if(!checkBoxTheme.checked) {
        body.classList.replace('dark-theme', 'light-theme')
        localStorage.setItem('theme', Theme.LIGHT)
    }
  })

  
  
