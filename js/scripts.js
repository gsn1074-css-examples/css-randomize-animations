var content = document.getElementById('content');
var timer;

function makeChange() {

    var trams = content.querySelectorAll('.tram');

    function change() {

        for (let i = 0; trams.length > i; i++) {

            trams[i].classList.remove('left');
            trams[i].classList.remove('right');

            var random = Math.random();
            var ht = Math.ceil(random * 400);

            trams[i].style.marginTop = ht + "px";

            if (Math.ceil(2 * random) === 2) {
                trams[i].classList.add('left');
            } else {
                trams[i].classList.add('right');
            }
        }

        timer = setTimeout(change, 970);
    }

    change();
}

makeChange();
