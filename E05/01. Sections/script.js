function create(words) {
   let content = document.getElementById('content');

   for (const word of words) {
      let div = document.createElement('div');
      let txt = document.createElement('p');
      txt.textContent = word;
      txt.style.display = 'none';

      div.appendChild(txt);

      content.appendChild(div);
   }

   content.addEventListener('click', show);

   function show(e) {
      e.target.querySelector('p').style.display = 'block';
   }
}