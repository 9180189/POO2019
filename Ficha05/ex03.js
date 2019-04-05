class Dice{

    constructor(){
        this.nFaces = 6
    }
// Propriedadede faceValue
get faceValue(){
    return this._faceValue
}

set faceValue(newValue){
    this._faceValue = newValue
    }
    getQuantityFaces(){
        return this.nFaces
        }
        
        roll() {
         const temp = Math.floor(Math.random() * 6 ) +1
         this.faceValue = temp 
        }
}




const myDice = new Dice(12)
myDice.roll()
console.log(myDice.faceValue)

const frequencyTable = [0,0,0,0,0,0]


for(let i = 0; i<100; i++){
    const myDice = new Dice()
    myDice.roll()
    frequencyTable[myDice.faceValue-1] += 1

}
console.table(frequencyTable)
const table = document.querySelector("table")
table.innerHTML += `
<tr>
    <td>Frequência</td>
    <td>${frequencyTable[0]}</td>
    <td>${frequencyTable[1]}</td>
    <td>${frequencyTable[2]}</td>
    <td>${frequencyTable[3]}</td>
    <td>${frequencyTable[4]}</td>
    <td>${frequencyTable[5]}</td>
</tr>
`