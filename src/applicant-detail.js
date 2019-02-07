const json = window.localStorage.getItem('applicants');

let applicants = null;

if(json) {
    applicants = JSON.parse(json);
}
else {
    window.location = './';
}

//create object and pass it search param
const searchParams = new URLSearchParams(window.location.search);
//utilize get method from object to find the search param and value
const name = searchParams.get('name');
console.log(name);
for(let index = 0; index < applicants.length; index++) {
    const currentApplicant = applicants[index]; 
    const fullName = currentApplicant.firstName + ' ' + currentApplicant.lastName;
    console.log('full name:', fullName);
    if(fullName === name) {
        applicants = currentApplicant;
        break;
    }
    console.log(applicants);
}


const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const tvShow = document.getElementById('tv-show');
const ability = document.getElementById('ability');



firstName.textContent = applicants.firstName;
lastName.textContent = applicants.lastName;
tvShow.textContent = applicants.tvShow;
ability.textContent = applicants.ability;