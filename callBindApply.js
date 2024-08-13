function greet(name){
  console.log(name + ' ' + this.letter);
}

var person1 = { letter : 'dhilip' };

greet.call(person1,'Hi'); // Hi dhilip
greet.apply(person1,['Hi']); // Hi dhilip

const letterperson = greet.bind(person1);

letterperson("Hi"); //Hi dhilip
