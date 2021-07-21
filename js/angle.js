const form = document.getElementById("form");
const angleOne = document.getElementById("angle1");
const angleTwo = document.getElementById("angle2");
const angleThree = document.getElementById("angle3");
const angleRes = document.getElementById("angle-res");
form.addEventListener('submit',(event) => {
    event.preventDefault();
    let a1 = parseInt(angleOne.value);
    let a2 = parseInt(angleTwo.value);
    let a3 = parseInt(angleThree.value);
    let sum = a1+a2+a3;
    if(sum === 180){
        angleRes.innerHTML = "Yuhu! these angles can make a triangle";
    }
    else{
        angleRes.innerHTML = "Oops! these angles cannot make a triangle"
    }
});