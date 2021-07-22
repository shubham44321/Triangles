const form = document.getElementById("form");
const reset = document.getElementById("quiz-reset");
const submit = document.getElementById("quiz-submit");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let a1 = parseInt(
    document.querySelector('input[name="answer1"]:checked').value
  );
  let a2 = parseInt(
    document.querySelector('input[name="answer2"]:checked').value
  );
  let a3 = parseInt(
    document.querySelector('input[name="answer3"]:checked').value
  );
  let a4 = parseInt(
    document.querySelector('input[name="answer4"]:checked').value
  );
  let a5 = parseInt(
    document.querySelector('input[name="answer5"]:checked').value
  );
  let a6 = parseInt(
    document.querySelector('input[name="answer6"]:checked').value
  );
  let a7 = parseInt(
    document.querySelector('input[name="answer7"]:checked').value
  );
  let a8 = parseInt(
    document.querySelector('input[name="answer8"]:checked').value
  );
  let a9 = parseInt(
    document.querySelector('input[name="answer9"]:checked').value
  );
  let a10 = parseInt(
    document.querySelector('input[name="answer10"]:checked').value
  );
  const ans = [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10];
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const score = ans.reduce(reducer);
  document.getElementById("quiz-res").innerHTML = `Score : ${score}`;

  reset.classList.contains("hidden") ? reset.classList.remove("hidden") : "";
  submit.classList.contains("hidden") ? "" : submit.classList.add("hidden");
});

reset.addEventListener("click", () => {
  window.location.reload();
});
