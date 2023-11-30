let text=document.getElementById("innerText")
let count=0
function begin(){
    
    id=setInterval(()=>{
        let hr=Math.floor(Number(count)/3600)
        let min=Math.floor((Number(count)%3600)/60)
        let sec=Math.floor((Number(count)%3600)%60)
        text.innerText=hr +":"+min+":" +sec
        count+=1
    },1000)

}
function pause(){
    clearInterval(id)

}

function reset(){
    pause()
    text.innerText=0
}