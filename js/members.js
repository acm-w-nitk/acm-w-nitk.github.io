const members1 = [
  {
    id: 1,
    name: "Supritha Harishankar",
    desc: "Chairperson",
    photo: "../images/Supritha.png",
    facebook: "https://www.facebook.com/acmwnitk/",
    linkedin: "https://www.linkedin.com/in/suprithahs/"
  },
  {
    id: 2,
    name: "Subham Chakraborty",
    desc: "Vice-Chair",
    photo: "../images/subham.jpg",
    facebook: "https://www.facebook.com/acmwnitk/",
    linkedin: "https://www.linkedin.com/in/subham-chakraborty-653226196/",
  },
  {
    id: 3,
    name: "Vageesha Mishra",
    desc: "Content Head",
    photo: "../images/Vageesha.png",
    linkedin: "https://www.linkedin.com/in/vageesha-mishra-8288a419a",
    facebook: "https://www.facebook.com/vageesha.mishraa"
  }
]
const members2 = [
  {
    id: 4,
    name: "Meghna Kashyap",
    desc: "Publicity Coordinator",
    photo: "../images/Meghna.jpg",
    linkedin: "https://www.linkedin.com/in/meghna-kashyap-4a6860196/",
    facebook: "https://www.facebook.com/meghna.kashyap.98/"
  },

  {
    id: 5,
    name: "Yash Kumar Gupta",
    desc: "Website Head",
    photo: "../images/yash.jpg",
    linkedin: "https://www.linkedin.com/in/yash-kumar-gupta-41a931143",
    facebook: "https://www.facebook.com/yash.gupta.353803"
  }
];



function EventTemplate1(events) {
  return `
    <div  class="card col-md-4 col-sm-12> 
    <div class="card" align="center">
    <div class="image-box">
    <img src="${events.photo}" class="rounded-circle" alt="Vice Chair">
    </div>
    <div class="card-body">
      <h3 class="name">${events.name}</h3>
      <h5 class="role">${events.desc}</h5>
      <a href=${events.facebook} class="fa fa-facebook"></a>
      <a href=${events.linkedin} class="fa fa-linkedin"></a>
    </div>
    </div>
    `;

}
function EventTemplate2(events) {
  return `
    <div align="center" class="card col-md-6 col-sm-12> 
    <div class="card" align="center">
    <div class="image-box1">
    <img src="${events.photo}" class="rounded-circle" alt="Vice Chair">
    </div>
    <div class="card-body">
      <h3 class="name">${events.name}</h3>
      <h5 class="role">${events.desc}</h5>
      <a href=${events.facebook} class="fa fa-facebook"></a>
      <a href=${events.linkedin} class="fa fa-linkedin"></a>
    </div>
    </div>
    `;

}

document.getElementById("app").innerHTML = ` <br>
  <div class= "container">
  <div class="row">
    ${members1.map(EventTemplate1).join("")}
    ${members2.map(EventTemplate2).join("")}
     </div></div></div></div></div>
  `;

