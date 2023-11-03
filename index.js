(function () {
  const div = document.createElement("div");
div.style.width = "50px";
div.style.height = "50px";
div.style.backgroundColor = "yellow";

// 添加 div 块到页面
document.body.appendChild(div);

// 定义 div 块的初始位置
div.style.top = window.innerHeight / 2;
div.style.left = window.innerWidth / 2;

// 定义 div 块的速度
const speed = 20;

// 定义 div 块的方向
let direction = Math.floor(Math.random() * 4);

// 定义 div 块的碰撞检测函数
function collisionDetection() {
  // 获取 div 块的四个边界
  const top = div.offsetTop;
  const left = div.offsetLeft;
  const bottom = top + div.clientHeight;
  const right = left + div.clientWidth;

  // 检查 div 块是否碰到了其他 div 块
  for (const el of document.querySelectorAll("div")) {
    if (el !== div) {
      // 检查是否碰到了顶部
      if (top < el.offsetTop + el.clientHeight && top > el.offsetTop) {
        direction = 3;
        return;
      }

      // 检查是否碰到了底部
      if (bottom > el.offsetTop && bottom < el.offsetTop + el.clientHeight) {
        direction = 1;
        return;
      }

      // 检查是否碰到了左侧
      if (left < el.offsetLeft + el.clientWidth && left > el.offsetLeft) {
        direction = 2;
        return;
      }

      // 检查是否碰到了右侧
      if (right > el.offsetLeft && right < el.offsetLeft + el.clientWidth) {
        direction = 0;
        return;
      }
    }
  }

  // 检查是否碰到了页面的边界
  if (top < 0) {
    direction = 3;
    return;
  }

  if (bottom > window.innerHeight) {
    direction = 1;
    return;
  }

  if (left < 0) {
    direction = 2;
    return;
  }

  if (right > window.innerWidth) {
    direction = 0;
    return;
  }
}

// 开始弹动
function start() {
  // 每隔 100 毫秒，执行一次弹动
  setInterval(function() {
    // 更新 div 块的位置
    switch (direction) {
      case 0:
        div.style.left += speed;
        break;
      case 1:
        div.style.top += speed;
        break;
      case 2:
        div.style.left -= speed;
        break;
      case 3:
        div.style.top -= speed;
        break;
    }

    // 检查碰撞
    collisionDetection();
  }, 100);
}

// 启动弹动
start();
})()