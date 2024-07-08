//File upload with AJAX

let fileEl = document.querySelector("input[type='file']");
let progressEl = document.querySelector("progress");
let cancelEl = document.querySelector("button");
let messageEl = document.querySelector("#message");
let xhr = new XMLHttpRequest();

function onCancel() {
  xhr.abort();
}

function onUpload(params) {
  xhr.timeout = 500;

  xhr.ontimeout = (event) => {
    console.log("Timeout");
    messageEl.innerHTML = "Cancel due to timeout";
  };

  xhr.upload.onloadstart = (event) => {
    cancelEl.style.visibility = "visible";
    console.log("Started");
  };

  xhr.upload.onprogress = (event) => {
    let per = Math.round((event.loaded / event.total) * 100);
    progressEl.value = per;
    console.log(per);
  };

  xhr.upload.onloadend = (event) => {
    console.log(event);
    cancelEl.style.visibility = "hidden";
  };

  xhr.open("POST", "upload.html", true);

  let formData = new FormData();
  formData.append("file", fileEl.files[0]);

  xhr.send(formData);
}
