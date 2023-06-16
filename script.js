//your code here
// script.js
let getUserButton = document.getElementById('getUser');
let photoContainer = document.getElementById('photo');
let nameContainer = document.getElementById('name');
let infoButtons = document.querySelectorAll('.info-button');
let additionalInfo = document.getElementById('additionalInfo');
let infoContent = document.getElementById('infoContent');
let data;


async function fetchRandomUser() {
  try {
    let res = await fetch('https://randomuser.me/api/');
    data = await res.json();

    
    let photoUrl = data.results[0].picture.large;
    let photo = document.createElement('img');
    photo.src = photoUrl;
    photoContainer.innerHTML = '';
    photoContainer.appendChild(photo);

    
    let fullName = data.results[0].name.first + ' ' + data.results[0].name.last;
    nameContainer.innerHTML = fullName;

    
    infoContent.innerHTML = '';
  } catch (error) {
    console.log(error);
  }
}


function handleInfoButtonClick(e) {
  let attr = e.target.getAttribute('data-attr');

 
  switch (attr) {
    case 'age':
      displayAge();
      break;
    case 'email':
      displayEmail();
      break;
    case 'phone':
      displayPhone();
      break;
    default:
      break;
  }
}


function displayAge() {
  let age = data.results[0].dob.age;
  let ageInfo = document.createElement('p');
  ageInfo.textContent = 'Age: ' + age;
  infoContent.innerHTML = '';
  infoContent.appendChild(ageInfo);
}


function displayEmail() {
  let email = data.results[0].email;
  let emailInfo = document.createElement('p');
  emailInfo.textContent = 'Email: ' + email;
  infoContent.innerHTML = '';
  infoContent.appendChild(emailInfo);
}


function displayPhone() {
  let phone = data.results[0].phone;
  let phoneInfo = document.createElement('p');
  phoneInfo.textContent = 'Phone: ' + phone;
  infoContent.innerHTML = '';
  infoContent.appendChild(phoneInfo);
}


infoButtons.forEach((button) => {
  button.addEventListener('click', handleInfoButtonClick);
});


getUserButton.addEventListener('click', fetchRandomUser);


fetchRandomUser();
