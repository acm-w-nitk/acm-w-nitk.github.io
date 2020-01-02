const members = [
    { 
      id:1,
      name: "M K Apoorva",
      desc: "Chair",
      photo: "images/apoorva.jpg",
      facebook:"https://www.facebook.com/profile.php?id=100018343548473",
      linkedin:"https://www.linkedin.com/in/apoorva-m-k-b23406169/"
    },
    {
      id:2,
      name: "Archita Sajjan",
      desc: "Vice-Chair",
      photo: "images/archita.jpeg",
      facebook:"https://en-gb.facebook.com/people/Archita-Sajjan/100019373504599",
      linkedin:"https://www.linkedin.com/in/archita-sajjan-a44410160/",
    },
    {
      id:3,
      name: "Subham Chakraborty",
      desc: "Mentorship Coordinator",
      photo: "images/subham.jpg",
      linkedin:"https://www.linkedin.com/in/subham-chakraborty-653226196/",
      facebook:"https://www.facebook.com/acmwnitk/"
    },
    {
      id:4,
      name: "Nivedhya Girish",
      desc: "Social Media Coordinator",
      photo: "images/nivedhya.jpg",
      linkedin:"https://www.linkedin.com/in/nivedhya-girish-8919b4198",
      facebook:"https://www.facebook.com/acmwnitk/"
    },
    {
      id:5,
      name: "Saahitya",
      desc: "Social Media Coordinator",
      photo: "images/dummy.jpg",
      linkedin:"https://www.linkedin.com/company/acm-w-nitk/",
      facebook:"https://www.facebook.com/acmwnitk/"
  
    },
    {
      id:6,
      name: "Yash Kumar Gupta",
      desc: "Website Coordinator",
      photo: "images/yash.jpg",
      linkedin:"https://www.linkedin.com/in/yash-kumar-gupta-41a931143",
      facebook:"https://www.facebook.com/yash.gupta.353803"
    }
  ];
  
  
  
  function EventTemplate(events) {
    return `
    <div class="card col-md-4 col-sm-12> 
    <div class="card" align="center">
    <img src="${events.photo}" class="rounded-circle" alt="Vice Chair" style="margin:auto;width:60%">
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
    ${members.map(EventTemplate).join("")} </div></div></div></div></div>
  `;
  
  