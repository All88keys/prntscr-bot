function myFunction() {
    var URL = getURL();
    document.getElementById("myFrame").src = "https://prnt.sc/"+URL;
    document.getElementById("photoID").innerHTML = URL;
    console.log(URL);
}

function getURL() {
  var decString = rand(1118481,16777215);
  return decString.toString(16);
}

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}
