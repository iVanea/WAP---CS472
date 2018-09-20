window.onload = function () {
    "use strict";
    document.getElementById("start").onclick = start;
    document.getElementById("animation").onchange = select;
    document.getElementById("stop").onclick = stop;
    document.getElementById("fontSize").onchange = changeFontSize;
    document.getElementById("turbo").onchange = accelerate;
   
    var arr;
    var i = 0;
    var process;
    var styles = [];
    styles["tiny"] = 7;
    styles["small"] = 10;
    styles["medium"] = 12;
    styles["large"] = 16;
    styles["extra_large"] = 24;
    styles["xxl"] = 32;

    function select() {
        stop();
        arr = ANIMATIONS[this.value].split("=====\n");
        document.getElementById("text-area").value = arr[0];
    }

    function start() {
        clearInterval(process);
        document.getElementById("stop").disabled = false;
        var element = document.getElementById("turbo");
        if (element.checked) {
            process = setInterval(startHelper, 50);
        } else {
            process = setInterval(startHelper, 250);
        }
        document.getElementById("start").disabled = true;
    }

    function stop() {
        document.getElementById("start").disabled = false;
        clearInterval(process);
        document.getElementById("stop").disabled = true;
    }

    function startHelper() {
        if (i === arr.length) {
            i = 0;
        }

        var element = document.getElementById("text-area");
        element.value = arr[i++];
    }

    function changeFontSize() {
        var text = document.getElementById("text-area");
        var select = document.getElementById("fontSize");
        var size = select.options[select.selectedIndex].value;
        size = styles[size];
        text.style.fontSize = size + "pt";
    }

    function accelerate() {

        var element = document.getElementById("turbo");
        if (element.checked) {
            clearInterval(process);
            document.getElementById("stop").disabled = false;
            process = setInterval(startHelper, 50);
            document.getElementById("start").disabled = true;
        } else {
            start();
        }
    }
};
