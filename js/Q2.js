function validate() {
var code = document.getElementById("nric").value;
if (code == "") {
  alert("請輸入身份證號!");
} else if (!isNaN(code)) {
  alert("身份證號第ㄧ碼不能是數字!");
} else if (code.length != 10) {
  alert("輸入的身份證號長度不正確!");
} else {

  if (code[1] == '1'){
    document.getElementById("result").innerHTML = "先生你好  通過驗證";
  }else if (code[1] == '2'){
    document.getElementById("result").innerHTML = "小姐你好  通過驗證";
  }
   else {
      document.getElementById('result').innerHTML = "";
      alert('身分證號輸入錯誤，請重新輸入！')
      document.getElementById('nric').value = "";
   }
}

}
