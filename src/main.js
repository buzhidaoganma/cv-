let html = document.querySelector("#html"); //用选择器找到这个元素
let style = document.querySelector("#style");

let string = `
/*你好，我叫小郑
 *接下来我要演示一下我的前端功底
 *首先我要准备一个div
 */
#div1{
    width: 200px;
    height:200px;
}
/*接下来我把 div 变成一个八卦图
 *注意看好了
 *首先，把 div 变成一个圆
 */
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none; 
}
/*八卦是阴阳形成的
 *一黑一白（这里我用到了背景渐变Gradient）
 */
#div1{
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%);
}
/*加两个神秘的小球*/
#div1::before{
    width:100px;
    height:100px;
    top:0;
    left:50%;
    transform:translateX(-50%);
    background:#000;
    border-radius:50%;
    background: rgb(255,255,255);
    background: radial-gradient(circle, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%);
}
#div1::after{
    width:100px;
    height:100px;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    background:#fff;
    border-radius:50%;
    background: rgb(0,0,0);
    background: radial-gradient(circle, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%);
}
`;
let string2 = "";
let n = 0;

let step = () => {
  setTimeout(() => {
    if (string[n] === "\n") {
      string2 = string2 + "<br>";
    } else if (string[n] === " ") {
      string2 += "&nbsp";
    } else {
      string2 += string[n];
    }
    style.innerHTML = string.substring(0, n);
    html.innerHTML = string2;
    window.scrollTo(0, 999999);
    html.scrollTo(0, 9999999);
    if (n < string.length - 1) {
      n = n + 1;
      step();
    }
  }, 50);
};

step();
