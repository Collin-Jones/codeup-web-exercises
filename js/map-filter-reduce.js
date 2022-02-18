const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

const threeLanguages = users.filter(user => user.languages.length >= 3);
console.log(threeLanguages);

const email = users.map(user => user.email);
console.log(email)

const totalYears = users.reduce((total, user) =>{
    return total + user.yearsOfExperience
});
console.log(totalYears)

const yearsOnAverage = totalYears / users.length;
console.log(yearsOnAverage)

const emailLength = users.reduce((longest, user) => {
    return user.email.length > longest.length ? user.email : longest;
});
console.log(emailLength);

const stringNames = users.reduce((names, user) => {
    if (names !== ''){
        names += ', ';
    }
    return names + user.name;
});
console.log(stringNames)