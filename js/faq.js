const faq = [
    { 
        id:1,
        question:"how often do you ?",
        answer:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas deleniti molestias necessitatibus quaerat quos incidunt! Quas officiis repellat dolore omnis nihil quo, ratione cupiditate! Sed, deleniti, recusandae! Animi, sapiente, nostrum?"
      },
      { 
        id:2,
        question:"how often do you watch netflix?",
        answer:"netflix Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas deleniti molestias necessitatibus quaerat quos incidunt! Quas officiis repellat dolore omnis nihil quo, ratione cupiditate! Sed, deleniti, recusandae! Animi, sapiente, nostrum?"
      },
      { 
        id:3,
        question:"how often do you use insta?",
        answer:"insta Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas deleniti molestias necessitatibus quaerat quos incidunt! Quas officiis repellat dolore omnis nihil quo, ratione cupiditate! Sed, deleniti, recusandae! Animi, sapiente, nostrum?"
      },
  ];

  
  
  function EventTemplate(events) {
    return `
    <button class="accordion">${events.question}</button>
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