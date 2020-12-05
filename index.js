/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: _put repo URL here_
   Web app: _put project's github pages URL here_
   */

// ======== OBJECTS DEFINITIONS ========
// Define your objects here

class Inhabitant {
    constructor ({ species, name, gender, legs, hands, saying, friends = [] }) {
        this.species = species
        this.name = name
        this.gender = gender
        this.legs = legs
        this.hands = hands
        this.saying = saying
        this.friends = friends
    }
}

class Animal extends Inhabitant {
    constructor ({ species, name, gender, saying, friends }) {
        super({ species, name, gender, legs: 4, hands: 0, saying, friends })
    }
}

class Dog extends Animal {
    constructor ({ name, gender, friends }) {
        super({ species: 'dog', name, gender, saying: 'woof-woof', friends })
    }
}

class Cat extends Animal {
    constructor ({ name, gender, friends }) {
        super({ species: 'cat', name, gender, saying: 'meow-meow', friends })
    }
}

class HomoSapiens extends Inhabitant {
    constructor ({ name, gender, saying, friends }) {
        super({ species: 'human', name, gender, legs: 2, hands: 2, saying, friends })
    }
}

class Woman extends HomoSapiens {
    constructor({ name, saying, friends }) {
        super({ name, gender: 'female', saying, friends })
    }
}

class Man extends HomoSapiens {
    constructor({ name, saying, friends }) {
        super({ name, gender: 'male', saying, friends })
    }
}

const dog = new Dog({ name: 'Spike', gender: 'male', friends: ['Dolf', 'Roman', 'Mariia'] })
const cat = new Cat({ name: 'Dolf', gender: 'male'})
const man = new Man({ name: 'Roman', saying: 'Hello!', friends: ['Dolf', 'Roman', 'Mariia'] })
const woman = new Woman({ name: 'Mariia', saying: 'Hi!', friends: ['Dolf', 'Roman', 'Mariia'] })

const inhabitants = [dog, cat, man, woman]

const introduceInhabitants = (inhabitants) => {
    const inhabitantValues = Object.values(inhabitants)
    const inhabitant = inhabitantValues.map(item => Array.isArray(item) ? item.map(nestedItem => nestedItem).join(', ') : item).join('; ')
    return inhabitant
}

inhabitants.forEach((item) => {
    print(introduceInhabitants(item))
})

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


