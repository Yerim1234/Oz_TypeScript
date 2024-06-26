// 문자열 (string)
var a = '';
var b = " ";
var c = ""; // 템플릿 리터럴
var myName = "Steve";
var message = "Hello, ".concat(myName);
myName.toLocaleUpperCase();
// 숫자 타입 (number)
var n = 100;
var count = 10;
var price = 9.99;
var temperature = 15;
var distance = 3.4e-5;
var total = count * price;
var average = total / 2;
var infinity = Infinity;
var minusInfinity = -Infinity;
var iAmNotANumber = NaN;
// 불리언 (boolean)
var isOpen = true;
var isCompleted = false;
if (isOpen) {
    console.log("hello we are open!");
}
if (!isCompleted) {
    console.log("job not complete");
}
// && || !
var isAvailable = isOpen && !isCompleted;
// null 널 타입
var user = null;
function login(userName) {
    user = userName;
}
function logout() {
    user = null;
}
login("Joey");
logout();
// any 타입 -> 웬만하면 사용을 최소화 하는 게 좋다.
var someValue;
someValue.toString();
someValue = false;
someValue.toFixed();
