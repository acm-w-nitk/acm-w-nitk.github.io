const oldeventsData = [
  { 
    id:1,
    name: "Event 1",
    desc: "An event description is copy that aims to tell your potential attendees what will be happening at the event",
    photo: "../images/event1.jpg"
  },
  {
    id:2,
    name: "Event 2",
    desc: "Good event descriptions can drive attendance to events and also lead to more media coverage",
    photo: "../images/event2.jpg"
  },
  {
    id:3,
    name: "Event 3",
    desc: "ent Pages with Stand Out Copy to Inspire You. ... To get you started, we’ve compiled 10 examples of Eventbrite events with excellent copy to provide the inspiration you need to get scribbling! (p.s. Don’t forget to also download our Ultimate Guide to Copywriting for Events for a",
    photo: "../images/event3.jpg"
  }
];

const neweventsData = [
  {
    id:1,
    name: "Event 11",
    desc: "An event description is copy that aims to tell your potential attendees what will be happening at the event",
    photo: "../images/event1.jpg"
  },
  {
    id:2,
    name: "Event 22",
    desc: "Good event descriptions can drive attendance to events and also lead to more media coverage",
    photo: "../images/event2.jpg"
  },
  {
    id:3,
    name: "Event 33",
    desc: "ent Pages with Stand Out Copy to Inspire You. ... To get you started, we’ve compiled 10 examples of Eventbrite events with excellent copy to provide the inspiration you need to get scribbling! (p.s. Don’t forget to also download our Ultimate Guide to Copywriting for Events for a",
    photo: "../images/event3.jpg"
  },
  { 
    id:4,
    name: "Event 33",
    desc: "ent Pages with Stand Out Copy to Inspire You. ... To get you started, we’ve compiled 10 examples of Eventbrite events with excellent copy to provide the inspiration you need to get scribbling! (p.s. Don’t forget to also download our Ultimate Guide to Copywriting for Events for a",
    photo: "../images/event3.jpg"
  },
{
  id:1,
  name: "Event 1",
  desc: "An event description is copy that aims to tell your potential attendees what will be happening at the event",
  photo: "../images/event1.jpg"
},
{
  id:2,
  name: "Event 2",
  desc: "Good event descriptions can drive attendance to events and also lead to more media coverage",
  photo: "../images/event2.jpg"
},
{
  id:3,
  name: "Event 3",
  desc: "ent Pages with Stand Out Copy to Inspire You. ... To get you started, we’ve compiled 10 examples of Eventbrite events with excellent copy to provide the inspiration you need to get scribbling! (p.s. Don’t forget to also download our Ultimate Guide to Copywriting for Events for a",
  photo: "../images/event3.jpg"
}
];


function EventTemplate(events) {
  return `
  <div class="card col-md-4 col-sm-12> 
  <div class="card">
  <img src="${events.photo}" alt="Card image cap" class="img-fluid">
  <div class="card-body">
    <h5 class="card-title">${events.name}</h5>
    <p class="card-text">${events.desc}</p>
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
}

function newevents(){
  i=0;
    console.log("hi");
document.getElementById("app").innerHTML = ` <br>
<div class= "container">
<div class="row">

  ${neweventsData.map(EventTemplate).join("")} </div></div></div></div></div>
`;
}
