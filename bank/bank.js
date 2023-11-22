function BankAccount(accountNumber,name,type,balance)
{
    this.accountNumber=accountNumber
    this.name=name
    this.type=type
    this.balance=balance
    this.deposit=function(amount){
        this.balance+=amount
    } 
    this.withdrawal=function(amount){
        if(amount<=this.balance)
        {
            this.balance-=amount
        }
    }
    this.checkBalance=function(){
        console.log("balance is ",this.balance)
    }
    this.isActive=function(act)
    {
        if (act=="active")
        {
            return true
        }
        else 
        {
            return false
        }
    }


}
let b1=new BankAccount(1425263,"Priyanka","savings",20091)
let b2=new BankAccount(1236233,"Lipi","current",40000)
let b3=new BankAccount(1634732,"Papa","savings",200000)
let b4=new BankAccount(6831226,"Mummy","current",200000)
// console.log(b1)
// console.log(b2)
// console.log(b3)
// console.log(b4)
b1.deposit(4000)
b1.checkBalance()
let bool1=b1.isActive("active")
let bool2=b2.isActive("deactive")
let bool3=b3.isActive("active")
let bool4=b4.isActive("active")
function getTotalBalance()
{
    let totalBalance=0
    if (bool1===true)
    {
        totalBalance+=b1.balance
    }
    if (bool2===true)
    {
        totalBalance+=b2.balance
    }
    if (bool3===true)
    {
        totalBalance+=b3.balance
    }
    if (bool4===true)
    {
        totalBalance+=b4.balance
    }
    console.log(totalBalance)

}
getTotalBalance()