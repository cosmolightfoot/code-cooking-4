const applicantOne = {
    lastName: 'Lannister',
    firstName: 'Tyrion',
    tvShow: 'Game of Thrones',
    ability: 'Drinks and Knows Things'
};

const applicantTwo = {
    firstName: 'Arya',
    lastName: 'Stark',
    tvShow: 'Game of Thrones',
    ability: 'Badass'
};

//instantiate array for applicants
let applicants = [];
//push first applicant into array
applicants.push(applicantOne);


const serializeOne = JSON.stringify(applicants);
window.localStorage.setItem('applicants', serializeOne);

const jsonString = window.localStorage.getItem('applicants');

if(jsonString) {
    applicants = JSON.parse(jsonString);
}
applicants.push(applicantTwo);
const serializeTwo = JSON.stringify(applicants);
window.localStorage.setItem('applicants', serializeTwo);