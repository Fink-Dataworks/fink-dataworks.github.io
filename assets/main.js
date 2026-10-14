(() => {
  const field = document.getElementById('pixel-field');
  if (field) {
    const blocks = [
      [105,80,42,'#253a5e'],[153,80,42,'#1e57ae'],[201,80,42,'#176fc9'],[249,80,42,'#08afd8'],
      [105,128,42,'#283d61'],[153,128,42,'#2361bb'],[201,128,42,'#2188e1'],[249,128,42,'#18bee1'],
      [105,176,42,'#213455'],[153,176,42,'#2058ad'],[201,176,42,'#267dd7'],[249,176,42,'#14a8d5'],
      [105,224,42,'#1b2e49'],[153,224,42,'#1e4b9c'],[201,224,42,'#2070c5'],[249,224,42,'#0c98ca'],
      [67,119,15,'#37698e'],[66,188,15,'#248cd4'],[55,260,15,'#1c70b3'],[310,83,15,'#2fcbea'],
      [326,143,15,'#26b9e9'],[344,63,8,'#43d9ee'],[360,112,8,'#65e5f6'],[26,147,8,'#276ba8'],
      [44,86,8,'#35a6df'],[350,222,8,'#1793d1'],[318,260,8,'#35d5eb']
    ];
    blocks.forEach(([x,y,w,c],i) => {
      const block=document.createElement('span');
      block.className='pixel'+(w===15?' is-small':w===8?' is-tiny':'');
      block.style.setProperty('--x',`${x}px`);
      block.style.setProperty('--y',`${y}px`);
      block.style.setProperty('--w',`${w}px`);
      block.style.setProperty('--c',c);
      block.style.setProperty('--dx',`${i%3===0?-160:i%3===1?90:-75}px`);
      block.style.setProperty('--dy',`${i%2===0?90:-105}px`);
      block.style.setProperty('--delay',`${(.09*i).toFixed(2)}s`);
      block.style.setProperty('--dur',`${(1.5+(i%5)*.15).toFixed(2)}s`);
      block.setAttribute('aria-hidden','true');
      field.appendChild(block);
    });
  }
  const menu=document.querySelector('[data-menu]');
  const menuBtn=document.querySelector('[data-menu-toggle]');
  if(menu&&menuBtn){
    menuBtn.addEventListener('click',()=>{const open=!menu.classList.contains('open');menu.classList.toggle('open',open);menuBtn.setAttribute('aria-expanded',String(open));});
    menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.classList.remove('open');menuBtn.setAttribute('aria-expanded','false');}));
  }
  const before=[
    ['INV-100','Desk Lamp','Electronics','12','Source row'],
    ['inv100','desk lamp','electronic','12','Possible duplicate'],
    ['OFF-206','Notebook A5','Stationery','?','Missing quantity'],
    ['PKG-318','Shipping Box','packaging','24','Category format']
  ];
  const after=[
    ['INV-100','Desk Lamp','Electronics','12','Verified'],
    ['INV-100','Desk Lamp','Electronics','12','Duplicate candidate'],
    ['OFF-206','Notebook A5','Stationery','—','Needs input'],
    ['PKG-318','Shipping Box','Packaging','24','Standardized']
  ];
  const tbody=document.querySelector('[data-sample-rows]');
  const filename=document.querySelector('[data-sample-file]');
  const summary=document.querySelector('[data-sample-summary]');
  const switches=[...document.querySelectorAll('[data-view]')];
  function render(state){
    const rows=state==='after'?after:before;
    if(tbody){tbody.replaceChildren();rows.forEach(row=>{const tr=document.createElement('tr');row.forEach((cell,index)=>{const td=document.createElement('td');if(index===4){const span=document.createElement('span');span.className=state==='after'?'pill-good':'pill-bad';span.textContent=cell;td.appendChild(span);}else{td.textContent=cell;}tr.appendChild(td);});tbody.appendChild(tr);});}
    if(filename)filename.textContent=state==='after'?'inventory_cleaned.csv':'inventory_original.csv';
    if(summary)summary.textContent=state==='after'?'Standardized; uncertain entries flagged':'Inconsistent records detected';
    switches.forEach(btn=>btn.setAttribute('aria-pressed',String(btn.dataset.view===state)));
  }
  switches.forEach(btn=>btn.addEventListener('click',()=>render(btn.dataset.view)));
  render('before');
  const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
})();
