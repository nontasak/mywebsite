// อ้างอิง HTML elements
const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
const videoContainer = document.getElementById("videoContainer");
const userScreen = document.getElementById("userScreen");
let stream = null;

// สร้างฟังก์ชันเริ่มสตรีม
async function startStream() {
    try {
        stream = await navigator.mediaDevices.getDisplayMedia({ video: true });
        userScreen.srcObject = stream;
        videoContainer.style.display = "block";
        startButton.disabled = true;
        stopButton.disabled = false;
    } catch (error) {
        console.error("เกิดข้อผิดพลาด: " + error);
    }
}

// สร้างฟังก์ชันหยุดสตรีม
function stopStream() {
    if (stream) {
        stream.getTracks().forEach(track => track.stop());
    }
    userScreen.srcObject = null;
    videoContainer.style.display = "none";
    startButton.disabled = false;
    stopButton.disabled = true;
}

// เพิ่มการจัดการเหตุการณ์เมื่อคลิกปุ่ม
startButton.addEventListener("click", startStream);
stopButton.addEventListener("click", stopStream);
