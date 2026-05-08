const text = "BTech CSIT Student | Learning Java, DSA and Web Development";
let i = 0;

function typing(){
if(i < text.length){
document.querySelector(".typing").innerHTML += text.charAt(i);
i++;
setTimeout(typing,70);
}
}

typing();