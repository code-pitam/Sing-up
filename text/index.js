const form = document.querySelector("form"),
  sing = form.querySelector(".sing"),
  namefield = sing.querySelector(".name-field"),
  inputelm = namefield.querySelector(".input-elm"),
  nameinput = inputelm.querySelector(".name"),
  userfield = sing.querySelector(".user-field"),
  inputelm1 = userfield.querySelector(".input-elm"),
  userinput = inputelm1.querySelector(".user"),
  passfield = sing.querySelector(".pass-field"),
  inputelm2 = passfield.querySelector(".input-elm"),
  passinput = inputelm2.querySelector(".pass"),
  showicon = inputelm2.querySelector(".show-hide");
console.log(passinput);
  // full name validation

function checkname() {
  if (nameinput.value == "" || nameinput.value.length < 8) {
    return namefield.classList.add("invalid");
  }

  namefield.classList.remove("invalid");
}

// username validation

function checkuser() {
  if (userinput.value == "" || userinput.value.length < 8) {
    return userfield.classList.add("invalid");
  }

  userfield.classList.remove("invalid");
}

// password show hide function


const eyeicons = document.querySelectorAll(".show-hide");
eyeicons.forEach((eyeicon) => {
  eyeicon.addEventListener("click", () => {
    const pInput = eyeicon.parentElement.querySelector("input");
    console.log(pInput);
    // eyeicon.classList.replace("bxs-hide", "bxs-show")
    if (pInput.type === "password") {
      eyeicon.classList.replace("bxs-hide", "bxs-show");
      return (pInput.type = "text");
    }
    eyeicon.classList.replace("bxs-show", "bxs-hide");
    return (pInput.type = "password");
  });
});


// password validation
function epass(){
  const passp= /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  if (!passinput.value.match(passp)){
    return passfield.classList.add("invalid");
  }
passfield.classList.remove("invalid");
}
function eshow(){
  const passp= /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  if (passinput.value.match(passp)){
    return passfield.classList.add("top");
  }
passfield.classList.remove("top");
}


console.log(eyeicons);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkname();
  checkuser();
epass();
eshow();
  nameinput.addEventListener("keyup", checkname);
  userinput.addEventListener("keyup", checkuser);
  passinput.addEventListener("keyup", epass);
  passinput.addEventListener("keyup", eshow);
});
