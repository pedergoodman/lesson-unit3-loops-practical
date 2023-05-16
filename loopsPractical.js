console.log( 'Loops Practical');

let index = 0
const max = 10


while ( index <  max ){
    console.log( 'in while loop. index:', index);
    index++;
}
console.log('index after while loop. index', index);

for( let i=0; i<max; i++ ){
    console.log( 'in for loop. i:', i );
}
//i is a local variable and can't be called outside of the for loop

let hand = ['Q', '3', 'J', '9', '6', 'K', 'A']

//for loop basic
for( let i=0; i<hand.length; i++){
    console.log( 'for loop', hand[i]);
    if ( hand[i] === '9'){
        console.log("match!!!");
    } // end match
} // end loop

console.log('\n--------\n ');

//for in
for(i in hand ){
    console.log( 'for in loop', hand[i]);
    if ( hand[i] === '9'){
    console.log("match!!!!!");
    } 
}

console.log('\n--------\n ');

//for of
for(card of hand){
    console.log('for of loop:', card );
    if( card === '9'){
        console.log("match!!!!!!!!!");
    }
}// end for of

console.log('\n--------\n ');

// break statement example
let x = 0;
let z = 0;
labelCancelLoops: while (true) {
  console.log("Outer loops:", x);
  x += 1;
  z = 1;
  while (true) {
    console.log("Inner loops:", z);
    z += 1;
    if (z === 10 && x === 10) {
      break labelCancelLoops;
    } else if (z === 10) {
      break;
    }
  }
}

console.log('\n--------\n ');

// continue statement example
let m = 0;
let n = 0;
while (m < 5) {
  m++;
  if (m === 3) {
    continue;
  }
  n += m;
  console.log(n);
}

console.log('\n--------\n ');

// continue with labeled statement
let irr = 0;
let j = 10;
checkiandj: while (i < 4) {
  console.log(i);
  irr += 1;
  checkj: while (j > 4) {
    console.log(j);
    j -= 1;
    if (j % 2 === 0) {
      continue checkj;
    }
    console.log(j, "is odd.");
  }
  console.log("i =", i);
  console.log("j =", j);
}