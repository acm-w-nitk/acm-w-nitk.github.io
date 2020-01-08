// $.getJSON('https://raw.githubusercontent.com/yashkumar0707/learngit/master/testjson.json', function(data) {
//     console.log("hi")
//     var a=data.name
//     console.log(a)
// })


var rawbase = 'https://raw.githubusercontent.com/';
var jsonloc = 'acm-w-nitk/acm-w-nitk.github.io/events/opp.json';
function onRowClick(tableId, callback) {
  var table = document.getElementById(tableId),
      rows = table.getElementsByTagName("tr"),
      i;
  for (i = 0; i < rows.length; i++) {
      table.rows[i].onclick = function (row) {
          return function () {
              callback(row);
          };
      }(table.rows[i]);
  }
};



$.getJSON(rawbase + jsonloc, function( data ) {
  console.log(data.length);
  var list ='';
  $.each(data,function(key,value){
      list += '<tbody>'
      list += '<tr class ="breakrow" id="breakrow">'
      list += '<td>' +value.name+'</td>'
      list += '<td>'+value.organiser +'</td>'
      list += '<td>'+value.typeOfEvent +'</td>'
      list += '<div class="drop">'
      list += '<tr class="datarow" style="display:none;">'
      list += '<td> Awards Prizes Benefits </td>'
      list += '<td >' + value.awardsPrizesBenefits +'</td>'
      list += '<td></td>'
      list += '</tr>'
      list += '<tr class="datarow" style="display:none;">'
      list += '<td> Event Domain Tags </td>'
      list += '<td >' + value.eventDomaintags +'</td>'
      list += '<td></td>'
      list += '</tr>'
      list += '<tr class="datarow" style="display:none;">'
      list += '<td> Website </td>'
      list += '<td > <a href="'+value.website+'">' + value.website +'</td>'
      list += '<td></td>'
      list += '</tr>'
      list += '<tr class="datarow" style="display:none;">'
      list += '<td> Eligibility </td>'
      list += '<td >' + value.eligibility +'</td>'
      list += '<td></td>'
      list += '</tr>'
      list += '<tr class="datarow" style="display:none;">'
      list += '<td> Description </td>'
      list += '<td >' + value.description +'</td>'
      list += '<td></td>'
      list += '</tr>'
      list += '</div>'
      list += '</tr>'
  });
  $('#tbl').append(list)

 
 //do what you want with data
});

   onRowClick("tbl", function (row){
    var value = row.getElementsByTagName("td")[0].innerHTML;
    console.log("value>>", value);
  });


$('#search_input').keyup(function(){
  search_table($(this).val())
});

function search_table(value){
  $('#tbl tr.breakrow').each(function(){
    var found='false';
    $(this).each(function(){
      
      if($(this).text().toLowerCase().indexOf(value.toLowerCase())>=0)
      { 
        console.log("yes")
        found='true';
      }
    })
    if(found == 'true')
    {
      $(this).show()
    }
    else
    {
      $(this).hide()
    }
  })
}
$('#tbl').on('click', 'tr.breakrow',function(){
  $(this).nextUntil('tr.breakrow').slideToggle(200);
  console.log(this)
  if(this.style.background == "" || this.style.background =="white") {
    $(this).css('background', 'lightgrey');
}
else {
    $(this).css('background', '#f0f3f4');
}
});

var textWrapper = document.querySelector('.heading');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.heading .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.heading',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });