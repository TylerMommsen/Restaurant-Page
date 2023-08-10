function loadMenu() {
    const container = document.querySelector('.container');

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');

    menuContainer.appendChild(createMenuItem('Chocolate'));
    menuContainer.appendChild(createMenuItem('Vanilla'));
    menuContainer.appendChild(createMenuItem('Blueberry'));
    menuContainer.appendChild(createMenuItem('Cherry'));
    menuContainer.appendChild(createMenuItem('Raspberry'));
    menuContainer.appendChild(createMenuItem('Pistachio'));
    menuContainer.appendChild(createMenuItem('Mango'));
    menuContainer.appendChild(createMenuItem('Coconut'));

    container.appendChild(menuContainer);
}

function createMenuItem(text) {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');
    const menuItemText = document.createElement('p');
    menuItemText.textContent = text;
    menuItem.appendChild(menuItemText);

    return menuItem;
}

export default loadMenu;