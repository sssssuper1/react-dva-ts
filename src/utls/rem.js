(function(doc, win) {
  const docEl = doc.documentElement;
  const resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
  const recalc = function() {
    // const { innerWidth } = docEl;
    const { innerWidth } = win
    if (!innerWidth) return;
    // docEl.style.fontSize = 16 * (innerWidth / 375) + 'px';
    if (innerWidth < 450) {
      docEl.style.fontSize = `${innerWidth / 15}px`;
    } else if (innerWidth < 750){
      docEl.style.fontSize = `${innerWidth / 30}px`;
    } else if (innerWidth < 1024) {
      docEl.style.fontSize = `${innerWidth / 45}px`;
    } else {
      docEl.style.fontSize = '22.76px'
    }
  };
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);