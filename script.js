function eventlist(event) {
  var evt = event.target;

  var val = evt.value;

  if (val == "=") {
    let txt = document.getElementById("inp").value;

    txt = eval(txt);
    document.getElementById("inp").value = txt;
  } else if (val == "R") {
    document.getElementById("inp").value = "";
  } else {
    document.getElementById("inp").value += val;
  }
}

