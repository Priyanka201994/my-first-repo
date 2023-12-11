let arr=["https://media1.tenor.com/m/zecVkmevzcIAAAAC/please-wait.gif",
"https://betelgeusetech.com/wp-content/uploads/2021/06/phonepe-3-4b382985e916f2dbf064a395baa4cec2.png",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8j3iYWuD52ipum-hQRptT-GhZHTmfNzcwfQ&usqp=CAU"]
let image=document.getElementById("pic")
image.setAttribute('src',arr[0])
function check_content(){
    return false
}
let content_promise=new Promise(function(resolve,reject){
    let content=check_content()
    setTimeout(function(){
        if(content){
            resolve("transaction is successful")
        }
        else{
            reject("transaction failed")
        }
    },3000)
    
})
content_promise.then(function(value)
{
    console.log(value)
    image.setAttribute('src',arr[1])
})
content_promise.catch(function(value)
{
    console.log(value)
    image.setAttribute('src',arr[2])
})