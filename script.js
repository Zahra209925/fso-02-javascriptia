console.log("--Muuttujat --")
const x = 1
let y =5
console.log(x, y)
y += 10
console.log(x, y) 
y = 'teksti'
console.log(x, y)  


console.log("-- Taulukot --")

const t = [1, -1, 3]; 

console.log(t.length); 
console.log(t[1]);    

t.push(5);            

console.log(t.length); 

t.forEach(value => {
  console.log(value); 
});

value => {
	console.log(value)
}



console.log("--Oliot --")

const object1 = {
	name: 'Arto Hellas',
	age: 35,
	education: 'Filosofian tohtori',
  };
  const object2 = {
	name: 'Full Stack -websovelluskehitys',
	level: 'aineopinto',
	size: 5,
  };
  const object3 = {
	name: {
	  first: 'Juha',
	  last: 'Tauriainen',
	},
	grades: [2, 3, 5, 3],
	department: 'TKTL',
  };
console.log(object1.name); 
const fieldName = 'age'
console.log(object1[fieldName])
object1.address = 'Tapiola'
object1['secret number'] = 12341
console.log(object2.level); 
console.log(object3.name.first); 
console.log(object3.grades[2]); 

object1.age = 36; 
object2.size += 1; 
object3.grades.push(4); 

console.log(object1.age); 
console.log(object2.size); 
console.log(object3.grades); 


console.log("--Funktiot --")
const sum = (p1, p2) => {
	console.log(p1); 
	console.log(p2); 
	return p1 + p2;
};
const result = sum(1, 5);
console.log(result);

const Square = p => {
	console.log(p);
	return p * p;
  };
  console.log(Square(4)); 

  const square = p => p * p;
  const T = [1, 2, 3];
const tSquared = t.map(p => p * p);
console.log(tSquared); // Tulostaa [1, 4, 9]
function product(a, b) {
	return a * b;
  }
  
  const Vastaus = product(2, 6);
  console.log(Vastaus); 
  const average = function(a, b) {
	return (a + b) / 2;
  };
  
  const vastaus = average(2, 5);
  console.log(vastaus); // Tulostaa 3.5