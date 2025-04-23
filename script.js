const elem1=document.querySelector("body");
elem1.addEventListener("mousemove",(eve)=>{
    const xpos=eve.offsetX;
    const ypos=eve.offsetY;
    const heart=document.createElement("span");
    const size=Math.random()*100;
    heart.style.width=size+"px";
    heart.style.height=size+"px";
    heart.style.left=xpos+"px";
    heart.style.top=ypos+"px";
    elem1.appendChild(heart);
    setTimeout(()=>{
        heart.remove();
    },3000)
});