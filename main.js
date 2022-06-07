// var printT;
// function printTimer() {
//     printT = setInterval(() => {
//         document.write("hello" + "<br>");
//     }, 4000)
// } printTimer()

// var printC;
// function printCounter() {
//     printC = setInterval(() => {
//         document.write("counter" + "<br>");
//     }, 6000)
// } printCounter()
//3333////

var printD = document.getElementById("vi");
var DD ;
function printDoc() {
    DD = setInterval(() => {
        printD.innerHTML += "<h1>i love timers</h1>"  + "<br>";
    }, 5000)
} printDoc()


function stopPrint() {
    clearInterval(DD);
}