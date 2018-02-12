function windowHand() {

  let winWidth, winHeight, mouseX, mouseY, sY;
  winWidth = window.innerWidth === winWidth ? winWidth : window.innerWidth;
  winHeight = window.innerHeight === winHeight ? winHeight : window.innerHeight;
  mouseX = window.mouseX === mouseX ? mouseX : window.mouseX;
  mouseY = window.mouseY === mouseY ? mouseY : window.mouseY;
  sY = window.scrollY === sY ? sY : window.scrollY;
  return { winWidth: winWidth, winHeight: winHeight, mouseX: mouseX, mouseY: mouseY, sY: sY };
}

export default windowHand;
