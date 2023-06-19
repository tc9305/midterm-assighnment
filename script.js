// 在頁面加載完成後運行此代碼
window.onload = function() {
  // 為第二個頁面中的連結添加點擊事件
  var links = document.getElementById("links").getElementsByTagName("a");
  for (var i = 0; i < links.length; i++) {
    links[i].onclick = function() {
      alert("即將前往 " + this.innerHTML);
    };
  }
};
