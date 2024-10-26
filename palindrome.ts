function isPalindrome(x: number): boolean {
    let stringified:string = x.toString();
    if(stringified.length == 1 || stringified.length == 0) return true;
    let pointer1:number = 0;
    let pointer2:number = stringified.length - 1;
    for(let i = pointer1; i < pointer2; i++){
        if(pointer1 == pointer2) break;
        if(stringified.at(pointer1) !== stringified.at(pointer2)) 
        return false;
        pointer1++;
        pointer2--;
    }
    return true;
};
