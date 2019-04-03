//a
class Retangle{

    constructor(height = 1, width= 2){
        this.height = height
        this.width = width  
        this._color = "#FFFFFF"  
        }

        get height(){
            return this._height

        }
        get width(){
            return this._width
        }

        set height(value){
            this._height = value
        }
        set width(value){
            this._width = value
        }

        get color(){
            this._color 
        }
     

        getArea() {
            return this._width * this._height
        }

 
        getPerimeter() {
            return 2 * this._width + 2 * this._height
        }
        
    }
   

    const newRectangle = new Retangle(10, 5)
    const newRectangle2 = new newRectangle()
    

    console.log(newRectangle.width)
    console.log(newRectangle.height)
    console.log(newRectangle.color)
   console.log( newRectangle.getArea())
   console.log(newRectangle.getPerimeter())

   console.log(newRectangle2.width)
   console.log(newRectangle2.height)
   console.log(newRectangle2.color)
   console.log(newRectangle2.getArea())
   console.log(newRectangle2.getPerimeter())