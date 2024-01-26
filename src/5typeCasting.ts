// we already know that type casting means manually converting value from one type to another
// in some situation typescript don't know which type of value it is 
const p = document.querySelector('p');
// here typescript know p is of type HTMLParagraphElement
const input = document.getElementById('inputEle');
// here ts don't know which type of element it is. its konw its HTMLElement
// tht's why it don't allow
// input.value = 10;

// to solve this problem we have to use type casting

// const input2 = <HTMLInputElement>document.getElementById('inputEle');
const input2 = document.getElementById('inputEle') as HTMLInputElement;

if (input2) {
    input2.value = '20';
}