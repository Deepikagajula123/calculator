document.querySelectorAll('.num').forEach((ele) => {
    ele.addEventListener("click",()=>{
        document.querySelector(".input").value += ele.innerText;
    })
})
document.querySelector('.equal').addEventListener('click',()=>{
    let s=document.querySelector('input').value;
    let ans=eval(s);
    document.querySelector('input').value=ans;

})
document.querySelector('.bk').addEventListener('click',()=>{
    let s= document.querySelector('input').value;
    s=s.substring(0,s.length-1);
    document.querySelector('input').value=s;
})
document.querySelector('.ac').addEventListener('click',()=>{
    let s= document.querySelector('input').value="";
})
document.querySelectorAll('.num').forEach((ele) =>{
    ele.addEventListener("click",()=>{
        document.querySelector('.num').style.color='white';
})
    })
    document.querySelectorAll('.num').forEach((ele) =>{
        ele.addEventListener("click",()=>{
            ele.style.color='white';
    })
        })
    document.querySelectorAll('.num').forEach((ele) =>{
        ele.addEventListener("click",()=>{
            ele.style.backgroundColor='black';
            })
    })
    