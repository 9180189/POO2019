class Car{
        constructor(brand, plate, color, deposit, fuelType){
        this.brand = brand
        this.plate = plate
        this.color = color
        this.deposito = deposit
        this.typeCombustível = fuelType
        }
setColor(newColor){
    this.color = newColor
}
refuel(liters){
    this.deposit += liters
}
drive(kms){
    const liters = kms * 5/ 100
    this.deposit -= liters
}
}
const Car1 = new Car('Ford', '91-GH-15', 'verde', 40, 'Gasóleo')
const Car2 = new Car('Opel', '23-AB-23', 'branco', 50, 'Gasolina')
const Car3 = new Car ('Nissan', '12-CX-45', 'preto', 22, 'Gasóleo')

