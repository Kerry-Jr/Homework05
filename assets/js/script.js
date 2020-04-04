$(document).ready(function () {


    let timeDate = moment().format("LLLL")
    $("#currentDay").text(timeDate);




    function getStorage() {
        for (let i = 9; i < 17; i++) {
            let refreshData = localStorage.getItem(`input-${i}`);
            $(`#input-${i}`).val(refreshData);
        }
    }
    getStorage();

    function timeColor() {
        let currentTime = moment().format('H');
        let $timeData = document.querySelectorAll('.timeData');
        // console.log($timeData);
        for (let i = 0; i < $timeData.length; i++) {
            let value = $($timeData[i]).data('time');
            let target = $($timeData[i]).children('.inputDiv').children('input');
            if (currentTime == value) {
                $(target).addClass('bg-warning');
            } else if (currentTime < value) {
                $(target).addClass('future');
            } else if (currentTime > value) {
                $(target).addClass('bg-primary text-white');
            } else {
                break;
            }

        }
    }

    timeColor();




    // $("#main").append("<div>")




    // $(".col").append("<input>This is an input tag</input>");


    // let $todoValue = $('#todo').val();






    // console.log($todoValue);


    // let $inputDiv = $('.inputDiv');
    // console.log($inputDiv);




    let $input9 = $('#input-9').val();
    let $input10 = $('#input-10').val();
    let $input11 = $('#input-11').val();
    let $input12 = $('#input-12').val();
    let $input1 = $('#input-1').val();

    let $input2 = $('#input-2').val();
    let $input3 = $('#input-3').val();
    let $input4 = $('#input-4').val();
    let $input5 = $('#input-5').val();

    // console.log($input10);


    //   for(let i = 0; i < 7; i++) {
    // let $inputEl = $('.col-8').append('<input>');

    $('.saveBtn').on('click', function () {

        let message = $(this).parent().prev().children('input').val();
        let label = $(this).parent().prev().children('input').attr('id');
        localStorage.setItem(label, message);
    })



$('.clearBtn').on('click', function (){
    $(this).parent().prev().children('input').val("");
    deleteItems();

})

// $(".clearBtn").click(function() {
//     $(this).closest('input').find("input[type=text], textarea").val("");


  function deleteItems(){
      localStorage.clear();
  }




function clearVal(){

}








});

    // $pEl.textContent = drinkList[i];
    // $div.appendChild($pEl);
    // or(let i = 0; i < drinkList.length; i++){
    //     let newDiv = $("<div>");
    //     newDiv.html(drinkList[i]);
    //     $("#drink-options").append(newDiv);
    //  }

    // const test = false;

    // const current = moment().format('MMMM D YYYY');

    // let currentHour24 = moment().format('H');
    // let currentHour12 = moment().format('h');

    // if (test) {
    //     currentHour24 = 13;
    //     currentHour12 = 1;
    // }


    // let $dateHeader = $('date');
    // $dateHeader.text(current);


// need to have input from user saved to local storage when saveBtn is click
// need to make on click events for saveBtn 
//each timeblock is color coded to indicate whether it is in the past, present, or future





/**
 * textContent
 *      pure text, like strings
 *      <p>, <div>, <button>
 *
 * value
 *      form fields
 *      <input>, <textarea>, <checkbox>
 *      mostly for reading content
 *
 * innerHTML
 *      other html elements
 *      when you want to put a
 *          <p>, <li>, <button>
 *      inside a
 *          <div>, <ul>
 */

// onclick on saveBtn 




