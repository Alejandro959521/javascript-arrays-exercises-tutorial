let myArray = [43,23,6,87,43,1,4,6,3,67,8,3445,3,7,5435,63,346,3,456,734,6,34];

// Your code here

let findMax = (array)=>{

    let num = 0;

    for (x of array){

    if (x>num) num=x;    
    

    }
    return num;
}
console.log(findMax(myArray))