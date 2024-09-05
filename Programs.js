const People = [
    {
        firstName:'John',
        lastName:'Doe',
        email:'john@gmail.com',
        phone:'111-111-1111',
        age:30,
    },
    {
        firstName:'Jane',
        lastName:'poe',
        email:'jane@gmail.com',
        phone:'222-222-2222',
        age:25,
    },
    {
        firstName:'Bob',
        lastName:'Foe',
        email:'bob@gmail.com',
        phone:'333-333-3333',
        age:45,
    },
    {
      firstName:'sara',
      lastName:'soe',
      email:'sara@gmail.com',
      phone:'444-444-4444',
      aage:19,  
    },
    { 
        firstName:'Jose',
        lastName:'Koe',
        email:'jose@gmail.com',
        phone:'555-555-5555',
        age:23,
    },
];
const youngPeople = People.map((Person)=>({
    name:Person.firstName+ ' ' +Person.lastName,
    email:Person.email,
}));
console.log(youngPeople);

//ForEach Method.
const social = ['Twitter','Linkdin','Facebook','whatapp','Insagram'];
// const socialMidia = social.forEach(function(items){
//     console.log(items);
// });
const socialMidia = social.forEach((items)=>console.log(items));

const number = [2, 3, 4, 5, 6];

function getnumber(Num) {
  console.log(Num * 2);
}

number.forEach(getnumber);

//map Method.
const name = ['Jon', 'Starc','Warner','Smith','Dhoni'];
const getNames = name.map((person)=>{
    return person;
});
console.log(getNames);

const companies = [
    {Name:'Company One', category:'Retail', start:1978, end:1995},
    {Name:'Company Two', category:'Finance', start:1959, end:2000},
    {Name:'Company Three', category:'Pharma', start:1967, end:2005},
    {Name:'Company four', category:'Retail', start:1947, end:2004},
    {Name:'Company five', category:'Transport', start:1937, end:1999},
    {Name:'Company six', category:'Manufacturing', start:1944, end:2001},
]
const company = companies.map((item)=>{
    return {
        name:item.Name,
        category:item.category,
        length:item.end - item.start,
    }
});
console.log(company);

//Chellenge 2.
const numbers = [2, -30, 50, 20, -12, -9, 7]
const num = numbers.filter((positive)=> positive > 0)
.reduce((accumulater, currentvalue)=>{
    return accumulater + currentvalue;
})
console.log(num);

//chelenge 3.
const words = ['coder', 'programmer','developer'];
const capitalizedWords = words.map((letter)=>{
    return letter[0].toUpperCase()+letter.slice(1, letter.length);
});
console.log(capitalizedWords);