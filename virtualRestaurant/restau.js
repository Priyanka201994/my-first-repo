let arr=["https://media.istockphoto.com/id/938742222/photo/cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=D1z4xPCs-qQIZyUqRcHrnsJSJy_YbUD9udOrXpilNpI=",
"https://people.com/thmb/rkzuOIWafoVchyLmmkMFzR1WDiM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2)/mcdonalds-burger-041423-2-b645d0fbbf7f4dae82f5a70480d75367.jpg",
"https://img.freepik.com/free-photo/grilled-beef-hot-dog-with-ketchup-snack-generative-ai_188544-7829.jpg",
"https://www.recipetineats.com/wp-content/uploads/2022/09/Crispy-Fries_8.jpg?w=500&h=375&crop=1",
"https://recipes.net/wp-content/uploads/2023/05/andouille-sausage-breakfast-burrito-recipe_906557050785d550403c6fc8e9039da4.jpeg",
"https://i.ytimg.com/vi/HxBeuzAaz2s/maxresdefault.jpg"
]
let image=document.getElementById("images")
let order=0
let id
let orderNo=document.getElementById("orderNo")
function orderFood()
{
    
    let promise1=new Promise(function(resolve,reject){
        setTimeout(resolve,(Math.round(Math.random()*3))*1000)
    })
    console.log("i love food")
    promise1.then(()=>{
        console.log("Foodie")
        executeOrder()
    })
 console.log("restaurant")
 
}
function executeOrder(){
    let food=[]
    let count=0
    clearInterval(id)
    document.querySelectorAll('[type="checkbox"]').forEach(item=>{
        if(item.checked===true)
        {
            // image.setAttribute('src',arr[Number(item.value)])
            count+=1
            food.push(item.value)
        }
    })
    if (count==0)
    {
        order=order-1
        alert("Please choose your food")
    }
    order+=1
    orderNo.innerText="Order ID "+order
    console.log(food)
    let curr=0
    //image.setAttribute('src',arr[curr])
   
    id=setInterval(()=>{
        
        image.setAttribute('src',arr[(food[curr])])
        curr=(curr+1)%food.length
    },3000)
}
