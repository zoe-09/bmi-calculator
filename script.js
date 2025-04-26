function calculateBMI() {
    const height = parseFloat(document.getElementById("height").value) / 100;
    const weight = parseFloat(document.getElementById("weight").value);
  
    if (!height || !weight) {
      document.getElementById("result").innerText = "請輸入正確的身高和體重。";
      return;
    }
  
    const bmi = weight / (height * height);
    let status = "";
  
    if (bmi < 18.5) {
      status = "過輕";
    } else if (bmi < 24) {
      status = "正常";
    } else if (bmi < 27) {
      status = "過重";
    } else if (bmi < 30) {
      status = "輕度肥胖";
    } else if (bmi < 35) {
      status = "中度肥胖";
    } else {
      status = "重度肥胖";
    }
  
    document.getElementById("result").innerText =
      `你的 BMI 是 ${bmi.toFixed(2)}，屬於「${status}」。`;
  }
  