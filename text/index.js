const form = document.querySelector("form"),
  sing = form.querySelector(".sing"),
  namefield = sing.querySelector(".name-field"),
  inputelm = namefield.querySelector(".input-elm"),
  nameinput = inputelm.querySelector(".name"),
  userfield = sing.querySelector(".user-field"),
  inputelm1 = userfield.querySelector(".input-elm"),
  userinput = inputelm1.querySelector(".user");


function checkname() {
  if (nameinput.value == "") {
    return namefield.classList.add("invalid");
  }

  namefield.classList.remove("invalid");
};

function checkuser() {
    if (userinput.value == "") {
      return userfield.classList.add("invalid");
    }
  
    userfield.classList.remove("invalid");
  };

console.log(userinput.length);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkname();
  checkuser();

  nameinput.addEventListener("keyup", checkname);
  userinput.addEventListener("keyup", checkuser)

});
