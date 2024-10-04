import { work } from "/data/workdata.js";

let workHTML = '';

work.forEach((work) =>{
workHTML +=`
          <div class="cart">
            <div class="projectimg">
              <img src=${work.src} alt="#" />
            </div>
            <h5 class="title">${work.title}</h5>
            <div class="buttonss">
              <a href=${work.link}><button class="button">Github link</button></a>
            </div>
          </div>
          `;
});

document.querySelector('.js-workinfo').innerHTML =workHTML;