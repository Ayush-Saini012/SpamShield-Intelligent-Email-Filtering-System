function checkSpam(){

let text = document.getElementById("emailText").value.toLowerCase();

let spamWords = [
"win",
"free",
"money",
"prize",
"offer",
"click here",
"lottery",
"urgent",
"buy now"
];

let isSpam = false;

for(let word of spamWords){
if(text.includes(word)){
isSpam = true;
break;
}
}

let result = document.getElementById("result");

if(isSpam){
result.innerHTML = "⚠️ This email looks like SPAM!";
result.style.color = "red";
}
else{
result.innerHTML = "✅ This email looks SAFE!";
result.style.color = "green";
}

}