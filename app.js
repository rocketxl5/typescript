var person = {
    name: 'Maxime Gaillard',
    age: 45,
    hobbies: ['Coding', 'Biking']
};
// Define an array of strings
var favoriteActivities;
// Type error, 5 is number
favoriteActivities = ['Coding', 5];
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
var anyThing;
anyThing = [0, 'Hello', false];
console.log(person.name);
