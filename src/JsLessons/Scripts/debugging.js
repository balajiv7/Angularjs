const people = [
    { name:"John", cool:true, country:"canada"},
    { name:"Scott", cool:true, country:"USA"},
    { name:"Jimmy", cool:false, country:"Rajapalayam"}
];

people.forEach((person, index) => {
    console.log(index,person.name, person.cool,person.country)
})

function certify (name) {
    console.log(`certifying Doctor degree for ${name}`);
    return `Dr. ${name}`;
}
//certify('Balaji');