function calculateBMI() {
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
  
    if (height === "" || weight === "") {
      alert("請輸入身高和體重！");
      return;
    }
  
    // 儲存資料到 localStorage
    localStorage.setItem('height', height);
    localStorage.setItem('weight', weight);
  
    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
  
    let status = "";
  
    if (bmi < 18.5) {
      status = "過輕";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      status = "正常";
    } else if (bmi >= 25 && bmi <= 29.9) {
      status = "過重";
    } else {
      status = "肥胖";
    }
  
    document.getElementById('result').innerHTML = `你的 BMI 是 ${bmi}，屬於【${status}】範圍。`;
  }
  
  // 畫面載入時，自動填上上次的資料
  window.onload = function() {
    const savedHeight = localStorage.getItem('height');
    const savedWeight = localStorage.getItem('weight');
  
    if (savedHeight) {
      document.getElementById('height').value = savedHeight;
    }
    if (savedWeight) {
      document.getElementById('weight').value = savedWeight;
    }
  }
  