
// // $.getJSON('https://raw.githubusercontent.com/yashkumar0707/learngit/master/testjson.json', function(data) {
// //     console.log("hi")
// //     var a=data.name
// //     console.log(a)
// // })


// // var rawbase = 'https://raw.githubusercontent.com/';
// // var jsonloc = 'acm-w-nitk/acm-w-nitk.github.io/events/opp.json';
// // function onRowClick(tableId, callback) {
// //   var table = document.getElementById(tableId),
// //       rows = table.getElementsByTagName("tr"),
// //       i;
// //   for (i = 0; i < rows.length; i++) {
// //       table.rows[i].onclick = function (row) {
// //           return function () {
// //               callback(row);
// //           };
// //       }(table.rows[i]);
// //   }
// // };



// // $.getJSON(rawbase + jsonloc, function( data ) {
// //   console.log(data.length);
// //   var list ='';
// //   $.each(data,function(key,value){
// //       list += '<tbody>'
// //       list += '<tr class ="breakrow" id="breakrow">'
// //       list += '<td>' +value.name+'</td>'
// //       list += '<td>'+value.organiser +'</td>'
// //       list += '<td>'+value.typeOfEvent +'</td>'
// //       list += '<div class="drop">'
// //       list += '<tr class="datarow" style="display:none;">'
// //       list += '<td> Awards Prizes Benefits </td>'
// //       list += '<td >' + value.awardsPrizesBenefits +'</td>'
// //       list += '<td></td>'
// //       list += '</tr>'
// //       list += '<tr class="datarow" style="display:none;">'
// //       list += '<td> Event Domain Tags </td>'
// //       list += '<td >' + value.eventDomaintags +'</td>'
// //       list += '<td></td>'
// //       list += '</tr>'
// //       list += '<tr class="datarow" style="display:none;">'
// //       list += '<td> Website </td>'
// //       list += '<td > <a href="'+value.website+'">' + value.website +'</td>'
// //       list += '<td></td>'
// //       list += '</tr>'
// //       list += '<tr class="datarow" style="display:none;">'
// //       list += '<td> Eligibility </td>'
// //       list += '<td >' + value.eligibility +'</td>'
// //       list += '<td></td>'
// //       list += '</tr>'
// //       list += '<tr class="datarow" style="display:none;">'
// //       list += '<td> Description </td>'
// //       list += '<td >' + value.description +'</td>'
// //       list += '<td></td>'
// //       list += '</tr>'
// //       list += '</div>'
// //       list += '</tr>'
// //   });
// //   $('#tbl').append(list)

// // var rawbase = 'https://raw.githubusercontent.com/';
// // var jsonloc = 'acm-w-nitk/acm-w-nitk.github.io/events/opp.json';
// // function onRowClick(tableId, callback) {
// //   var table = document.getElementById(tableId),
// //       rows = table.getElementsByTagName("tr"),
// //       i;
// //   for (i = 0; i < rows.length; i++) {
// //       table.rows[i].onclick = function (row) {
// //           return function () {
// //               callback(row);
// //           };
// //       }(table.rows[i]);
// //   }
// // };



// // $.getJSON(rawbase + jsonloc, function( data ) {
// //   console.log(data.length);
// //   var list ='';
// //   $.each(data,function(key,value){
// //       list += '<tbody>'
// //       list += '<tr class ="breakrow" id="breakrow">'
// //       list += '<td>' +value.name+'</td>'
// //       list += '<td>'+value.organiser +'</td>'
// //       list += '<td>'+value.typeOfEvent +'</td>'
// //       list += '<div class="drop">'
// //       list += '<tr class="datarow" style="display:none;">'
// //       list += '<td> Awards Prizes Benefits </td>'
// //       list += '<td >' + value.awardsPrizesBenefits +'</td>'
// //       list += '<td></td>'
// //       list += '</tr>'
// //       list += '<tr class="datarow" style="display:none;">'
// //       list += '<td> Event Domain Tags </td>'
// //       list += '<td >' + value.eventDomaintags +'</td>'
// //       list += '<td></td>'
// //       list += '</tr>'
// //       list += '<tr class="datarow" style="display:none;">'
// //       list += '<td> Website </td>'
// //       list += '<td > <a href="'+value.website+'">' + value.website +'</td>'
// //       list += '<td></td>'
// //       list += '</tr>'
// //       list += '<tr class="datarow" style="display:none;">'
// //       list += '<td> Eligibility </td>'
// //       list += '<td >' + value.eligibility +'</td>'
// //       list += '<td></td>'
// //       list += '</tr>'
// //       list += '<tr class="datarow" style="display:none;">'
// //       list += '<td> Description </td>'
// //       list += '<td >' + value.description +'</td>'
// //       list += '<td></td>'
// //       list += '</tr>'
// //       list += '</div>'
// //       list += '</tr>'
// //   });
// //   $('#tbl').append(list)


 
// //  //do what you want with data
// // });

// //    onRowClick("tbl", function (row){
// //     var value = row.getElementsByTagName("td")[0].innerHTML;
// //     console.log("value>>", value);
// //   });


// $('#search_input').keyup(function(){
//   search_table($(this).val())
// });
// $('#myInput').on( 'keyup', function () {
//   table.search( this.value ).draw();
// } );
// function search_table(value){
//   $('#data-table').each(function(){
//     var found='false';
//     $(this).each(function(){
      
//       if($(this).text().toLowerCase().indexOf(value.toLowerCase())>=0)
//       { 
//         console.log("yes")
//         found='true';
//       }
//     })
//     if(found == 'true')
//     {
//       $(this).show()
//     }
//     else
//     {
//       $(this).hide()
//     }
//   })
// }
// $('#tbl').on('click', 'tr.breakrow',function(){
//   $(this).nextUntil('tr.breakrow').slideToggle(200);
//   console.log(this)
//   if(this.style.background == "" || this.style.background =="white") {
//     $(this).css('background', 'lightgrey');
// }
// else {
//     $(this).css('background', '#f0f3f4');
// }
// });

// var textWrapper = document.querySelector('.heading');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// anime.timeline({loop: true})
//   .add({
//     targets: '.heading .letter',
//     opacity: [0,1],
//     easing: "easeInOutQuad",
//     duration: 2250,
//     delay: (el, i) => 150 * (i+1)
//   }).add({
//     targets: '.heading',
//     opacity: 0,
//     duration: 1000,
//     easing: "easeOutExpo",
//     delay: 1000
//   });




//   var table;
// $(document).ready(function(){  
//       table = $('#data-table').DataTable({  
//           "ajax"     : "https://raw.githubusercontent.com/yashkumar0707/learngit/master/data.json",  
//           "columns"     :     [  
//                  {     "data"     :     "name"     },  
//                {     "data"     :     "organiser"},  
//                {     "data"     :     "typeOfEvent"},  
//                {     "data"     :     "awardsPrizesBenefits"     },
//                {     "data"     :     "eventDomainTags"     },
//                {     "data"     :     "website",  
//                "render": function(data, type, row, meta){
//                 if(type === 'display'){
//                     data = '<a href="' + data + '">' + data + '</a>';
//                 }
    
//                 return data;
              
//               }
//             },
//                {     "data"     :     "applicationDate"     },
//                {     "data"     :     "eligibility"     },
//                {     "data"     :     "description"     }
//           ], 
//           "columnDefs" : [

//           ]
//      }); 
// });  
 
// function hidden3()
// {
//     console.log(table.column(3).visible())
//  	if(table.column(3).visible())
//     table.column(3).visible( false );
//     else
//     table.column(3).visible( true );
// }
// function hidden4()
// {
//     console.log(table.column(4).visible())
//  	if(table.column(4).visible())
//     table.column(4).visible( false );
//     else
//     table.column(4).visible( true );
// }
// function hidden5()
// {
//     console.log(table.column(5).visible())
//  	if(table.column(5).visible())
//     table.column(5).visible( false );
//     else
//     table.column(5).visible( true );
// }
// function hidden6()
// {
//     console.log(table.column(6).visible())
//  	if(table.column(6).visible())
//     table.column(6).visible( false );
//     else
//     table.column(6).visible( true );
// }
// function hidden7()
// {
//     console.log(table.column(7).visible())
//  	if(table.column(7).visible())
//     table.column(7).visible( false );
//     else
//     table.column(7).visible( true );
// }
// function hidden8()
// {
//     console.log(table.column(8).visible())
//  	if(table.column(8).visible())
//     table.column(8).visible( false );
//     else
//     table.column(8).visible( true );
// }



// function check3()
// {
//     hidden3()
// }
// function check4()
// {  
//     hidden4()
// }
// function check5()
// {  
//     hidden5()
// }
// function check6()
// { 
//     hidden6()
// }
// function check7()
// {  
//     hidden7()
// }
// function check8()
// {  
//     hidden8()
// }



/* Formatting function for row details - modify as you need */
function format ( d ) {
  // `d` is the original data object for the row
  return '<table cellpadding="5" cellspacing="0" border="0" style="width:100%;padding-left:50px;">'+
      '<tr>'+
          '<td>Awards, Prizes, Benifits</td>'+
          '<td>'+d.awardsPrizesBenefits+'</td>'+
      '</tr>'+
      '<tr>'+
          '<td>Event Domain Tags:</td>'+
          '<td>'+d.eventDomainTags+'</td>'+
      '</tr>'+
      '<tr>'+
          '<td>Website:</td>'+
          '<td > <a href="'+d.website+'">' + d.website +'</td>'+
      '</tr>'+
      '<tr>'+
          '<td>Application Date:</td>'+
          '<td>'+d.applicationDate+'<td>'+
      '</tr>'+
      '<tr>'+
          '<td>Eligibility:</td>'+
          '<td>'+d.eligibility+'<td>'+
      '</tr>'+
      '<tr>'+
      '<td>Description:</td>'+
      '<td>'+d.description+'<td>'+
  '</tr>'+

  '</table>';
}
var table;
$(document).ready(function() {
  table = $('#example').DataTable( {
      "ajax": "https://raw.githubusercontent.com/yashkumar0707/learngit/master/data.json",
      "responsive":true,

  "pagingType": "simple",
      "columns": [
          {
              "className":      'details-control',
              "orderable":      false,
              "data":           null,
              "defaultContent": ''
          },
          { "data": "name" },
          { "data": "organiser" },
          { "data": "typeOfEvent"},
      ],
      "order": [[1, 'asc']]
  } );
   
  // Add event listener for opening and closing details
  $('#example tbody').on('click', 'td.details-control', function () {
      var tr = $(this).closest('tr');
      var row = table.row( tr );

      if ( row.child.isShown() ) {
          // This row is already open - close it
          row.child.hide();
          tr.removeClass('shown');
      }
      else {
          // Open this row
          row.child( format(row.data()) ).show();
          tr.addClass('shown');
      }
  } );
} );


 $('#myInput').on( 'keyup', function () {
   table.search( this.value ).draw();
} );