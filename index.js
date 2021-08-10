// Add your Circle class 
const pi = Math.PI;

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get diameter() {
        return this.radius * 2
    }

    get circumference() {
        return ( this.radius * 2 ) * pi
    }

    get area() {
        return pi * ( this.radius * this.radius )
    }

    set diameter( diameter ) {
        this.radius = diameter / 2
      }
    
    set circumference( circumference ) {
        this.radius = circumference / ( pi * 2 )
      }
    
}