//JAVASCRIPT.
//map --> maps array elements and transforms each value in array with given function. output will be array

const family = [
  {firstname: "dhilip",lastname:"kumar",age:26},
  {firstname: "jaya",lastname:"vani",age:25},
  {firstname: "papa",lastname:"kutty",age:-5}
];

//task to find full names with age.
family.map((x) => `${x.firstname} ${x.lastname} age:${x.age}`);
//filter --> filters array to specific condition provided in function.

const family = [
  {firstname: "dhilip",lastname:"kumar",age:26},
  {firstname: "jaya",lastname:"vani",age:25},
  {firstname: "papa",lastname:"kutty",age:-5}
];

// task to find age less than 26 and show firstname alone

family.filter((val) => val.age < 26).map(x => x.firstname)
//reduce --> manipulates array and gives a single output not a array.

const family = [
  {firstname: "dhilip",lastname:"kumar",age:26},
  {firstname: "jaya",lastname:"vani",age:25},
  {firstname: "papa",lastname:"kutty",age:-5}
];

//task to find age and their count.

//in reduce function val is like accumulator array and x is individual object

family.reduce((val,x) => {   
  if(val[x.age]) {     
    val[x.age] = ++val[x.age]   
  } 
  else { 
    val[x.age] = 1; 
  } 
  
  return val},{});

// task to find age less than 26 and show firstname alone
family.reduce((val,x) => { 
  if(x.age < 26) { 
    val.push(x.firstname)
  } 
  return val
},[])


