function Vehicle(brand, model, speed, fuelType)
{
    this.brand=brand
    this.model=model
    this.speed=speed
    this.fuelType=fuelType
}
Vehicle.prototype.accelerate=function(){
    this.speed+=1
}
Vehicle.prototype.brake=function(){
    this.speed-=1
}
Vehicle.prototype.refuel=function(){
    console.log("vehicle is refueling")
}
function Car(){
    
}