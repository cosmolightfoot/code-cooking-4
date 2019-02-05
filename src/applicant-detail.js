const json = window.localStorage.getItem('applicant');
const hydrate = JSON.parse(json);

const tvShowNode = document.getElementById('tv-show');
const abilityNode = document.getElementById('ability');
const lastNameNode = document.getElementById('last-name');
console.log(lastNameNode);
console.log(hydrate.lastName);
tvShowNode.textContent = hydrate.tvShow;
abilityNode.textContent = hydrate.ability;
lastNameNode.textContent = hydrate.lastName;