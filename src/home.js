function loadHome() {
    const container = document.querySelector('.container');

    const slogan = document.createElement('h2');
    slogan.setAttribute('id', 'slogan');
    slogan.textContent = 'Where every bite is a sweet symphony!';

    const restaurantDescription = document.createElement('p');
    restaurantDescription.setAttribute('id', 'restaurant-description');
    restaurantDescription.textContent = "Welcome to Scoopful Delights, a charming haven for ice cream aficionados seeking a delectable escape into frozen wonderland. Nestled in the heart of the city, we craft tiny batches of frozen joy that pack an explosion of flavor in every bite. Our passion for the perfect scoop drives us to create small, but undeniably mouthwatering creations that dance on your taste buds.";

    const orderTodayText = document.createElement('p');
    orderTodayText.classList.add('call-to-action');
    orderTodayText.textContent = 'Order Today!';

    container.appendChild(slogan);
    container.appendChild(restaurantDescription);
    container.appendChild(orderTodayText);
}

export default loadHome;