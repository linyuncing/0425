function setup() {
    createCanvas(windowWidth, windowHeight); // 建立全視窗畫布
    background('#fcf6bd'); // 設定背景顏色
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight); // 當視窗大小改變時調整畫布大小
    background('#fcf6bd'); // 重新設定背景顏色
}