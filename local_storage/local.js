let myForm=document.querySelector("form")
let naam=document.getElementById("name")
let age=document.getElementById("age")
let tb=document.querySelector("tbody")
myForm.addEventListener("submit",function(event){
    event.preventDefault()
    let obj={
        name:naam.value,
        age:age.value
    }
    localStorage.setItem("details",JSON.stringify(obj))
})
function displayData(){
    row=document.createElement('tr')
    td1=document.createElement('td')
    td2=document.createElement('td')
    let data=JSON.parse(localStorage.getItem("details"))
    td1.innerText=data.name
    td2.innerText=data.age
    row.append(td1,td2)
    tb.append(row)
}
