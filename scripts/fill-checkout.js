// ==UserScript==
// @name     Fill Checkout Form
// @version  1
// @grant    none
// @include https://*.bosmonster.localhost/*
// @description Fills the checkout form with dummy data
// ==/UserScript==

const button = document.createElement('button');
button.id = 'dummy-data';
button.style = `font-size: 10px;box-shadow: none;background: white;padding: 2px;border: 1px solid black;`;
button.innerText = '📋 Dummy Data';
button.addEventListener('click', fillData);

// Make a fake name function
function makeName() {
  const first = ['James', 'Robert', 'John', 'Michael', 'David', 'William', 'Richard', 'Joseph', 'Thomas', 'Charles', 'Christopher', 'Daniel', 'Matthew', 'Anthony', 'Mark', 'Donald', 'Steven', 'Paul', 'Andrew', 'Joshua', 'Kenneth', 'Kevin', 'Brian', 'George', 'Timothy', 'Ronald', 'Edward', 'Jason'];

  const last = ['Johnson', 'Williams', 'Brown', 'Jones', 'Miller', 'Davis', 'Garcia', 'Rodriguez', 'Wilson', 'Martinez', 'Anderson', 'Taylor', 'Thomas', 'Hernandez', 'Moore', 'Martin', 'Jackson', 'Thompson',];
  return `${first.at(Math.random() * first.length)} ${last.at(Math.random() * last.length)}`;
}



function fillData() {
  const name = makeName();
  document.querySelector('[name="email"]').value = `wesbos+${name.replace(' ','')}@gmail.com`;
  document.querySelector('[name="name"]').value = name;
  document.querySelector('[data-stripe="number"]').value = "4242 4242 4242 4242";
  document.querySelector('[data-stripe="cvc"]').value = "777";
  document.querySelector('[data-stripe="exp_month"]').value = "02";
  document.querySelector('[data-stripe="exp_year"]').value = "25";
  document.querySelector('[data-stripe="address_line1"]').value = "123 Fake Street";
  document.querySelector('[data-stripe="address_city"]').value = "Springfield";
  document.querySelector('[data-stripe="address_state"]').value = "NY";
  document.querySelector('[data-stripe="address_zip"]').value = "12345";
}

function insertButton() {
  // check if button is already in the dom
  if (document.querySelector('button#dummy-data')) return;
  // check if the form is loaded
  if (!document.querySelector('[name="email"]')) {
    setTimeout(insertButton, 1000); // try again in 1 second
  }
  // insert button
  const deets = document.querySelector('.deets');
  if(deets) deets.appendChild(button);
}

insertButton();
