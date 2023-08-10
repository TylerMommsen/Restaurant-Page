import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

function createHeader() {
    const header = document.createElement('div');
    header.classList.add('header');

    const restaurantHeaderTitle = document.createElement('h1');
    restaurantHeaderTitle.classList.add('header-title');
    restaurantHeaderTitle.textContent = 'Scoopful Delights';

    const navButtons = document.createElement('ul');
    navButtons.classList.add('page-buttons-list');

    const homeButton = document.createElement('a');
    const menuButton = document.createElement('a');
    const contactButton = document.createElement('a');
    homeButton.classList.add('home-button');
    homeButton.textContent = 'Home';
    menuButton.textContent = 'Menu';
    contactButton.textContent = 'Contact';
    homeButton.setAttribute('href', '#');
    menuButton.setAttribute('href', '#');
    contactButton.setAttribute('href', '#');

    homeButton.addEventListener('click', (e) => {
        setActiveButton(homeButton);
        loadHome();
    })

    menuButton.addEventListener('click', (e) => {
        setActiveButton(menuButton);
        loadMenu();
    })

    contactButton.addEventListener('click', (e) => {
        setActiveButton(contactButton);
        loadContact();
    })

    navButtons.appendChild(homeButton);
    navButtons.appendChild(menuButton);
    navButtons.appendChild(contactButton);

    header.appendChild(restaurantHeaderTitle);
    header.appendChild(navButtons);

    return header;
}

function createMain() {
    const mainBody = document.createElement('div');
    mainBody.classList.add('main-body');

    const container = document.createElement('div');
    container.classList.add('container');

    mainBody.appendChild(container);

    return mainBody;
}

function createFooter() {
    const footer = document.createElement('div');
    footer.classList.add('footer');

    const footerText = document.createElement('p');
    footerText.textContent = 'Copyright © 2023 TylerMommsen';

    footer.appendChild(footerText);

    return footer;
}

function setActiveButton(button) {
    const buttons = document.querySelectorAll(".page-buttons-list");
  
    buttons.forEach(function(button) {
        button.classList.remove("active");
    });
    
    clearPage();
    button.classList.add("active");
}

function clearPage() {
    const container = document.querySelector('.container');

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function initializeWebsite() {
    const content = document.getElementById('content');

    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());

    setActiveButton(document.querySelector('.home-button'));
    loadHome();
}

export default initializeWebsite;