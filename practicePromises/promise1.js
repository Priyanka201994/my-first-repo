let promise1=new Promise(function(resolve,reject){
resolve({name:"Priyanka",age:29})
})
promise1.then(function(res)
{
    console.log(res)
})