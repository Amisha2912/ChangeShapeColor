const display=document.querySelector('#display');
const bg =document.querySelector('#show');
const changeColor=document.querySelector('#colors');
const changeShape=document.querySelector('#shapes');
const clipPaths = [
    "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",   // Diamond shape
    "circle(50% at 50% 50%)",                         // Circle at center
    "ellipse(25% 40% at 50% 50%)",                    // Ellipse at center
    "polygon(0% 0%, 100% 0%, 100% 100%, 0% 80%)",     // Trapezoid
    "polygon(0% 0%, 100% 0%, 100% 80%, 50% 100%, 0% 80%)", // Pentagonal shape
    "polygon(25% 0%, 75% 0%, 100% 100%, 0% 100%)",    // Parallelogram
    "inset(10% 20% 10% 20%)",                         // Rectangle with inset
    "polygon(0 0, 100% 0, 100% 100%, 0 90%)",         // Slanted rectangle
    "polygon(50% 0%, 100% 25%, 75% 100%, 25% 100%, 0% 25%)", // Star-like shape
    "polygon(10% 10%, 90% 10%, 100% 90%, 0% 90%)"  ,   // Trapezoid flipped vertically
    "polygon(0% 0%, 0% 100%, 25% 100%, 25% 25%, 75% 25%, 75% 75%, 25% 75%, 25% 100%, 100% 100%, 100% 0%)", //frames
    "polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%)" ,//decagon
    "polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%)"
  ];

window.addEventListener('load',()=>{
    bg.style.backgroundColor ="green";
    display.style.clipPath = "polygon(50% 0%, 100% 25%, 75% 100%, 25% 100%, 0% 25%)";
    display.style.backgroundColor = 'white'
});


function getColour(){
    const s='0123456789ABCDEF';
    let colorCode='#';
    for(let i=0;i<6;i++){
        let j =Math.floor(Math.random()*16);
        colorCode += s[j];
    }

    return colorCode;
}

changeColor.addEventListener('click',() =>{
    let color=getColour();
    bg.style.backgroundColor =color;
});



function getShape(){
    let j=Math.floor(Math.random()*clipPaths.length);
    let fetchShape=clipPaths[j];
    
    return fetchShape;
}

changeShape.addEventListener('click',()=>{
    let shapes=getShape();
    display.style.clipPath = shapes;
    display.style.backgroundColor = 'white'

})