(() => {
  if (window.__IMFN_KASH_WIDGET__) return;
  window.__IMFN_KASH_WIDGET__ = true;

  const style = document.createElement('style');
  style.textContent = `
    #kash-launcher{position:fixed;right:22px;bottom:22px;z-index:99998;border:0;border-radius:999px;background:#174c43;color:#fff;padding:15px 20px;font:600 15px/1.2 system-ui,-apple-system,Segoe UI,sans-serif;box-shadow:0 8px 28px #102f2b38;cursor:pointer}
    #kash-launcher:focus-visible,#kash-panel button:focus-visible,#kash-panel a:focus-visible{outline:3px solid #e8b65b;outline-offset:3px}
    #kash-panel{position:fixed;right:22px;bottom:86px;width:min(370px,calc(100vw - 28px));height:min(560px,calc(100dvh - 120px));z-index:99999;background:#fff;border:1px solid #dce5e1;border-radius:18px;box-shadow:0 18px 55px #102f2b38;display:none;overflow:hidden;font:14px/1.5 system-ui,-apple-system,Segoe UI,sans-serif;color:#1c2926}
    #kash-panel.kash-open{display:flex;flex-direction:column}
    #kash-panel *{box-sizing:border-box}
    .kash-head{background:#174c43;color:#fff;padding:17px 18px;display:flex;justify-content:space-between;align-items:center}
    .kash-head strong{display:block;font-size:17px}.kash-head small{display:block;color:#dcece7;margin-top:2px}
    .kash-close{background:transparent;border:0;color:#fff;font-size:25px;cursor:pointer;padding:0 3px}
    .kash-body{padding:16px;overflow:auto;flex:1;display:flex;flex-direction:column}.kash-welcome{margin:0 0 14px;flex-shrink:0}.kash-topics{display:grid;gap:8px;flex-shrink:0}.kash-topic[aria-pressed="true"]{background:#e4eee9;border-color:#174c43;box-shadow:inset 3px 0 #174c43}.kash-answer{flex:1;overflow:auto;min-height:90px}
    .kash-topic{width:100%;text-align:left;background:#f5f8f6;border:1px solid #dce5e1;border-radius:10px;padding:11px 12px;color:#174c43;font:600 14px system-ui;cursor:pointer}
    .kash-topic:hover{background:#eaf2ee}.kash-answer{margin-top:14px;background:#f7f8f6;border-left:3px solid #d7a74b;border-radius:0 10px 10px 0;padding:12px;white-space:normal}
    .kash-answer p{margin:0 0 9px}.kash-answer ul{margin:7px 0;padding-left:19px}.kash-answer li{margin:5px 0}.kash-answer a{color:#155b80;text-decoration:underline}
    .kash-note{border-top:1px solid #e6ebe8;padding:11px 15px;font-size:11px;color:#586660;background:#fbfcfb}
    @media(max-width:480px){#kash-launcher{right:14px;bottom:14px;padding:13px 17px}#kash-panel{right:10px;bottom:74px;width:calc(100vw - 20px);height:min(600px,calc(100dvh - 95px))}}
  `;
  document.head.appendChild(style);

  const launcher = document.createElement('button');
  launcher.id = 'kash-launcher';
  launcher.type = 'button';
  launcher.setAttribute('aria-haspopup', 'dialog');
  launcher.setAttribute('aria-expanded', 'false');
  launcher.setAttribute('aria-controls', 'kash-panel');
  launcher.textContent = 'Ask KASH';
  document.body.appendChild(launcher);

  const panel = document.createElement('section');
  panel.id = 'kash-panel';
  panel.setAttribute('role', 'dialog');
  panel.setAttribute('aria-label', 'Ask KASH community navigation');
  panel.setAttribute('aria-modal', 'false');
  panel.innerHTML = `
    <div class="kash-head"><div><strong>Ask KASH</strong><small>Your community navigation guide</small></div><button class="kash-close" type="button" aria-label="Close KASH">×</button></div>
    <div class="kash-body"><p class="kash-welcome">Hello! What would you like help finding today?</p>
      <div class="kash-topics">
        <button class="kash-topic" data-topic="settlement">Settlement and immigration pathways</button>
        <button class="kash-topic" data-topic="applications">Applications and official information</button>
        <button class="kash-topic" data-topic="family">Family, parenting and wellbeing</button>
        <button class="kash-topic" data-topic="work">Work, study and credential recognition</button>
        <button class="kash-topic" data-topic="support">Community support and referrals</button>
        <button class="kash-topic" data-topic="urgent">Urgent or crisis support</button>
      </div><div class="kash-answer" id="kash-answer" aria-live="polite" hidden></div>
    </div>
    <div class="kash-note">KASH shares general information, not legal, immigration, medical or emergency advice. Avoid sharing private or sensitive information.</div>`;
  document.body.appendChild(panel);

  const answers = {
    settlement: '<p>Your best starting point depends on your status, goals and circumstances. Use official Government of Canada information to explore options and eligibility.</p><ul><li><a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada.html" target="_blank" rel="noopener noreferrer">Explore immigration pathways</a></li><li><a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/new-immigrants.html" target="_blank" rel="noopener noreferrer">Services for newcomers</a></li></ul><p>For advice on your specific case, consult an authorized immigration professional.</p>',
    applications: '<p>Always check the official application guide for current forms, fees, documents and processing information before submitting anything.</p><ul><li><a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/application.html" target="_blank" rel="noopener noreferrer">IRCC application information</a></li><li><a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/application/check-processing-times.html" target="_blank" rel="noopener noreferrer">Check processing times</a></li></ul><p>Be cautious of anyone guaranteeing approval or asking for payment to influence a decision.</p>',
    family: '<p>Adjusting to a new country can affect relationships, parenting and wellbeing. Consider newcomer-serving organisations, family support programs or a qualified local professional.</p><ul><li><a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/new-immigrants.html" target="_blank" rel="noopener noreferrer">Find newcomer information</a></li><li><a href="https://211.ca/" target="_blank" rel="noopener noreferrer">Search community and social services through 211</a></li></ul><p>IMFN offers community connection and navigation, not therapy or clinical care.</p>',
    work: '<p>You can start with official employment services and information about recognition of international qualifications.</p><ul><li><a href="https://www.jobbank.gc.ca/findajob" target="_blank" rel="noopener noreferrer">Search jobs on Job Bank</a></li><li><a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/new-immigrants/prepare-life-canada/prepare-work.html" target="_blank" rel="noopener noreferrer">Prepare to work in Canada</a></li><li><a href="https://www.canada.ca/en/services/benefits/education.html" target="_blank" rel="noopener noreferrer">Education and training information</a></li></ul><p>Work and study permits have different eligibility rules; confirm requirements through official sources.</p>',
    support: '<p>For local settlement, housing, food, family or community services, 211 can help you find organisations in many parts of Canada.</p><ul><li><a href="https://211.ca/" target="_blank" rel="noopener noreferrer">Search 211 community services</a></li><li><a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/new-immigrants.html" target="_blank" rel="noopener noreferrer">Government newcomer services</a></li></ul><p>You can also explore the Get Support section of this website. Please do not send sensitive records through general forms.</p>',
    urgent: '<p>If you or someone else is in immediate danger, call 9-1-1. If you are thinking about suicide or worried about someone, call or text 9-8-8 anywhere in Canada, 24 hours a day.</p><ul><li><a href="https://988.ca/" target="_blank" rel="noopener noreferrer">988 Suicide Crisis Helpline</a></li><li><a href="https://211.ca/" target="_blank" rel="noopener noreferrer">211 community services</a></li></ul>'
  };

  const close = () => { panel.classList.remove('kash-open'); launcher.setAttribute('aria-expanded','false'); launcher.focus(); };
  launcher.addEventListener('click', () => {
    const opening = !panel.classList.contains('kash-open');
    panel.classList.toggle('kash-open', opening);
    launcher.setAttribute('aria-expanded', String(opening));
    if (opening) panel.querySelector('.kash-close').focus();
  });
  panel.querySelector('.kash-close').addEventListener('click', close);
  panel.querySelectorAll('[data-topic]').forEach(button => button.addEventListener('click', () => {
    const answer = panel.querySelector('#kash-answer');
    answer.innerHTML = answers[button.dataset.topic] || '<p>Please choose a topic above.</p>';
    answer.hidden = false;
    panel.querySelectorAll('[data-topic]').forEach(topicButton => topicButton.setAttribute('aria-pressed', String(topicButton === button)));
  }));
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && panel.classList.contains('kash-open')) close(); });
})();