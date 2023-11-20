function calculateBMI() {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
  
    if (weight > 0 && height > 0) {
      const bmi = weight / ((height / 100) ** 2);
      let category = '';
  
      if (bmi < 18.5) {
        category = 'underweight';
      } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = 'normal weight';
      } else if (bmi >= 25 && bmi <= 29.9) {
        category = 'overweight';
      } else {
        category = 'obesity';
      }
  
      const result = `Your BMI is ${bmi.toFixed(1)}, which indicates that you are <b>${category}</b>.`;
      document.getElementById('result').innerHTML = result;
    } else {
      alert('Enter a valid weight and height.');
    }
  }
  