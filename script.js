// function whatMeallsIT(hour){
//         if (hour >= 6 && hour <= 10){
//         console.log("You should eat breakfast");
// } else if (hour >= 10 && hour <= 16){
//         console.log("You should eat lunch");
// } else {console.log ("Dinner time!")
// }
// } whatMeallsIT(12);

function  findShortestWord(array){
    let shortestWord = array[0];
    for (let i = 0; i < array.length; i++){
        if (shortestWord.length > array[i].length){
            shortestWord = array[i];
        }
    }
    return shortestWord;
}
console.log(findShortestWord(["Deoxyribonucleic", "Cat", "Goku", "Lazers", "Blazers"]));

const celebrities = [
    {name: "Beyonce", profession: "singer", age: 38},
    {name: "Mae Jemison", profession: "Astronaut", age: 63},
    {name: "Patrick Stewart", profession: "Actor", age: 79},
    {name: "Greta Thunberg", profession: "Activist", age: 15},
]

function getPersonInfo(name){
    for (let c of celebrities){
        if (c.name === name){
            return c;
        }
    }
} 
console.log(getPersonInfo("Beyonce"));

function addNewPerson(array, name, profession, age){
        let newPerson = {name: name, profession: profession, age: age};
            array.push(newPerson);
}
addNewPerson (celebrities, "Bruce Willis", "Actor", 65);
console.log(celebrities);

function deletePerson(array, name){
    celebrities.splice(2,1)
} console.log(celebrities);