(function () {
  if (localStorage.getItem('cookie_consent')) return;

  var banner = document.createElement('div');
  banner.id = 'cookie-banner';
  banner.style.cssText = [
    'position:fixed',
    'bottom:0',
    'left:0',
    'right:0',
    'z-index:9999',
    'background:#1c1b1b',
    'border-top:1px solid rgba(255,255,255,0.1)',
    'padding:1.25rem 2rem',
    'display:flex',
    'flex-wrap:wrap',
    'align-items:center',
    'justify-content:space-between',
    'gap:1rem',
    'font-family:Jost,sans-serif'
  ].join(';');

  banner.innerHTML =
    '<p style="color:rgba(255,255,255,0.6);font-size:0.78rem;margin:0;max-width:720px;line-height:1.7;">' +
      'Utilizziamo cookie tecnici e di terze parti (Google Maps, Google Fonts) per garantire il corretto funzionamento del sito. ' +
      'Consulta la nostra <a href="https://www.iubenda.com/privacy-policy/82244057/cookie-policy" target="_blank" rel="noopener" ' +
      'style="color:#fab5b7;text-decoration:underline;">Cookie Policy</a>.' +
    '</p>' +
    '<div style="display:flex;gap:0.75rem;flex-shrink:0;">' +
      '<button id="cookie-reject" style="padding:0.5rem 1.25rem;background:transparent;border:1px solid rgba(255,255,255,0.2);' +
      'color:rgba(255,255,255,0.45);font-size:0.72rem;cursor:pointer;letter-spacing:0.1em;font-family:Jost,sans-serif;transition:border-color 0.2s;">' +
      'Solo necessari</button>' +
      '<button id="cookie-accept" style="padding:0.5rem 1.5rem;background:#B37679;border:1px solid #B37679;' +
      'color:#fff;font-size:0.72rem;cursor:pointer;letter-spacing:0.1em;font-family:Jost,sans-serif;font-weight:500;transition:opacity 0.2s;">' +
      'Accetta tutti</button>' +
    '</div>';

  document.body.appendChild(banner);

  function dismiss(value) {
    localStorage.setItem('cookie_consent', value);
    banner.style.transition = 'opacity 0.3s';
    banner.style.opacity = '0';
    setTimeout(function () { banner.remove(); }, 300);
  }

  document.getElementById('cookie-accept').addEventListener('click', function () { dismiss('accepted'); });
  document.getElementById('cookie-reject').addEventListener('click', function () { dismiss('rejected'); });
})();
