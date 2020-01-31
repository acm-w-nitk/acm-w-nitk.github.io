const oldeventsData = [
  {
    id:1,
    name: "Open Source Kick Start",
    desc: " With Hactoberfest 2020 going on in full swing, we at ACM-W invite all open source enthusiasts to contribute to our organisation and watch your work being deployed! 🚀Come and get a feel of how most GSoC organisations work and familiarise yourself with Open Source projects.",
    photo: "../images/open.jpg"
  },
  { 
    id:2,
    name: "Women Emerging in Finance 2019",
    desc: "ACM-W presents Women Emerging in Finance 2019, an informal networking opportunity for girls across all years, branches and programs in NITK to interact with women leaders of the firm with the goal of identifying talented women, giving deep insight into the world of finance and creating awareness about the plethora of opportunities at the company.",
    photo: "../images/gs.jpg"
  },
];

const neweventsData = [
  {
    id:1,
    name: "RecHERsion 2020",
    desc: "Hello there, women of technology!There is no gate, no lock, no bolt. Here's an opportunity for you to follow in the footsteps of greats such as Margaret Hamilton and Grace Mary Hopper.ACM-W, NITK in collaboration with ACM-W, VIT sponsored by Coding Blocks present to you an opportunity to code, compete and show us what you got at an all girls coding contest, RecHERsion.",
    photo: "../images/rechersion.jpg"
  }
];


function EventTemplate(events) {
  return `
  <div class="card col-md-4 col-sm-12> 
  <div class="card">
  <div style="text-align:center">
  <img src="${events.photo}" alt="Card image cap" class="img-fluid">
  <div class="card-body">
    <h5 class="card-title"><strong>${events.name}</strong></h5>
    <p class="card-text">${events.desc}</p>
  </div>
  </div>
  </div>
  `;
  
  }
document.getElementById("newevents").click();
function oldevents(){
    i=0;
    console.log("hi");
document.getElementById("app").innerHTML = `<br>
<div class= "container">
<div class = "row">
  ${oldeventsData.map(EventTemplate).join("")} </div>
`;
document.getElementById("newevents").style.borderBottom= "5px solid #ffffff";
  document.getElementById("oldevents").style.borderBottom= "5px solid #f15a42";
}

function newevents(){
  i=0;
    console.log("hi");
document.getElementById("app").innerHTML = ` <br>
<div class= "container">
<div class="row">

  ${neweventsData.map(EventTemplate).join("")} </div></div></div></div></div>
`;
document.getElementById("oldevents").style.borderBottom= "5px solid #ffffff";
document.getElementById("newevents").style.borderBottom= "5px solid #f15a42";
}
