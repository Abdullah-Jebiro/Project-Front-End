/// <reference path="./player.ts" />
/// <reference path="./2.ts" />

console.log('start');

function postScore(score:string | undefined = '0' , playerName:string | undefined ='Game player'){
    let element : HTMLElement=document.getElementById('scorePlayer')!;
    element.innerHTML= `${playerName} you have get a score ${score}`;

}

function getInputValue(id:string):string | undefined {
    let element:HTMLInputElement=<HTMLInputElement>document.getElementById(id);
    if (element.value == '')
        return undefined
    else
        return element.value;
}


document.getElementById('startGame').addEventListener('click',() =>{
    postScore(getInputValue('factor') ,getInputValue('playername'));
})


let p:player=new player();
p.name="Abdullah";
console.log(p.formatName());


let myNumber=[50,60,70,80];
let newNumber=myNumber.map((element ,index,array)=> element+index).filter(element=>element%2==0);
console.error(newNumber);
let logger:(Value:string)=>void;
let loggerMessage=(message:string)=>console.log(message);
function loggerError(message:string){
    console.error(message);
}
logger=loggerMessage
logger=loggerError
logger(newNumber.join(','));

interface Employee {
    name:string,
    title:string
}

interface Manager extends Employee{
    numOfTeamMember:number;
    info:(object:Employee)=>void
};

let Ali = {
    name:'Abdullah',
    title:'Web Developer',
    age:22
}

let EmployeeAli:Employee=Ali;










