
function romanToInt(s: string): number {
    return recursiveSolver(s, 0);
};

function recursiveSolver(s: string, v: number):number{
   if(s.length == 0) return v;
   if(s.length == 1) return v + calculateValue(s);
   let firstChar:string = s[0];
   let secondChar:string = s[1];
   let combined:number = checkSpecificCombo(firstChar+secondChar);
   if(combined !== 0){
    let remainder:string = s.slice(2);
    return recursiveSolver(remainder, combined + v);
   }else{
    let remainder:string = s.slice(1);
    return recursiveSolver(remainder, calculateValue(firstChar) + v);
   }
}

function checkSpecificCombo(combined:string):number{
    let value:number = 0;
    switch(combined){
        case 'IV':
        value = 4;
        break;
        case 'IX':
        value = 9;
        break;
        case 'XL':
        value = 40;
        break;
        case 'XC':
        value = 90;
        break;
        case 'CD':
        value = 400;
        break;
        case 'CM':
        value = 900;
        break;
        default:
        value = 0;
        break;
    }
    return value;
}
function calculateValue(s: string):number{
    let value:number = 0;
    switch(s){
        case 'I':
        value =  1;
        break;
        case 'V':
        value = 5;
        break;
        case 'X':
        value = 10;
        break;
        case 'L':
        value = 50;
        break;
        case 'C':
        value = 100;
        break;
        case 'D':
        value = 500;
        break;
        case 'M':
        value = 1000;
        break;
    }
    return value;
}
