import { personal,academic ,tools } from "../data/personal-info.js";

const roles =["Computer Engineer","Frontend Developer","Backend Developer","FullStack Developer"];
let index = 0;
let currentText ='';
const textRoleElement =document.querySelector(".text-role");

function typeText(text ,i=0){ 
    if(i < text.length ){
        currentText += text[i];
        textRoleElement.textContent = currentText;
        setTimeout(() => typeText(text ,i+1 ),100);

    }
}

function eraseText(i){
    if(i >= 0){
        currentText = currentText.slice(0,i);
        textRoleElement.textContent = currentText;
        setTimeout(() => eraseText(i-1),100);

    }else{
        index =(index+1) % roles.length;
        setTimeout(() =>typeText(roles[index]),300);

    }
}

function showText() {
    setTimeout(() => eraseText(currentText.length), 2000);
}
typeText(roles[index]);
setInterval(showText, 5000); 

let toolsHTML = "";
tools.forEach((tool)=> {
toolsHTML += `
        <div class="icon">
            <img src=${tool.src} alt="#" />
            <p>${tool.name}</p>
          </div>
`;
});
document.querySelector('.js-tools-info').innerHTML =toolsHTML;

