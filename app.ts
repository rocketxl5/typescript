const person: {
  name: string;
  age: number;
} = {
  name: 'Maxime Gaillard',
  age: 45,
  hobbies: ['Coding', 'Biking']
};

// Define an array of strings
let favoriteActivities: string[];
// Type error, 5 is number
favoriteActivities = ['Coding', 5];

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

let anyThing: any[];
anyThing = [0, 'Hello', false];

console.log(person.name);
