// Task 1
let number = 0;
while (number < 10){
    number++;
    console.log(number)
}
//  // Task 2
let num = 1;
while (num <= 19){
    if (num % 2 == 0){
    num++;
    continue;  
}
num++;
console.log(num);
};
// Task 3
let seven = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i <= seven.length; i++){
    let sev = 7 * i;
    console.log(`${7} * ${i} = ${sev}`);
}
// Task 4
let arr = [1, 2, 3, 4, 5];
for (let a of arr){
    while (a.length <= 5){
        a++;
    }
    console.log(a);
}

// Task 5
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let n of array){
    if(n === 7){
        continue;
    } else{
       console.log(n)
    }
};

// let array = ['I love you', 'I am', 'Friend', 'School', 'Chrome ...'];
// for (let r of array){
//     if (r.length >= 5){
//         console.log(r);
//     }
// }




// let array = ['I love you', 'I am', 'Friend', 'School', 'Chrome ...'];
// console.log(array.join(', '));

// const cards = ['k1', 'k2', 'k3', 'k4', 'k5']
// cards.splice(2, 1);
// cards.push('k6')
// console.log(cards)

