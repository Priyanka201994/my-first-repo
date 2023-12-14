let data=[]
fetch("https://reqres.in/api/users").then(function(response){
    return response.json()
}).then(function(finalData){
    console.log(finalData.data)
    data=finalData.data
    displayData(data)
})
function displayData(totalData)
{
    totalData.forEach(function(element){
        let div= document.createElement("div")
        let image=document.createElement("img")
        image.src=element.avatar

        let name=document.createElement("p")
        name.innerText=`${element.first_name} ${element.last_name}`

        let email=document.createElement("p")
        email.innerText=element.email

        div.append(image,name,email)
        container.append(div)
        
        
    });
}

