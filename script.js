let button = document.getElementById("button");

button.addEventListener("click", () => {
  const height = parseInt(document.getElementById("height").value);
  const weight = parseInt(document.getElementById("weight").value);
  const result = document.getElementById("result");

  let height_val = false,
    weight_val = false;

  if (height === "" || isNaN(height) || height <= 0) {
    document.getElementById("height-error").innerHTML =
      "Invalid entry. Try again.";
  } else {
    document.getElementById("height-error").innerHTML = "";
    height_val = true;
  }

  if (weight == "" || isNaN(weight) || weight <= 0) {
    document.getElementById("weight-error").innerHTML =
      "Invalid entry. Try again.";
  } else {
    document.getElementById("weight-error").innerHTML = "";
    weight_val = true;
  }

  if (height_val && weight_val) {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if (bmi < 18.6) {
      result.innerHTML = `Your BMI is ${bmi}. You're at an unhealthy weight, better check a doctor.`;
    } else if (bmi >= 18.6 && bmi < 24.9) {
      result.innerHTML = `Your BMI is ${bmi}.You're at a healthy weight.`;
    } else if (bmi > 24.9) {
      result.innerHTML = `Your BMI is ${bmi}. You're at an unhealthy weight, better check a doctor.`;
    } else {
      alert("Form has errors.");
      result.innerHTML = "";
    }
  }
});
