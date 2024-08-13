function greet(name){
  console.log(name + ' ' + this.letter);
}

var person1 = { letter : 'dhilip' };

greet.call(person1,'Hi'); //
