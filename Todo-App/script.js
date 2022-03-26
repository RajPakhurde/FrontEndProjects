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
