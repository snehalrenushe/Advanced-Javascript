//OTP generation with math random

// console.log(Math.random());

function getOtp(min, max) {
  let otp = Math.round(Math.random() * (max - min) + 1000);
  console.log(otp);
}

getOtp(1000, 9999);
