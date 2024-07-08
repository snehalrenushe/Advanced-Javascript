//XMLHttpRequest

function onRefresh() {
  let request = new XMLHttpRequest();

  request.onreadystatechange = function () {
    if (request.readyState === request.DONE) {
      if (request.status === 200) {
        // console.log(request.responseText);
        // console.log(typeof request.responseText);

        // need to convert string into object

        let ob = JSON.parse(request.responseText);

        let runs = ob.runs;
        let wickets = ob.wickets;

        console.log("Runs : " + runs + ", Wickets : " + wickets);

        // let runs = request.responseXML.querySelector("runs").innerHTML;
        // let wickets = request.responseXML.querySelector("wickets").innerHTML;
        // console.log(runs);
        // console.log(wickets);

        // let scoreEl = document.querySelector("#score");
        // scoreEl.innerHTML = "Score : " + runs + " / " + wickets;
      } else {
        console.log("Something went wrong...");
      }
    }
    // console.log(request.readyState);
    // console.log(request.status);
  };

  request.open("GET", "./data.json");
  request.send();
}

// setInterval(() => {
//   onRefresh();
// }, 2000);
