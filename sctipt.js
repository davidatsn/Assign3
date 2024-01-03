function handleSubmit() {
  const emailValue = document.querySelector("#email").value.toLocaleLowerCase();
  const errorEmail = document.getElementById("error-email");
  const regex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const check = emailValue.match(checkemail);
  const sectioncontent = document.querySelector(".mt-40");
  const submitControl = document.querySelector(".submit-email");
  if (check) {
    sectioncontent.style.display = "block";
    submitControl.style.display = "none";
    errorEmail.innerHTML = "";
  } else {
    errore.innerHTML = "Vui long nhap lai email ";
  }
}
function handleOnmouseOver(element) {
  console.log(element);
  const Viewmore = element.querySelector(".view-more");
  Viewmore.style.display = "inline-block";
}
function handleOnmouseOut(element) {
  const Viewmore = element.querySelector(".view-more");
  Viewmore.style.display = "none";
}
function handleviewmore(element) {
  const parentElement = element.closest(".parent");
  const jobcontent = parentElement.querySelector(".job-content");
  jobcontent.forEach((element) => {
    element.style.display = "block";
  });
}
