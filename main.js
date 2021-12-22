function kontrol() {
  const form = document.getElementById('form-signin');
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  var tel = document.getElementById('tel').value;
  var university = document.getElementById('university').value;
  var country = document.getElementById('country').value;
  var region = document.getElementById('region').value;
  var department = document.getElementById('department').value;
  var passport = document.getElementById('passport').value;
  var graddoc = document.getElementById('graddoc').value;
  var trans = document.getElementById('trans').value;
  var gno = document.getElementById('gno').value;
  var langdoc = document.getElementById('langdoc').value;
  var whydoapply = document.getElementById('whydoapply').value;

  var num= /^[0-9]+$/;
  var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;


  if (tel.match(num)) {
    form.classList.add("valid");
    form.classList.remove("invalid");
  }
  else {
    form.classList.add("valid");
    form.classList.remove("invalid");

    alert("Wrong Phone Number !")
  }
  
  if (name == "") {
    form.classList.add("valid");
    form.classList.remove("invalid");
    alert("Please enter name !")
  }
  else if (email.match(pattern)) {
    form.classList.add("valid");
    form.classList.remove("invalid");
  }
  else if (email == "") {
    form.classList.add("valid");
    form.classList.remove("invalid");
    alert("Please enter e-mail !")
  }
  else {
    form.classList.remove("valid");
    form.classList.add("invalid");

    alert("Please check your e-mail !")
  }

  if (university == "") {
    form.classList.add("valid");
    form.classList.remove("invalid");

    alert("Please enter university !")
  }
  else if (country == "Select your Country") {
    form.classList.add("valid");
    form.classList.remove("invalid");

    alert("Please enter country !")
  }
  else if (region == "") {
    form.classList.add("valid");
    form.classList.remove("invalid");

    alert("Please enter region !")
  }
  else if (department == "") {
    form.classList.add("valid");
    form.classList.remove("invalid");

    alert("Please enter Department !")
  }
  else if (passport == "") {
    form.classList.add("valid");
    form.classList.remove("invalid");

    alert("Please enter passport !")
  }
  else if (graddoc == "") {
    form.classList.add("valid");
    form.classList.remove("invalid");

    alert("Please enter Graduation document !")
  }
  else if (trans == "") {
    form.classList.add("valid");
    form.classList.remove("invalid");

    alert("Please enter Transcript !")
  }
  else if (gno == "") {
    form.classList.add("valid");
    form.classList.remove("invalid");

    alert("Please enter GNO !")
  }  else if (langdoc == "") {
      form.classList.add("valid");
      form.classList.remove("invalid");

      alert("Please enter Language Document !")
    }
    else if (whydoapply == "") {
      form.classList.add("valid");
      form.classList.remove("invalid");

      alert("Please enter a few words !")
    }
    else {
      alert("Success !")
    }


}
