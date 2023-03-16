const person = 
[
    {
    id: "640e0d88775292c4dbc2be36",
    isActive: false,
    age: 38,
    eyeColor: "green",
    name: "Madge Burt",
    gender: "female",
    favoriteFruit: "strawberry"
    },
    {
    id: "640e0d886d7cd747ddb2001e",
    isActive: false,
    age: 23,
    eyeColor: "green",
    name: "Jami Aguirre",
    gender: "female",
    favoriteFruit: "strawberry"
    },
    {
    id: "640e0d88e2ac1c87e3d796e1",
    isActive: false,
    age: 26,
    eyeColor: "blue",
    name: "Hollie Howard",
    gender: "female",
    favoriteFruit: "apple"
    },
    {
    id: "640e0d88ce018d992cbe68f1",
    isActive: false,
    age: 29,
    eyeColor: "brown",
    name: "Estela Roth",
    gender: "female",
    favoriteFruit: "banana"
    },
    {
    id: "640e0d881f7b4750ed44552f",
    isActive: true,
    age: 35,
    eyeColor: "green",
    name: "Alisa Langley",
    gender: "female",
    favoriteFruit: "strawberry"
    },
    {
    id: "640e0d8807b8ed6f5a403d05",
    isActive: false,
    age: 34,
    eyeColor: "brown",
    name: "Courtney Koch",
    gender: "female",
    favoriteFruit: "apple"
    },
    {
    id: "640e0d88cb57001e727a3955",
    isActive: true,
    age: 40,
    eyeColor: "brown",
    name: "Staci Gallegos",
    gender: "female",
    favoriteFruit: "strawberry"
    },
    {
    id: "640e0d882e4ee7e3331136ae",
    isActive: true,
    age: 29,
    eyeColor: "blue",
    name: "Mccormick Burton",
    gender: "male",
    favoriteFruit: "banana"
    },
    {
    id: "640e0d8892e1f33be2dcae86",
    isActive: false,
    age: 38,
    eyeColor: "brown",
    name: "Amber Travis",
    gender: "female",
    favoriteFruit: "strawberry"
    }
]
          // 1) print person yang suka buah apple dan warna mata nya biru 

console.log("Ini No.1 person yang suka buah apple dan warna mata nya biru ")
const tugas1 = person.filter(oneFunction);

function oneFunction(value){
    if(value.favoriteFruit === "apple" && value.eyeColor === "blue") {
        return value
    }
}
console.log(tugas1)



          // 2) print berapa person yang age nya diatas 30 

console.log("Ini No.2 berapa person yang age nya diatas 30 ")
const tugas2 = person.filter(twoFunction);

function twoFunction(value){
    if(value.age > 30) {
        return value
    }
}
console.log(tugas2)




           // 3) print person yang isActive true and  gender nya female 

console.log("Ini No.3 person yang isActive true and  gender nya female")
const tugas3 = person.filter(threeFunction);

function threeFunction(value){
    if(value.isActive === true && value.gender === "female") {
        return value
    }
}
console.log(tugas3)




        // 4) print yang age nya diatas 30 atau dibawah 25 dan eyeColor nya blue

console.log("Ini No.4 person age nya diatas 30 atau dibawah 25 dan eyeColor nya blue")
const tugas4 = person.filter(fourFunction);

function fourFunction(value){
    if(value.age > 30 < 25  && value.eyeColor === "blue") {
        return value
    }
}
console.log(tugas4)




        // 5) print person yang mengandung huruf W di name nya 

console.log("Ini No.5 person yang mengandung huruf W di name nya ")
const tugas5 = person.filter(fiveFunction);

function fiveFunction(value){
    if(value.name.includes(`w`,[0]) == true) {
        return value
    }
}
console.log(tugas5)




        // 6) print person isActive false dan gender nya male dan age nya diatas 25 

console.log("Ini No.6 person isActive false dan gender nya male dan age nya diatas 25 ")
const tugas6 = person.filter(sixFunction);

function sixFunction(value){
    if(value.isActive === false && value.gender === "male" && value.age > 25) {
        return value
    }else {
        console.log("tidak ada data")
    }
}

console.log(tugas6)




        // 7) print person age nya dibawah 30 atau eyeColor brown dan favoritFruit nya banana 

console.log("Ini No.7 person age nya dibawah 30 atau eyeColor brown dan favoritFruit nya banana ")
const tugas7 = person.filter(sevenFunction);

function sevenFunction(value){
    if(value.age < 30  && value.eyeColor === "brown" && value.favoriteFruit === "banana") {
        return value
    }
}
console.log(tugas7)




        // 8) print person gender male 

console.log("Ini No.8 person gender male ")
const tugas8 = person.filter(eightFunction);

function eightFunction(value){
    if(value.gender === "male") {
        return value
    }
}
console.log(tugas8)



        // 9) print person eyeColor Blue 

console.log("Ini No.9 person eyeColor Blue ")
const tugas9 = person.filter(nineFunction);

function nineFunction(value){
    if(value.eyeColor === "blue") {
        return value
    }
}
console.log(tugas9)




        //  10) print person age diatas 30


console.log("Ini no.10 person age diatas 30")
const tugas10 = person.filter(tenFunction);

function tenFunction(value){
    if(value.age > 30 ) {
        return value
    }
}
console.log(tugas10)
