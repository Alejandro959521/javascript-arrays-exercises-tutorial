let parkingState = [
  [1, 0, 1, 1],
  [0, 0, 0, 2],
  [1, 1, 2, 1],
  [2, 1, 1, 1]
]

// Your code here

const getParkingLotState = (value)=>{

let state = {
  occupiedSlots:0,
  totalSlots:0,
  availableSlots:0
}

        for (let x=0; x<value.length ;x++){
          
                 
          for(let y of value[x]){
              if (y == 1) { 
                state["occupiedSlots"]+=1 
              state["totalSlots"]+=1}

              else if (y == 2) {
                state["availableSlots"]+=1 
                state["totalSlots"]+=1}
          }
        }
return state
}



console.log(getParkingLotState(parkingState))
