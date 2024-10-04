import { personal,academic ,tools } from "/data/personal-info.js";

let personalHTML = "";

personal.forEach((person) =>{
 personalHTML += `
           <div class="generalinfo">
            <p>Name:${person.name}</p>
            <p>Address:${person.temporaryAddress}</p>
            <p>Permanent Addres:${person.permanentAddress}</p>
            <p>Profession:${person.profession}</p>
            <p>Email:${person.email}</p>
          </div>
 `;
});
document.querySelector('.js-general-info').innerHTML = personalHTML;

let academicHTML = "";
academic.forEach((academic)=> {
academicHTML += `
            <div class="academic">
              <h3>${academic.name}</h3>
              <p>${academic.Address}</p>
              <p>${academic.duration} , ${academic.level}</p>
            </div>
`;
});
document.querySelector('.js-academic-info').innerHTML =academicHTML;


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