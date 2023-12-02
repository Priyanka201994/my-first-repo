let arr=["https://slp-statics.astockcdn.net/static_assets/staging/24winter/home/curated-collections/card-2.jpg?width=580",
"https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2qJjdgp6qZhUJyT76DT9VfLDAZ7xZggdpsnoIb2GXorIbU1C01D83BpLyEwW7ycMo4Ag&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcOSlcDxXjcYTRaqOqG0TrMTsfXqBxuSYzwBT8jPBggzU9MTa2Gthage38i807HME8DHI&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuvIeYOAIV9IARPtfxhxuY8rjL_4M_Vov4qrPDDhtSebVEANJzqsYsIapozXqiOX3dgS0&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO1NM9gOw7Y8vPe3vjYntXh6qPMp05m9BNrx4J1LuC-aClkVm2oSVhWIUrD1rB760_Fk8&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj493DF7kAJA-oUCAkL1LWd-Su51NqH4A4aQ&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1drZ4GhTlFkgDOjEVSSCoaYNbbXM7vMI-JQ&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPwAFTWXeOjkuTKlifSYzZVeXDNVqKOE1Tkw&usqp=CAU",
"https://img.freepik.com/premium-vector/watercolor-perfume-bottle-with-flowers-vector-illustration-fashion-style_83277-11902.jpg",
"https://img.freepik.com/premium-photo/illustrate-glowing-fairy-flutters-gracefully-among-stars-animated-photo_1006514-10889.jpg?size=338&ext=jpg&ga=GA1.1.1826414947.1699747200&semt=sph",
"https://img.freepik.com/photos-premium/illustration-lutin-enchanteur_905683-134160.jpg?size=338&ext=jpg&ga=GA1.1.1413502914.1696636800&semt=sph",
"https://png.pngtree.com/png-vector/20220127/ourmid/pngtree-flying-pixy-fairy-shiny-artworks-pink-vector-png-image_15784724.jpg",
"https://img.freepik.com/premium-photo/beautiful-blue-cottagecore-victorian-house-clipart-illustration_962764-26157.jpg",
"https://img.freepik.com/premium-photo/drawing-camping-woods-clear-lake_738906-2137.jpg?w=2000",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXybA4aIiMnWZRSJ7QasITsByY4SjdYYQtlLW_dPHtv8fwbPwLw446SrTfN0QPSRCJZS0&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl4pcAqq-r29C4A_LD6p6PXmcXUinqu_PZ6dfYFwDa_2-TZjCLd_SgHvLx9CUcz2kiZ74&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQjaP8POEQgnvkkd6GhB8azxSCqfD09i0i0A&usqp=CAU",
"https://img.freepik.com/premium-photo/watercolor-scenery-with-red-cherry-trees-rocks_899449-19355.jpg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDiA7Ij08p-jpCRRceZyQD2BE_wJZmOvRc5wkx6gKp53tEhy1bShfVZbVWWeGxopmQ49c&usqp=CAU"]
let image=document.querySelector("img")
let prev=document.getElementById("prev")
let next=document.getElementById("next")
image.setAttribute('src',arr[0])
let currentImage=0
let id;
prev.addEventListener('click',function(){
    currentImage-=1
    if (currentImage<0)
    {
        currentImage=arr.length-1
    }
    image.setAttribute('src',arr[currentImage])
})
next.addEventListener('click',function(){
    currentImage+=1
    if (currentImage>arr.length-1)
    {
        currentImage=0
    }
    image.setAttribute('src',arr[currentImage])
})
function start()
{
        id=setInterval(()=>{
            image.setAttribute('src',arr[currentImage])
            currentImage+=1
        if (currentImage<0)
        {
            currentImage=arr.length-1
        }
        if (currentImage>arr.length-1)
        {
            currentImage=0
        }

        },1000)
}
function stop(){
    clearInterval(id)
}


