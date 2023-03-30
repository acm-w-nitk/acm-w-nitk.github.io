const oldeventsData = [
  {
    id: 4,
    name: "Talk with Anubha Maneshwar",
    desc: "We hosted Anubha Maneshwar (founding director of GirlScript) live on our Instagram handle! Viewers learnt about GirlScript Foundation; the inception, journey, her motivation, roadblocks and where Anubha wants to take it in the future. She also shared her opinions on the ‘women in tech’ movement, entrepreneurship and our education system. The ‘Question and Answer’ session saw questions on technology, entrepreneurship, profile building, resume writing, community building, professional communication and leadership to which Anubha gave her take on and provided insightful answers.",
    photo: "../images/anubha.jpeg"  //change Image 
  },
  {
    id: 3,
    name: "RecHERsion 2020",
    desc: "Hello there, women of technology!There is no gate, no lock, no bolt. Here's an opportunity for you to follow in the footsteps of greats such as Margaret Hamilton and Grace Mary Hopper.ACM-W, NITK in collaboration with ACM-W, VIT sponsored by Coding Blocks present to you an opportunity to code, compete and show us what you got at an all girls coding contest, RecHERsion.",
    photo: "../images/rechersion.jpg"
  },

  {
    id: 2,
    name: "Women Emerging in Finance 2019",
    desc: "ACM-W presents Women Emerging in Finance 2019, an informal networking opportunity for girls across all years, branches and programs in NITK to interact with women leaders of the firm with the goal of identifying talented women, giving deep insight into the world of finance and creating awareness about the plethora of opportunities at the company.",
    photo: "../images/gs.jpg"
  },
  {
    id: 1,
    name: "Open Source Kick Start",
    desc: " With Hactoberfest 2020 going on in full swing, we at ACM-W invite all open source enthusiasts to contribute to our organisation and watch your work being deployed! 🚀Come and get a feel of how most GSoC organisations work and familiarise yourself with Open Source projects.",
    photo: "../images/open.jpg"
  },
];

const neweventsData = [

];


function EventTemplateOut(events) {
  return `
  <button class="card col-md-3 col-sm-16> 
  <div class="card">
  <div style="text-align:center">
  <img src="${events.photo}" alt="Card image cap" class="img-fluid">
  <h5 class="card-title" style="text-align:center";><strong>${events.name}</strong></h5>
  <div class="card--hover">
  
  <p class="card-text">${events.desc}</p>
  </div>
  </div> 
  </button>
  `;

}



document.getElementById("oldevents").click();
function oldevents() {
  i = 0;
  console.log("hi");
  document.getElementById("app").innerHTML = `<br>
<div class= "container">
<div class = "row">
  ${oldeventsData.map(EventTemplateOut).join("")}
   </div>
`;
  document.getElementById("newevents").style.border = "5px solid #1b1b1b";
  document.getElementById("oldevents").style.border = "5px solid #02CCFE";
}

function newevents() {
  i = 0;
  console.log("hi");
  document.getElementById("app").innerHTML = ` <br>
<div class= "container">
<div class="row">
  ${neweventsData.map(EventTemplate).join("")} </div></div></div></div></div>
`;
  document.getElementById("oldevents").style.border = "5px solid #1b1b1b";
  document.getElementById("newevents").style.border = "5px solid #02CCFE";
}
