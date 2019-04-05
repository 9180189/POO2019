class Car{
        constructor(brand, plate, color, deposit, fuelType){
        this.brand = brand
        this.plate = plate
        this.color = color
        this.deposit = deposit
        this.fuelType= fuelType
        }
/**
 * 
 *Atualizar Cor
 */
updateCarColor(newColor){
    this.color = newColor
}
 /**
  * 
  * Atualizar Deposito
  */
updateCarDeposit(liters){
    this.deposit += liters
}

/**
 * 
 * Atualizar a distancia
 */
drive(kms){
    const liters = kms * 5/ 100
    this.deposit -= liters
}

}
const Car1 = new Car('Ford', '91-GH-15', 'verde', 40, 'Gasóleo')
const Car2 = new Car('Opel', '23-AB-23', 'branco', 50, 'Gasolina')
const Car3 = new Car ('Nissan', '12-CX-45', 'preto', 22, 'Gasóleo')

console.log(car1.color)
Car1.updateCarColor('rosa')
console.log(car1.color)