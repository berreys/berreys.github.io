function submitForm() {
    var selectedName = document.getElementById("selectName").value;
    if(selectedName.length === 0){
        return;
    }
    window.location.href = "person.html?name=" + encodeURIComponent(selectedName);
}

const people = [
    {
        name: 'Sam',
        car: 'car 2,',
        leaving: '~5:30 PM',
        tent: 'Tent 2'
    },
    {
        name: 'Lydia',
        car: 'car 2,',
        leaving: '~5:30 PM',
        tent: 'Tent 2'
    },
    {
        name: 'Damien',
        car: 'car 2,',
        leaving: '~5:30 PM',
        tent: 'You said you would use a hammock but idk if you have one or not so lmk @ 617-401-9226 if you need one.'
    },
    {
        name: 'Chandler',
        car: 'car 2,',
        leaving: '~5:30 PM',
        tent: 'Your own hammock. If you don\'t have one, lmk @ 617-401-9226.'
    },
    {
        name: 'McKayla',
        car: 'car 2,',
        leaving: '~5:30 PM',
        tent: 'Tent 3'
    },
    {
        name: 'Jamie',
        car: 'car 1,',
        leaving: '8:00 AM',
        tent: 'Tent 3'
    },
    {
        name: 'Jamie\'s Boy Toy',
        car: 'car 1,',
        leaving: '8:00 AM',
        tent: 'Tent 4'
    },
    {
        name: 'Jamie\'s Friend',
        car: 'car 1,',
        leaving: '8:00 AM',
        tent: 'Tent 4'
    },
    {
        name: 'Hanna',
        car: 'car 1,',
        leaving: '8:00 AM',
        tent: 'Tent 1'
    },
    {
        name: 'Thomas',
        car: 'car 1,',
        leaving: '8:00 AM',
        tent: 'Tent 1'
    },
]

function getPersonObj(index) {
    return people[index];
}