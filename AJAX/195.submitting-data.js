function onSubmit() {
  let formEl = document.querySelector("form");
  let formData = new FormData(formEl);

  let xhr = new XMLHttpRequest();
  xhr.open("POST", "newsletter.html", true);
  xhr.send(formData);
}
