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
