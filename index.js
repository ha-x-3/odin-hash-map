import HashMap from "./hashMap.js";
import HashSet from "./hashSet.js";

const test = HashMap();
test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');
test.set('moon', 'silver');

console.log(test.length());
test.display();

//Set - Overwrite/Update
test.set('elephant', 'small');
test.set('kite', 'red');

console.log(test.length());
test.display();

const test2 = HashSet();
test2.set('apple');
test2.set('banana');
test2.set('carrot');
test2.set('dog');
test2.set('elephant');
test2.set('frog');
test2.set('grape');
test2.set('hat');
test2.set('ice cream');
test2.set('jacket');
test2.set('kite');
test2.set('lion');

console.log(test2.length());
test2.display();