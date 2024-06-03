let score = -40;

if (score > 90) {
  console.log("Excellent");
} else if (score > 60) {
  console.log("Good");
} else if (score > 50) {
  console.log("OK");
} else if (score <= 40 && score >= 0) {
  console.log("Failed");
} else {
  console.log("Invalid score");
}
