function Authors(name, birthYear,nationality)
{
    this.name=name
    this.birthYear=birthYear
    this.nationality=nationality
}
function Book(title, Authors, genre, price){
    this.title=title
    this.author=Authors.name
    this.genre=genre
    this.price=price
    this.getBookInfo=function()
    {
        console.log(this.title," ",this.author," ",this.genre," ",this.price)
    }
}
let a1=new Authors("Rudyard Kipling",1923,"American")
let a2=new Authors("Robert Hooke",1995,"Britain")
let b1=new Book("Road not taken",a1,"philosophical",200)
let b2=new Book("Roses",a2,"thriller",250)
b1.getBookInfo()
b2.getBookInfo()
