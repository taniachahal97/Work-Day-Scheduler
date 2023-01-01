// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  
  var textInput1 = $('#hour-9').children().eq(1); //target textArea
  //var textAreaDesc = $('#hour-9').children().eq(1).text(); // textArea value
  

  var saveButton1 = $('#hour-9').children().eq(2); //target save button
  console.log(saveButton1);

  var eventDesc1 = localStorage.getItem('hour9');

  saveButton1.on('click',function(){
    var desc1 = $('#hour-9').children().eq(1).val();
    //console.log(textAreaDesc); 
    console.log(desc1)
    localStorage.setItem('hour9', desc1);
    $('#appointment-message').text('Appointment Added to local Storage')
    //renderEvents();
  })

  function renderEvents(){
    textInput1.text(eventDesc1);
    textInput2.text(eventDesc2);
    textInput3.text(eventDesc3);
    textInput4.text(eventDesc4);
    textInput5.text(eventDesc5);
    textInput6.text(eventDesc6);
    textInput7.text(eventDesc7);
    textInput8.text(eventDesc8);
    textInput9.text(eventDesc9);
  }

  var textInput2 = $('#hour-10').children().eq(1); //target textArea
  //var textAreaDesc = $('#hour-9').children().eq(1).text(); // textArea value
  

  var saveButton2 = $('#hour-10').children().eq(2); //target save button

  var eventDesc2 = localStorage.getItem('hour10');

  saveButton2.on('click',function(){
    var desc2 = $('#hour-10').children().eq(1).val();
    //console.log(textAreaDesc); 
    console.log(desc2)
    localStorage.setItem('hour10', desc2);
    $('#appointment-message').text('Appointment Added to local Storage')
    //renderEvents();
  })

  var textInput3 = $('#hour-11').children().eq(1); //target textArea
  //var textAreaDesc = $('#hour-9').children().eq(1).text(); // textArea value
  

  var saveButton3 = $('#hour-11').children().eq(2); //target save button

  var eventDesc3 = localStorage.getItem('hour11');

  saveButton3.on('click',function(){
    var desc3 = $('#hour-11').children().eq(1).val();
    //console.log(textAreaDesc); 
    console.log(desc3)
    localStorage.setItem('hour11', desc3);
    $('#appointment-message').text('Appointment Added to local Storage')
    //renderEvents();
  })

  var textInput4 = $('#hour-12').children().eq(1); //target textArea
  //var textAreaDesc = $('#hour-9').children().eq(1).text(); // textArea value
  

  var saveButton4 = $('#hour-12').children().eq(2); //target save button

  var eventDesc4 = localStorage.getItem('hour12');

  saveButton4.on('click',function(){
    var desc4 = $('#hour-12').children().eq(1).val();
    //console.log(textAreaDesc); 
    console.log(desc4)
    localStorage.setItem('hour10', desc4);
    $('#appointment-message').text('Appointment Added to local Storage')
    //renderEvents();
  })

  var textInput5 = $('#hour-1').children().eq(1); //target textArea
  //var textAreaDesc = $('#hour-9').children().eq(1).text(); // textArea value
  

  var saveButton5 = $('#hour-1').children().eq(2); //target save button

  var eventDesc5 = localStorage.getItem('hour1');

  saveButton5.on('click',function(){
    var desc5 = $('#hour-1').children().eq(1).val();
    //console.log(textAreaDesc); 
    console.log(desc5)
    localStorage.setItem('hour1', desc5);
    $('#appointment-message').text('Appointment Added to local Storage')
    //renderEvents();
  })

  var textInput6 = $('#hour-2').children().eq(1); //target textArea
  //var textAreaDesc = $('#hour-9').children().eq(1).text(); // textArea value
  

  var saveButton6 = $('#hour-2').children().eq(2); //target save button

  var eventDesc6 = localStorage.getItem('hour2');

  saveButton6.on('click',function(){
    var desc6 = $('#hour-2').children().eq(1).val();
    //console.log(textAreaDesc); 
    console.log(desc6)
    localStorage.setItem('hour2', desc6);
    $('#appointment-message').text('Appointment Added to local Storage')
    //renderEvents();
  })

  var textInput7 = $('#hour-3').children().eq(1); //target textArea
  //var textAreaDesc = $('#hour-9').children().eq(1).text(); // textArea value
  

  var saveButton7 = $('#hour-3').children().eq(2); //target save button

  var eventDesc7 = localStorage.getItem('hour3');

  saveButton7.on('click',function(){
    var desc7 = $('#hour-3').children().eq(1).val();
    //console.log(textAreaDesc); 
    console.log(desc7)
    localStorage.setItem('hour3', desc7);
    $('#appointment-message').text('Appointment Added to local Storage')
    //renderEvents();
  })

  var textInput8 = $('#hour-4').children().eq(1); //target textArea
  //var textAreaDesc = $('#hour-9').children().eq(1).text(); // textArea value
  

  var saveButton8 = $('#hour-4').children().eq(2); //target save button

  var eventDesc8 = localStorage.getItem('hour4');

  saveButton8.on('click',function(){
    var desc8 = $('#hour-4').children().eq(1).val();
    //console.log(textAreaDesc); 
    console.log(desc8)
    localStorage.setItem('hour4', desc8);
    $('#appointment-message').text('Appointment Added to local Storage')
    //renderEvents();
  })

  var textInput9 = $('#hour-5').children().eq(1); //target textArea
  //var textAreaDesc = $('#hour-9').children().eq(1).text(); // textArea value
  

  var saveButton9 = $('#hour-5').children().eq(2); //target save button

  var eventDesc9 = localStorage.getItem('hour5');

  saveButton9.on('click',function(){
    var desc9 = $('#hour-5').children().eq(1).val();
    //console.log(textAreaDesc); 
    console.log(desc9)
    localStorage.setItem('hour5', desc9);
    $('#appointment-message').text('Appointment Added to local Storage')
    //renderEvents();
  })


  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  var currentHour = dayjs().format("H").toString();
  var currentHourInt = parseInt(currentHour);

  if(currentHourInt >= 13 && currentHourInt <= 17){

    var hour = dayjs().format("H A").toString();
    var hourArray = hour.split(" "); // ["13", "PM"]

    var time = hourArray[0]
    var timeInt = parseInt(time);
    console.log(timeInt)

    newTime = timeInt % 12 

    hourArray[0] = newTime;

    console.log(hourArray) //["1", "PM"]

    var newHour = hourArray.join("");
    console.log(newHour)

    

    
    var value5 = $('#hour-1').children().eq(0).text()

    if(newHour == value5){
      $('#hour-9').addClass('row');
      $('#hour-9').addClass('past');

      $('#hour-10').addClass('row');
      $('#hour-10').addClass('past');

      $('#hour-11').addClass('row');
      $('#hour-12').addClass('row');
      $('#hour-1').addClass('row');
      $('#hour-2').addClass('row');
      $('#hour-3').addClass('row');
      $('#hour-4').addClass('row');
      $('#hour-5').addClass('row');

      $('#hour-11').addClass('past');
      $('#hour-12').addClass('past');
      $('#hour-1').addClass('present');
      $('#hour-2').addClass('future');
      $('#hour-3').addClass('future');
      $('#hour-4').addClass('future');
      $('#hour-5').addClass('future');

    }



    var value6 = $('#hour-2').children().eq(0).text()

    if(newHour == value6){
      $('#hour-9').addClass('row');
      $('#hour-9').addClass('past');

      $('#hour-10').addClass('row');
      $('#hour-10').addClass('past');

      $('#hour-11').addClass('row');
      $('#hour-12').addClass('row');
      $('#hour-1').addClass('row');
      $('#hour-2').addClass('row');
      $('#hour-3').addClass('row');
      $('#hour-4').addClass('row');
      $('#hour-5').addClass('row');

      $('#hour-11').addClass('past');
      $('#hour-12').addClass('past');
      $('#hour-1').addClass('past');
      $('#hour-2').addClass('present');
      $('#hour-3').addClass('future');
      $('#hour-4').addClass('future');
      $('#hour-5').addClass('future');

    }

    var value7 = $('#hour-3').children().eq(0).text()
    if(newHour == value7){
      $('#hour-9').addClass('row');
      $('#hour-9').addClass('past');

      $('#hour-10').addClass('row');
      $('#hour-10').addClass('past');

      $('#hour-11').addClass('row');
      $('#hour-12').addClass('row');
      $('#hour-1').addClass('row');
      $('#hour-2').addClass('row');
      $('#hour-3').addClass('row');
      $('#hour-4').addClass('row');
      $('#hour-5').addClass('row');

      $('#hour-11').addClass('past');
      $('#hour-12').addClass('past');
      $('#hour-1').addClass('past');
      $('#hour-2').addClass('past');
      $('#hour-3').addClass('present');
      $('#hour-4').addClass('future');
      $('#hour-5').addClass('future');

    }
    

    var value8 = $('#hour-4').children().eq(0).text()
    if(newHour == value8){
      $('#hour-9').addClass('row');
      $('#hour-9').addClass('past');

      $('#hour-10').addClass('row');
      $('#hour-10').addClass('past');

      $('#hour-11').addClass('row');
      $('#hour-12').addClass('row');
      $('#hour-1').addClass('row');
      $('#hour-2').addClass('row');
      $('#hour-3').addClass('row');
      $('#hour-4').addClass('row');
      $('#hour-5').addClass('row');

      $('#hour-11').addClass('past');
      $('#hour-12').addClass('past');
      $('#hour-1').addClass('past');
      $('#hour-2').addClass('past');
      $('#hour-3').addClass('past');
      $('#hour-4').addClass('present');
      $('#hour-5').addClass('future');

    }

    var value9 = $('#hour-5').children().eq(0).text()
    if(newHour == value9){
      $('#hour-9').addClass('row');
      $('#hour-9').addClass('past');

      $('#hour-10').addClass('row');
      $('#hour-10').addClass('past');

      $('#hour-11').addClass('row');
      $('#hour-12').addClass('row');
      $('#hour-1').addClass('row');
      $('#hour-2').addClass('row');
      $('#hour-3').addClass('row');
      $('#hour-4').addClass('row');
      $('#hour-5').addClass('row');

      $('#hour-11').addClass('past');
      $('#hour-12').addClass('past');
      $('#hour-1').addClass('past');
      $('#hour-2').addClass('past');
      $('#hour-3').addClass('past');
      $('#hour-4').addClass('past');
      $('#hour-5').addClass('present');

    }
  }
  
  
  
  if(currentHourInt > 17 && currentHourInt < 24){
    $('#hour-9').addClass('row');
    $('#hour-10').addClass('row');
    $('#hour-11').addClass('row');
    $('#hour-12').addClass('row');
    $('#hour-1').addClass('row');
    $('#hour-2').addClass('row');
    $('#hour-3').addClass('row');
    $('#hour-4').addClass('row');
    $('#hour-5').addClass('row');

    $('#hour-9').addClass('past');
    $('#hour-10').addClass('past');
    $('#hour-11').addClass('past');
    $('#hour-12').addClass('past');
    $('#hour-1').addClass('past');
    $('#hour-2').addClass('past');
    $('#hour-3').addClass('past');
    $('#hour-4').addClass('past');
    $('#hour-5').addClass('past');
  }

  if(currentHourInt >= 0 && currentHourInt < 9){
    $('#hour-9').addClass('row');
    $('#hour-10').addClass('row');
    $('#hour-11').addClass('row');
    $('#hour-12').addClass('row');
    $('#hour-1').addClass('row');
    $('#hour-2').addClass('row');
    $('#hour-3').addClass('row');
    $('#hour-4').addClass('row');
    $('#hour-5').addClass('row');

    $('#hour-9').addClass('future');
    $('#hour-10').addClass('future');
    $('#hour-11').addClass('future');
    $('#hour-12').addClass('future');
    $('#hour-1').addClass('future');
    $('#hour-2').addClass('future');
    $('#hour-3').addClass('future');
    $('#hour-4').addClass('future');
    $('#hour-5').addClass('future');
  }

  if(currentHourInt >= 9 && currentHourInt <= 12){
    var hour = dayjs().format("HA").toString();

    var value1 = $('#hour-9').children().eq(0).text()

  
    if(hour == value1){
      $('#hour-9').addClass('row');
      $('#hour-9').addClass('present');

      $('#hour-10').addClass('row');
      $('#hour-11').addClass('row');
      $('#hour-12').addClass('row');
      $('#hour-1').addClass('row');
      $('#hour-2').addClass('row');
      $('#hour-3').addClass('row');
      $('#hour-4').addClass('row');
      $('#hour-5').addClass('row');


      $('#hour-10').addClass('future');
      $('#hour-11').addClass('future');
      $('#hour-12').addClass('future');
      $('#hour-1').addClass('future');
      $('#hour-2').addClass('future');
      $('#hour-3').addClass('future');
      $('#hour-4').addClass('future');
      $('#hour-5').addClass('future');

    }

    var value2 = $('#hour-10').children().eq(0).text()

    if(hour == value2){
      $('#hour-9').addClass('row');
      $('#hour-9').addClass('past');

      $('#hour-10').addClass('row');
      $('#hour-10').addClass('present');

      $('#hour-11').addClass('row');
      $('#hour-12').addClass('row');
      $('#hour-1').addClass('row');
      $('#hour-2').addClass('row');
      $('#hour-3').addClass('row');
      $('#hour-4').addClass('row');
      $('#hour-5').addClass('row');

      $('#hour-11').addClass('future');
      $('#hour-12').addClass('future');
      $('#hour-1').addClass('future');
      $('#hour-2').addClass('future');
      $('#hour-3').addClass('future');
      $('#hour-4').addClass('future');
      $('#hour-5').addClass('future');
    }



    var value3 = $('#hour-11').children().eq(0).text()

    if(hour == value3){

      $('#hour-9').addClass('row');
      $('#hour-9').addClass('past');

      $('#hour-10').addClass('row');
      $('#hour-10').addClass('past');

      $('#hour-11').addClass('row');
      $('#hour-12').addClass('row');
      $('#hour-1').addClass('row');
      $('#hour-2').addClass('row');
      $('#hour-3').addClass('row');
      $('#hour-4').addClass('row');
      $('#hour-5').addClass('row');

      $('#hour-11').addClass('present');
      $('#hour-12').addClass('future');
      $('#hour-1').addClass('future');
      $('#hour-2').addClass('future');
      $('#hour-3').addClass('future');
      $('#hour-4').addClass('future');
      $('#hour-5').addClass('future');


    }
    var value4 = $('#hour-12').children().eq(0).text()

    if(hour == value4){
      $('#hour-9').addClass('row');
      $('#hour-9').addClass('past');

      $('#hour-10').addClass('row');
      $('#hour-10').addClass('past');

      $('#hour-11').addClass('row');
      $('#hour-12').addClass('row');
      $('#hour-1').addClass('row');
      $('#hour-2').addClass('row');
      $('#hour-3').addClass('row');
      $('#hour-4').addClass('row');
      $('#hour-5').addClass('row');

      $('#hour-11').addClass('past');
      $('#hour-12').addClass('present');
      $('#hour-1').addClass('future');
      $('#hour-2').addClass('future');
      $('#hour-3').addClass('future');
      $('#hour-4').addClass('future');
      $('#hour-5').addClass('future');
    }


  }




  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

  
  

  // TODO: Add code to display the current date in the header of the page.
  var today = dayjs().format("dddd, MMMM DD, YYYY");
   $('#currentDay').text(today);

renderEvents();

});




