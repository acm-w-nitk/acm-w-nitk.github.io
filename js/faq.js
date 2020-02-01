const faq = [
      { 
        id:1,
        question:"Who are we?",
        answer:"ACM-W NITK is a student group that solely focuses on conducting events are programmes for women in NITK and beyond."
      },
      { 
        id:2,
        question:"How do I get involved?",
        answer:"ACM-W events are open to all women of NITK, irrespective of clubs, branches, years etc. However, membership in ACM-W is currently restricted only to members of ACM-NITK."
      },
      { 
        id:3,
        question:"What are the benefits of being in ACM-W?",
        answer:"ACM-W promotes a wide range of activities that are often meant to increase exposure to more information by holding sessions with industry professionals, inter-college events, senior-junior interactions and much more. Being a member of ACM-W also allows you to organise such events, polish your leadership skills and build your network. Other benefits include - sponsored travel to GHCI, GHC scholarships, ACM digital library access and much more."
      },
  ];

  
  
  function EventTemplate(events) {
    return `
    <button style="background: #cfe5cc;" class="accordion">${events.question}</button>
    <div class="accordion-content">
      <p>${events.answer}
      </p>
    </div>
    `;
    
    }
  document.getElementById("app1").innerHTML = ` <br>
    ${faq.map(EventTemplate).join("")}
  `;
  
  

  var accordions = document.getElementsByClassName("accordion");
console.log(accordions);
for (var i = 0; i < accordions.length; i++) {
  accordions[i].onclick = function() {
    this.classList.toggle('is-open');

    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      // accordion is currently open, so close it
      content.style.maxHeight = null;
    } else {
      // accordion is currently closed, so open it
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }
}