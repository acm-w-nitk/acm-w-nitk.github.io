const oldeventsData = [
    {
      name: "Event 1",
      desc: "An event description is copy that aims to tell your potential attendees what will be happening at the event",
      photo: "../images/event1.jpg"
    },
    {
      name: "Event 2",
      desc: "Good event descriptions can drive attendance to events and also lead to more media coverage",
      photo: "../images/event2.jpg"
    },
    {
      name: "Event 3",
      desc: "ent Pages with Stand Out Copy to Inspire You. ... To get you started, we’ve compiled 10 examples of Eventbrite events with excellent copy to provide the inspiration you need to get scribbling! (p.s. Don’t forget to also download our Ultimate Guide to Copywriting for Events for a",
      photo: "../images/event3.jpg"
    }
  ];

  const neweventsData = [
    {
      name: "Event 11",
      desc: "An event description is copy that aims to tell your potential attendees what will be happening at the event",
      photo: "../images/event1.jpg"
    },
    {
      name: "Event 22",
      desc: "Good event descriptions can drive attendance to events and also lead to more media coverage",
      photo: "../images/event2.jpg"
    },
    {
      name: "Event 33",
      desc: "ent Pages with Stand Out Copy to Inspire You. ... To get you started, we’ve compiled 10 examples of Eventbrite events with excellent copy to provide the inspiration you need to get scribbling! (p.s. Don’t forget to also download our Ultimate Guide to Copywriting for Events for a",
      photo: "../images/event2.jpg"
    }
  ];
  
  
  function EventTemplate(events) {
    return `
      <div class="animal">
      <img class="pet-photo" src="${events.photo}">
      <h2 class="pet-name">${events.name} </h2>
      <p><strong>Description:</strong> ${events.desc}</p>
      </div>
    `;
  }
  function oldevents(){
      console.log("hi");
  document.getElementById("app").innerHTML = `
    ${oldeventsData.map(EventTemplate).join("")}
  `;
  }

  function newevents(){
      console.log("hi");
  document.getElementById("app").innerHTML = `
    ${neweventsData.map(EventTemplate).join("")}
  `;
  }