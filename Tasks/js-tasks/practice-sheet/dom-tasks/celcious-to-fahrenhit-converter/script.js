const inp = document.querySelector("input");
const result = document.querySelector(".result");

inp.addEventListener("input", (e) => {
  let inpVal = e.target.value;
  let F = (inpVal * 9) / 5 + 32;

  result.textContent = F;
});
