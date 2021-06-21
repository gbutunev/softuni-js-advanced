function search() {
   let items = document.querySelectorAll('ul#towns li');
   let keyword = document.getElementById('searchText').value;

   let sum = 0;
   for (let i = 0; i < items.length; i++) {
      if (items[i].textContent.includes(keyword)) {
         items[i].style['font-weight'] = 'bold';
         items[i].style['text-decoration'] = 'underline';
         sum++;
      }
   }

   document.getElementById('result').textContent = `${sum} matches found`;
}
