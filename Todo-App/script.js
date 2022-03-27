let input = document.querySelector(".input");
let submitbtn = document.querySelector(".submitbutton");

document.addEventListener("DOMContentLoaded", () => {
  submitbtn.disabled = true;
  input.onkeyup = () => {
    if (input.value.length > 0) {
      submitbtn.disabled = false;
    } else {
      submitbtn.disabled = true;
    }
  };
  submitbtn.addEventListener("click", () => {
    let li = document.createElement("li");
    let newbutton = `  <div class="todo-buttons">${input.value}
      <button class="todo-btn done">Done</button>
      <button class="todo-btn remove">Remove</button>
    </div>`;

    li.innerHTML = newbutton;
    document.querySelector(".task").append(li);

    input.value = " ";
    submitbtn.disabled = true;
    return false;
  });
});

submitbtn.addEventListener("click", () => {
  document.querySelector("img").style.visibility = "visible";
  let sound = document.querySelector(".sound");
  sound.play();
});

document.querySelector(".ul").addEventListener("click", (e) => {
  if (e.target.classList.contains("remove")) {
    const deletelement = e.target.parentNode.parentNode;
    deletelement.remove();
    let sound2 = document.querySelector(".sound2");
    sound2.play();
  }
  if (e.target.classList.contains("done")) {
    const complete = e.target.parentNode;
    complete.style.textDecoration = "line-through";
    let sound3 = document.querySelector(".sound3");
    sound3.play();
  }
});
