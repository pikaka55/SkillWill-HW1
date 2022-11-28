// Task 1 ...........

const groupOfPeople = [
  { name: "Temo", age: 25 },
  { name: "Lasha", age: 21 },
  { name: "Ana", age: 27 },
]
 function getTheYoungest (groupOfPeople){
 return Math.min(... groupOfPeople.map((obj) => obj.age));
 }
console.log(getTheYoungest(groupOfPeople))

// Task 2 ............

const user = {
    name: 'irakli',
    lastname:'zurashvili',
    age:16    
}

const cloneuser = {... user}
console.log(cloneuser);

// Task 3 ............
