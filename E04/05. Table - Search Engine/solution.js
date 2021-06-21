function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let keyword = document.getElementById('searchField').value;

      let rows = document.querySelectorAll('table tbody tr');
      for (const row of rows) {
         for (const child of row.childNodes) {
            if (child.textContent.includes(keyword)) {
               row.classList.add('select');
               break;
            }
         }
      }
   }
}