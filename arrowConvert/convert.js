let str="abcdefghijklmnopqrstuvwxyz"
let s="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let conv=(ch)=>{
    for(let i=0;i<s.length;i++)
    {
        if(ch===s[i])
        {
            ch=str[i]
        }
    }
    return ch
}
let word="APPLe"
bag=""
let n=""
for(let i=0;i<word.length;i++)
{
    n = conv(word[i])
    bag+=n
}
console.log(bag)
var arr=["MA", "SA", "I", "SCH", "OOL"]
let a=[]
for(let k=0;k<arr.length;k++)
{
    let st=""
    let b=""
    for(let j=0;j<arr[k].length;j++)
    {
        st=conv(arr[k][j])
        b+=st
    }
    a.push(b)
}
console.log(a)
