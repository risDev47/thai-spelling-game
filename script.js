// ตัวแปร DOM (ไม่มีการเปลี่ยนแปลง)
const startScreen = document.getElementById("startScreen");
const gameScreen = document.getElementById("gameScreen");
const resultScreen = document.getElementById("resultScreen");
const storeNameInput = document.getElementById("storeNameInput");
const sentenceBox = document.getElementById("sentenceBox");
const choicesBox = document.getElementById("choices");
const scoopsBox = document.getElementById("iceCream");
const progressEl = document.getElementById("progress");
const timerEl = document.getElementById("timer");
const resultText = document.getElementById("resultText");
const startBtn = document.getElementById("startBtn");
const restartBtn = document.getElementById("restartBtn");
const toggleBtn = document.getElementById("toggleMusic");
const bgMusic = document.getElementById("bgMusic");

// คำถาม (ไม่มีการเปลี่ยนแปลง)
const questions = [
{ before: "วันนี้มี", word: "นก", after: "บินมาเกาะที่หน้าต่าง", cat: "แม่กก" },
{ before: "พ่อ", word: "ปลูก", after: "ต้นไม้ในสวน", cat: "แม่กก" },
{ before: "เธอมี", word: "ความสุข", after: "มาก", cat: "แม่กก" },
{ before: "เขา", word: "เลือก", after: "เสื้อสีแดง", cat: "แม่กก" },
{ before: "โรงอาหารดู", word: "สกปรก", after: "จัง", cat: "แม่กก" },

{ before: "ฉันเห็น", word: "แมลง", after: "เกาะอยู่ที่ดอกไม้", cat: "แม่กง" },
{ before: "น้องชอบ", word: "ร้อง", after: "เพลง", cat: "แม่กง" },
{ before: "เขาเดิน", word: "ลง", after: "ไปที่ลานจอดรถ", cat: "แม่กง" },
{ before: "เธอ", word: "นั่ง", after: "อยู่ใต้ต้นไม้", cat: "แม่กง" },
{ before: "ครู", word: "แต่ง", after: "นิทานให้ฟัง", cat: "แม่กง" },

{ before: "ฉันชอบ", word: "จด", after: "บันทึก", cat: "แม่กด" },
{ before: "พ่อ", word: "เปิด", after: "ประตู", cat: "แม่กด" },
{ before: "ต้นไม้เหี่ยวเพราะ", word: "ขาด", after: "เเคลนน้ำ", cat: "แม่กด" },
{ before: "รถ", word: "จอด", after: "ที่หน้าบ้าน", cat: "แม่กด" },
{ before: "แม่", word: "จัด", after: "กระเป๋า", cat: "แม่กด" },

{ before: "พี่", word: "ทาน", after: "ข้าว", cat: "แม่กน" },
{ before: "มานีชอบ", word: "นอน", after: "ดึก", cat: "แม่กน" },
{ before: "พ่อใช้", word: "ค้อน", after: "ตอกตะปู", cat: "แม่กน" },
{ before: "เรา", word: "กิน", after: "ขนม", cat: "แม่กน" },
{ before: "มานะชวนมานีไป", word: "เดิน", after: "เล่น", cat: "แม่กน"},

{ before: "น้อง", word: "ชอบ", after: "เล่นเเมว", cat: "แม่กบ" },
{ before: "คุณครูให้นักเรียน", word: "ตอบ", after: "คำถามในหนังสือ", cat: "แม่กบ" },
{ before: "โจรผู้ร้าย", word: "มอบ", after: "ตัวให้ตำรวจ", cat: "แม่กบ" },
{ before: "ฉันทำข้อ", word: "สอบ", after: "ภาษาไทย", cat: "แม่กบ" },
{ before: "พ่อ", word: "จับ", after: "ปลาในบ่อมาทำกับข้าว", cat: "แม่กบ" },

{ before: "สร้อยของเเม่", word: "จม", after: "น้ำหายไปเมื่อตอนเย็น", cat: "แม่กม" },
{ before: "ฉันชอบเล่นว่าวตอน", word: "ลม", after: "เเรง", cat: "แม่กม" },
{ before: "ยายของฉันชอบทาน", word: "ส้ม", after: "เขียวหวาน", cat: "แม่กม" },
{ before: "ยาเม็กมีรสชาติ", word: "ขม", after: "มาก", cat: "แม่กม" },
{ before: "ต้นกล้าไปเล่นกีฬาจนหก", word: "ล้ม", after: "เป็นเเผล", cat: "แม่กม" } ,

{ before: "แม่", word: "ขาย", after: "ปลาที่ตลาด", cat: "แม่เกย" },
{ before: "ฉัน", word: "เคย", after: "นั่งรถบัสกับคุณยาย", cat: "แม่เกย" },
{ before: "ปรีดาชอบกลิ่นของใบ", word: "เตย", after: "มาก", cat: "แม่เกย" },
{ before: "สมชายละ", word: "เลย", after: "ความรู้สึกของผู้อื่น", cat: "แม่เกย" },
{ before: "ฉัน", word: "คอย", after: "คุณยายมารับหลังโรงเรียนเลิก", cat: "แม่เกย" } ,

{ before: "ฉันชอบนั่งดู", word: "ดาว", after: "ตรงสนามหญ้า", cat: "แม่เกอว" },
{ before: "วันนี้ฝนตกอากาศ", word: "หนาว", after: "จนตัวสั่น", cat: "แม่เกอว" },
{ before: "ฉันตื่นเต้นมากเมื่อรู้ว่าโรงเรียนจะพาไป", word: "เที่ยว", after: "ที่สวนสนุก", cat: "แม่เกอว" },
{ before: "น้องไม่ระวังทำ", word: "แก้ว", after: "ตกเเตกกระจาย", cat: "แม่เกอว" },
{ before: "พี่สาวเป็นคนชอบเลี้ยง", word: "แมว", after: "เพราะมันน่ารัก", cat: "แม่เกอว" }
];
const categories = ["แม่กก","แม่กง","แม่กด","แม่กน","แม่กบ","แม่กม","แม่เกย","แม่เกอว"];

// ตัวแปรเกม
let storeName = "";
let scoops = 0;
const MAX_SCOOPS = 10;
let startMs = 0;
let timerHandle = null;
let running = false;
let availableQuestions = []; // เพิ่มตัวแปรนี้เข้ามา

// ฟังก์ชันยูทิลิตี้ (ไม่มีการเปลี่ยนแปลง)
function randChoice(arr) { return arr[Math.floor(Math.random()*arr.length)]; }
function nowSec() { return Math.floor((Date.now()-startMs)/1000); }
function fmtTime(sec) { const m=Math.floor(sec/60), s=sec%60; return `${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`; }

// เริ่ม/รีเซ็ตเกม
function resetGame(){
    scoops=0;
    running=false;
    startMs=0;
    // สร้างคิวคำถามใหม่และสับเปลี่ยนลำดับ
    availableQuestions = [...questions].sort(() => Math.random() - 0.5);
    progressEl.textContent = `${scoops}/${MAX_SCOOPS}`;
    timerEl.textContent="00:00";
    drawScoops();
}

function startGame(){
    storeName = storeNameInput.value.trim() || "ร้านไอศกรีม";
    document.getElementById("storeName").textContent = storeName;
    startScreen.classList.add("hidden");
    gameScreen.classList.remove("hidden");
    resetGame();
    nextQuestion();
    startMs = Date.now();
    running = true;
    timerHandle = setInterval(()=>{ if(running) timerEl.textContent=fmtTime(nowSec()); }, 500);
}

function endGame(){
    running=false;
    if(timerHandle){ clearInterval(timerHandle); timerHandle=null; }
    const used=nowSec();
    gameScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");
    resultText.textContent = `${storeName} ใช้เวลา ${fmtTime(used)} สะสมไอศกรีมครบ ${MAX_SCOOPS} ก้อน!`;
}

// คำถาม
function renderSentence(q){
    sentenceBox.innerHTML = `${q.before} <span class="underline">${q.word}</span> ${q.after}`;
}

function renderChoices(correctCat){
    choicesBox.innerHTML="";
    const shuffled = [...categories].sort(()=>Math.random()-0.5);
    shuffled.forEach(cat=>{
        const btn=document.createElement("button");
        btn.textContent=cat;
        btn.addEventListener("click",()=>onChoose(cat, correctCat, btn));
        choicesBox.appendChild(btn);
    });
}

function nextQuestion(){
    // ตรวจสอบว่ายังมีคำถามเหลือในคิวหรือไม่
    if (availableQuestions.length === 0) {
        // ถ้าไม่มีแล้ว ให้สร้างคิวใหม่และสลับลำดับ
        availableQuestions = [...questions].sort(() => Math.random() - 0.5);
    }
    
    // ดึงคำถามจากต้นคิวออกมาใช้ (และลบออกจากอาร์เรย์)
    const q = availableQuestions.shift();
    renderSentence(q);
    renderChoices(q.cat);
}

function onChoose(cat, correctCat, btn){
    if(!running) return;
    if(cat===correctCat){
        scoops++;
        progressEl.textContent = `${scoops}/${MAX_SCOOPS}`;
        drawScoops(true);
        playClap();
        if(scoops>=MAX_SCOOPS) endGame();
        else nextQuestion();
    } else {
        // ❌ ไม่ลด scoops แต่ทำให้ปุ่ม "สั่น + emoji"
        btn.style.animation = "shake 0.3s";
        btn.textContent += " 😖";
        setTimeout(()=>{
            btn.style.animation = "";
            btn.textContent = btn.textContent.replace(" 😖","");
        }, 600);
    }
}

// วาดไอศกรีม (ไม่มีการเปลี่ยนแปลง)
function drawScoops(pop=false){
    scoopsBox.querySelectorAll(".scoop").forEach(el=>el.remove());
    for(let i=0;i<scoops;i++){
        const s=document.createElement("div");
        s.className=`scoop c${(i%7)+1}`;
        s.style.bottom=`${280 + i*28}px`;
        if(pop){
            s.style.animation="bounce 0.6s ease";
        }
        scoopsBox.appendChild(s);
    }
}

// เสียงปรบมือ (ไม่มีการเปลี่ยนแปลง)
function playClap(){
    const audio=new Audio("https://www.soundjay.com/human/sounds/applause-01.mp3");
    audio.volume=0.5;
    audio.play();
}

// Event (ไม่มีการเปลี่ยนแปลง)
startBtn.addEventListener("click", startGame);
restartBtn.addEventListener("click", ()=>{
    resultScreen.classList.add("hidden");
    startScreen.classList.remove("hidden");
});

// ปุ่มเปิด/ปิดเพลง (ไม่มีการเปลี่ยนแปลง)
toggleBtn.addEventListener("click", ()=>{
    if(bgMusic.paused) bgMusic.play();
    else bgMusic.pause();
});

// เพิ่มส่วนนี้เพื่อจัดการการเล่นเพลง (ไม่มีการเปลี่ยนแปลง)
document.addEventListener("click", () => {
    bgMusic.volume = 0.3;
    const playPromise = bgMusic.play();
    if (playPromise !== undefined) {
        playPromise.then(_ => {
            console.log("เพลงเริ่มเล่นแล้ว");
        }).catch(error => {
            console.log("ไม่สามารถเล่นเพลงอัตโนมัติได้ ต้องให้ผู้ใช้คลิกปุ่ม 'เริ่มเกม' แทน");
        });
    }
}, { once: true });
