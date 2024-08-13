function greet(name){
  console.log(name + ' ' + this.letter);
}

var person1 = { letter : 'dhilip' };

greet.call(person1,'Hi'); // Hi dhilip
greet.apply(person1,['Hi']); // Hi dhilip

const letterperson = greet.bind(person1);

letterperson("Hi"); //Hi dhilip


/////shallow copy vs deep copy
//shallow copy
var a = {name: 'dhilip'};

var b = a;

b.name = "kumar";

console.log(a); //kumar

//deep copy

var a = {name: 'dhilip'};

var b = {...a};

b.name = "kumar";

console.log(a); //dhilip
