function Automobile(wheels, brake, engine)
{
    this.wheels=wheels
    this.brake=brake
    this.engine=engine
}
let obj=new Automobile(4,1,1)
let obj2=Object.create(obj)
obj2.model="Tata Nexon"
console.log(obj2)
