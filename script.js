function calculateBMI() {
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
  
    if (height === "" || weight === "") {
      alert("請輸入身高和體重！");
      return;
    }
  
    // 儲存資料
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
  
    // 計算建議體重範圍
    const minWeight = (18.5 * heightInMeters * heightInMeters).toFixed(1);
    const maxWeight = (24.9 * heightInMeters * heightInMeters).toFixed(1);
  
    document.getElementById('result').innerHTML = `
      你的 BMI 是 ${bmi}，屬於【${status}】範圍。<br>
      建議體重範圍：${minWeight} kg ～ ${maxWeight} kg
    `;
  }
  