// $.getJSON('https://raw.githubusercontent.com/yashkumar0707/learngit/master/testjson.json', function(data) {
//     console.log("hi")
//     var a=data.name
//     console.log(a)
// })


var rawbase = 'https://raw.githubusercontent.com/';
var jsonloc = 'yashkumar0707/learngit/master/5.json';

$.getJSON(rawbase + jsonloc, function( data ) {
   console.log(data.length);
   var list ='';
   $.each(data,function(key,value){
       list += '<tr>';
       list += '<td>' +value.name+'</td>'
       list += '<td>'+value.body+'</td>'
       list += '</tr>'
   });
   $('#tbl').append(list)
  //do what you want with data
});


$('#search').keyup(function(){
  search_table($(this).val())
});

function search_table(value){
  $('#tbl tr').each(function(){
    var found='false';
    $(this).each(function(){
      console.log($(this).text())
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