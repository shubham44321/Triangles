const getValue = (radio) => {
  const method1 = document.getElementById("method1");
  const method2 = document.getElementById("method2");
  const method3 = document.getElementById("method3");
  if (radio === "method1") {
    method1.classList.remove("hidden");
    method2.classList.contains("hidden") ? "" : method2.classList.add("hidden");
    method3.classList.contains("hidden") ? "" : method3.classList.add("hidden");
  } else if (radio === "method2") {
    method2.classList.remove("hidden");
    method1.classList.contains("hidden") ? "" : method1.classList.add("hidden");
    method3.classList.contains("hidden") ? "" : method3.classList.add("hidden");
  } else if (radio === "method3") {
    method3.classList.remove("hidden");
    method1.classList.contains("hidden") ? "" : method1.classList.add("hidden");
    method2.classList.contains("hidden") ? "" : method2.classList.add("hidden");
  } else {
    return;
  }
};

const formM1 = document.getElementById("formM1");
const formM2 = document.getElementById("formM2");
const formM3 = document.getElementById("formM3");

formM1.addEventListener("submit", (event) => {
  event.preventDefault();
  let base = parseFloat(document.getElementById("base").value);
  let height = parseFloat(document.getElementById("height").value);
  let area = 0.5 * base * height;
  document.getElementById("method1-res").innerHTML = `Area = ${area}`;
});

formM2.addEventListener("submit", (event) => {
  event.preventDefault();
  let warningTxt = document.getElementById("warning-text");
  let a = parseFloat(document.getElementById("sa").value);
  let b = parseFloat(document.getElementById("sb").value);
  let c = parseFloat(document.getElementById("sc").value);
  if (a < b + c && b < a + c && c < b + a) {
    // warningTxt.classList.contains("hidden")
    //   ? ""
    //   : warningTxt.classList.add("hidden");
    let s = (a + b + c) / 2;
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    document.getElementById("method2-res").innerHTML = `Area = ${area}`;
  } else {
    // warningTxt.classList.remove("hidden");
    document.getElementById(
      "method2-res"
    ).innerHTML = `Area = <span class="overline">√s(s-a)(s-b)(s-c)`;
    document.getElementById("inp-div").style.paddingLeft = "10%";
    alert(
      "Enter valid side lengths such that each side length should be less than sum of other two sides"
    );
  }
});

formM3.addEventListener("submit", (event) => {
  event.preventDefault();
  let s1 = parseFloat(document.getElementById("s1").value);
  let s2 = parseFloat(document.getElementById("s2").value);
  let angle = parseFloat(document.getElementById("angle").value);
  let area = 0.5 * s1 * s2 * Math.sin((angle * Math.PI) / 180);
  document.getElementById("method3-res").innerHTML = `Area = ${area}`;
});
