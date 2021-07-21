const form = document.getElementById("form");
const sideOne = document.getElementById("side1");
const sideTwo = document.getElementById("side2");
const hypoRes = document.getElementById("hypo-res");
form.addEventListener('submit',(event) => {
    event.preventDefault();
    let s1 = parseFloat(sideOne.value);
    let s2 = parseFloat(sideTwo.value);
    let s3 = Math.sqrt(((s1*s1) + (s2*s2)));
    hypoRes.innerHTML = `C = ${s3}`;
});``