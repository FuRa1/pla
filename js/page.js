$(function () {

    var $button = $('#myButton');
    var $frame = $('#frame');

    $button.on('click', plus);


    var idArray = [{id: 293673}, {id: 298300}, {id: 323788}, {id: 291056}, {id: 308629}, {id: 311156}, {id: 308546}, {id: 318206}, {id:332758}, {id:318902}];

    function redirect(index) {

        var url = "http://www.x-bikers.ru/bikera/respect.php?id=" + idArray[index].id + "&act=1";

        setTimeout(function () {
            $frame.attr('src',url);
        }, 5000 * index)
    }

    function plus() {
        for (var i = 0; i < idArray.length; i++) {
            redirect(i);
        }
    }


});