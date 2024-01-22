// Your code here
let lyricsGenerator = (value)=>{

    output= []
    cont=0
    for (let x of value){

        if (x==0) {
        output.push('Boom')
        cont=0}
        else if (x==1) {
    
            output.push('Drop the bass')
            cont+=1
             if (cont==3) {
                output.push('¡¡¡Break the bass!!!')
                cont=0
            }
    } 
    }

    return output.join(" ")

}

// Don't change anything below this line
console.log(lyricsGenerator([0,0,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,1,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,0]))
console.log(lyricsGenerator([1,0,1]))
console.log(lyricsGenerator([1,1,1]))
