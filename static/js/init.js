/*init Rem*/
!(function(doc, win) {
	var docEle = doc.documentElement,
		evt = "onorientationchange" in window ? "orientationchange" : "resize",
		fn = function() {
			var width = docEle.clientWidth;
			width && (docEle.style.fontSize = 100 * (width / 750) + "px");
		};
	win.addEventListener(evt, fn, false);
	doc.addEventListener("DOMContentLoaded", fn, false);
}(document, window));



/*	;(function(win) {
        var doc = win.document;
        var docEl = doc.documentElement;
        var tid;
 
        function refreshRem() {
            var width = docEl.getBoundingClientRect().width;
            if (width > 540) { // 最大宽度
            width = 540;
        }
        var rem = width / 100; // 将屏幕宽度分成10份， 1份为1rem
        docEl.style.fontSize = rem + 'px';
        }
 
        win.addEventListener('resize', function() {
        clearTimeout(tid);
        tid = setTimeout(refreshRem, 300);
    }, false);
    win.addEventListener('pageshow', function(e) {
            if (e.persisted) {
                clearTimeout(tid);
                tid = setTimeout(refreshRem, 300);
            }
        }, false);
 
        refreshRem();
 
    })(window);*/