let myArray = [ 1, 0, 0, 0, 1, 0, 0, 0, 1, 1 ];

const ZerosToYahoos = (arr) => {
    let return_array = [];
    arr.forEach((item) => {
        if (item==0) return_array.push("Yahoo")
        else return_array.push(item)
        
            // magic goes inside these brackets
    });
    return return_array;
};

console.log(ZerosToYahoos(myArray));
