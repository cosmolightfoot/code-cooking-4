const tyrion = {
    tvShow: 'game of thrones',
    ability: 'drinks and knows things',
    lastName: 'Lannister'
};

const serialize = JSON.stringify(tyrion);
window.localStorage.setItem('applicant', serialize);
// window.localStorage.removeItem('applicant', serialize);
