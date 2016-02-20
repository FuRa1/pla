'use strict';
$(function () {

    var $button = $('#myButton');
    var $frame = $('#frame');

    $button.on('click', plus);


    var idArray = [{id: 293673}, {id: 298300}, {id: 323788}, {id: 291056}, {id: 308629}, {id: 311156}, {id: 308546}, {id: 318206}, {id:332758}, {id:318902}];


    function plus() {
        for (let i = 0; i < idArray.length; i++) {

            setTimeout(function () {
                var url = "http://www.x-bikers.ru/bikera/respect.php?id=" + idArray[i].id + "&act=1";
                $frame.attr('src',url);
            }, 5000 * i)
        }
    }


});