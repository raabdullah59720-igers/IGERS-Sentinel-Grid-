/* Non-destructive UI polish. No data feeds are replaced and no existing section is removed. */
(() => {
  const mark = () => {
    document.documentElement.classList.add('igers-visual-upgrade');
    document.querySelectorAll('a,button').forEach(el => {
      const t=(el.textContent||'').trim().toLowerCase();
      if(/air traffic|weather|earthquake|live time|inventor|sentinel|deployment|concept|energy|environment/.test(t)) el.classList.add('igers-nav-item');
    });
  };
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',mark); else mark();
})();
