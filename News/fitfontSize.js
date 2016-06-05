!(function(doc, win) {
    var docEle = doc.documentElement,
        evt = "resize",
        fn = function() {
            var width = docEle.clientWidth;
            width && (docEle.style.fontSize = 16* width / 320 + "px");
        };

    win.addEventListener(evt, fn, false);
    doc.addEventListener("DOMContentLoaded", fn, false);

}(document, window));