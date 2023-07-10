
get_products();



// start--scroll

window.onscroll = function () {
  if (scrollY >= 500) {
    btn.style.display = "block";

  }
  else if (scrollY < 600) {
    btn.style.display = "none";

  }
}
btn.onclick = function () {
  scroll({
    top: 0,
    behavior: "smooth"

  })
}



// end--scroll
// start storage
// let first_name="hana";
// let skills=["HTML","CSS","js"]
// let description={
//   age:38,
//   job:"engineer",
// }
// localStorage.name=`${first_name}`;
// localStorage.skillslist=JSON.stringify(skills);
// localStorage.description=JSON.stringify(description);
// localStorage.schools=JSON.stringify(["lotus","alexwest"])
//  let y=JSON.parse( localStorage.getItem("description"));
//  console.log(y.job)
// end--storage
// storge in local
