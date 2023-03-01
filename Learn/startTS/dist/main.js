"use strict";
class player {
    formatName() {
        return this.name.toUpperCase();
    }
}
let element = document.getElementById('y');
console.log(element.value);
console.log('start');
function postScore(score = '0', playerName = 'Game player') {
    let element = document.getElementById('scorePlayer');
    element.innerHTML = `${playerName} you have get a score ${score}`;
}
function getInputValue(id) {
    let element = document.getElementById(id);
    if (element.value == '')
        return undefined;
    else
        return element.value;
}
document.getElementById('startGame').addEventListener('click', () => {
    postScore(getInputValue('factor'), getInputValue('playername'));
});
let p = new player();
p.name = "Abdullah";
console.log(p.formatName());
let myNumber = [50, 60, 70, 80];
let newNumber = myNumber.map((element, index, array) => element + index).filter(element => element % 2 == 0);
console.error(newNumber);
let logger;
let loggerMessage = (message) => console.log(message);
function loggerError(message) {
    console.error(message);
}
logger = loggerMessage;
logger = loggerError;
logger(newNumber.join(','));
;
let Ali = {
    name: 'Abdullah',
    title: 'Web Developer',
    age: 22
};
let EmployeeAli = Ali;
//# sourceMappingURL=main.js.map