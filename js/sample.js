$(function(){
  // 將指定的圖片設為背景，以全螢幕模式顯示
  $.backstretch(
    [
      // 列出切換顯示的圖片URL
      "../images/background10.jpg",
      "../images/background6.jpg",
      "../images/background11.jpg",
      "../images/background1.jpg",
    ],
    {
      // 將顯示時間設定為4秒
      duration: 200,
      // 將淡出時間設定為1秒
      fade: 2000,
    }
  );
});


