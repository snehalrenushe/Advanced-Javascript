// callback

function takeAction(p1, p2, fun) {
  console.log("Take action started");
  setTimeout(() => {
    console.log("Take action ended");
    fun();
  }, 2000);
}

function display() {
  console.log("Action completed");
}

// takeAction("p1", "p2", display);
takeAction("p1", "p2", () => {
  console.log("Action completed");
});
