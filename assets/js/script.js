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

    $('.saveBtn').on('click', function () {

        let message = $(this).parent().prev().children('input').val();
        let label = $(this).parent().prev().children('input').attr('id');
        localStorage.setItem(label, message);
    })

    $('.clearBtn').on('click', function () {
        $(this).parent().prev().children('input').val("");
        deleteItems();
    })

    function deleteItems() {
        localStorage.clear();
    }

});

