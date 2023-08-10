function loadContact() {
    const container = document.querySelector('.container');

    const contactInfo = document.createElement('div');
    contactInfo.classList.add('contact-info');

    const phoneNum = document.createElement('p');
    const email = document.createElement('p');
    phoneNum.textContent = '111-222-333';
    email.textContent = 'contact@scoopfuldelights.com';

    contactInfo.appendChild(phoneNum);
    contactInfo.appendChild(email);

    container.appendChild(contactInfo);
}

export default loadContact;