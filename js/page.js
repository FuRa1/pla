$(function () {

    var $button = $('#myButton');

    $button.on('click', plus);


    function User(id) {
        this.id = id;
        this.link = "http://www.x-bikers.ru/bikera/respect.php?id=" + this.id + "&act=1";
    }

    var idArray = [{id: 293673}, {id: 298300}, {id: 323788}, {id: 291056}, {id: 308629}, {id: 311156}, {id: 308546}, {id: 318206}];

    function redirect(index) {

        var act = "&act=1";

        setTimeout(function () {
            window.open("http://www.x-bikers.ru/bikera/respect.php?id=" + idArray[index].id+act);
        }, 5000 * index)
    }

    function plus() {
        for (var i = 0; i < idArray.length; i++) {
            redirect(i);
        }
    }


});