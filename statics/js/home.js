(function(w) {
    function enterLine() {
        document.getElementById("btnEnter1").onclick = function() {
            window.open('http://52gao1.com', "_self");
        }
        document.getElementById("btnEnter2").onclick = function() {
            window.open('http://52gao2.com', "_self");
        }
        document.getElementById("btnEnter3").onclick = function() {
            window.open('http://52gao3.com', "_self");
        }
        document.getElementById("btnEnter4").onclick = function() {
            window.open('http://52gao3.com', "_self");
        }
        document.getElementById("btnEnter6").onclick = function() {
            window.open('http://www.baidu.com/', "_blank");
        }
    }
    function init() {
        enterLine();
    }
    window.addEventListener("DOMContentLoaded", init, !1);
})(window);
