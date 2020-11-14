/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: _put repo URL here_
   Web app: _put project's github pages URL here_
   */

// ======== OBJECTS DEFINITIONS ========
// Define your objects here

const dog = {
    species: 'dog',
    name: 'Spike',
    gender: 'male',
    legs: 4,
    hands: 0,
    saying: 'woof-woof',
    friends: ['Dolf', 'Roman', 'Mariia']
}

const cat = {
    species: 'cat',
    name: 'Dolf',
    gender: 'male',
    legs: 4,
    hands: 0,
    saying: 'meow-meow',
    friends: ['Anne Hathaway']
}

const man = {
    species: 'man',
    name: 'Roman',
    gender: 'male',
    legs: 2,
    hands: 2,
    saying: 'Hello!',
    friends: ['Dolf', 'Spike', 'Mariia']
}

const woman = {
    species: 'woman',
    name: 'Mariia',
    gender: 'female',
    legs: 2,
    hands: 2,
    saying: 'Hi!',
    friends: ['Dolf', 'Spike', 'Roman']
}

const catWoman = {
    species: 'cat-woman',
    name: 'Anne Hathaway',
    gender: 'female',
    legs: 2,
    hands: 2,
    saying: cat.saying,
    friends: ['Dolf', 'Spike']
}

const inhabitants = [dog, cat, man, woman, catWoman]

console.log(inhabitants);

for(let i = 0; i < inhabitants.length; i++) {
    print(`${inhabitants[i].species}; ${inhabitants[i].name}; ${inhabitants[i].gender}; ${inhabitants[i].legs}; ${inhabitants[i].hands}; ${inhabitants[i].saying}; ${inhabitants[i].friends.map(item => item)}.`);
}

// ======== OUTPUT ========
/* Use print(message) for output.
   Default tag for message is <pre>. Use print(message,'div') to change containing element tag.

   Message can contain HTML markup. You may also tweak index.html and/or styles.css.
   However, please, REFRAIN from improving visuals at least until your code is reviewed
   so code reviewers might focus on a single file that is index.js.
   */

/* Print examples:
   print('ABC');
   print('<strong>ABC</strong>');
   print('<strong>ABC</strong>', 'div');

   print('human; John; male; 2; 2; Hello world!; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny', 'div');
   */


