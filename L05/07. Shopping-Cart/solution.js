function solve() {
   let sum = 0;
   let prods = new Set();

   let addBtns = Array.from(document.getElementsByClassName('add-product'));
   let chckOutBtn = document.getElementsByClassName('checkout')[0];

   for (const btn of addBtns) {
      btn.addEventListener('click', addToCart);
   }
   chckOutBtn.addEventListener('click', checkout);

   function addToCart(e) {
      let product = e.target.parentNode.parentNode;
      let name = product.querySelector('.product-details .product-title').textContent;
      let price = Number(product.querySelector('.product-line-price').textContent);
      let txtBox = document.querySelector('.shopping-cart textarea');

      sum += price;
      prods.add(name);
      txtBox.value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;
   }

   function checkout(e) {
      let txtBox = document.querySelector('.shopping-cart textarea');
      txtBox.value += `You bought ${Array.from(prods).join(', ')} for ${sum.toFixed(2)}.`;
      Array.from(document.querySelectorAll('button')).forEach(x => x.disabled = true);
   }
}