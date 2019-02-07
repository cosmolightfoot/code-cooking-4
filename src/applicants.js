const jsonString = window.localStorage.getItem('applicants');
const tBodyNode = document.getElementById('applicants');
let applicants = [];

if(jsonString) {
    applicants = JSON.parse(jsonString);
}

for(let i = 0; i < applicants.length; i++) {
    const applicant = applicants[i];
    
    const tableRow = document.createElement('tr');
    
    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = applicant.firstName;
    tableRow.appendChild(firstNameCell);
    
    const lastNameCell = document.createElement('td');
    lastNameCell.textContent = applicant.lastName;
    tableRow.appendChild(lastNameCell);
    
    tBodyNode.appendChild(tableRow);
}