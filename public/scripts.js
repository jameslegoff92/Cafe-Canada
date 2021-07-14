console.log("hi")

document.getElementById("hamburger").addEventListener("click", function (event) {
 const dropdown = document.getElementById("dropdown")
 if ((dropdown.style.display === "flex")) {
   dropdown.style.display = "none";
 } else {
   dropdown.style.display = "flex";
 }
})

window.addEventListener("resize", function () {
  const dropdown = document.getElementById("dropdown")

  if (window.innerWidth >= 1000) {
    dropdown.style.display = "none";
  }
})

