'use strict'


window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


// connecting on Whatsapp


'use strict';


let sendwhatsapp = () => {
    const phoneNumber = '+2347048839991';
    let name = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let number = document.getElementById("number").value;
    let message = document.getElementById("textarea").value;


    if (!name || !lname || !email || !number) {
        alert("Please fill all the required fields");

        return;
    };



    let encodeDifferentCharacter = `Hello Roslaan,\n\n*Name:* ${name}\n*Last Name:* ${lname}\n*Email:* ${email}\n*Phone Number:* ${number}\n\n*Message:* ${message}\n`;

    alert(`Name: ${name}\nLast Name: ${lname}\nEmail: ${email}\nPhone Number: ${number}\nMessage: ${message}`);


    encodeDifferentCharacter = encodeURIComponent(encodeDifferentCharacter);

    let url = "https://wa.me/" + phoneNumber + "?text=" + encodeDifferentCharacter;

    window.open(url, '_blank').focus();
};

