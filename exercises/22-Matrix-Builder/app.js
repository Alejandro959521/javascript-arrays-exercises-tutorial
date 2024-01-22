// Your code here

let matrixBuilder = (value)=>{

    
    

    colum=[]

    for (let x=0; x<value; x++) {
        row=[]
            
            for (let y=0; y<value; y++){

                    row.push(Math.floor(Math.random()*2))


            }
            colum.push(row)
    }

return colum
}

// Do not change anything from this line down
console.log(matrixBuilder(5))
