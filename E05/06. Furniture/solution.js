function solve() {
  let generateBtn = document.getElementsByTagName('button')[0];
  let buyBtn = document.getElementsByTagName('button')[1];

  generateBtn.addEventListener('click', generate);
  buyBtn.addEventListener('click', buy);

  function generate() {
    let txt = document.querySelector('#exercise textarea').value;
    let productTable = document.querySelector('.table tbody');
    let products = JSON.parse(txt);

    for (const prod of products) {
      productTable.appendChild(createRow(prod));
    }
  }

  function buy() {
    let sum = 0;
    let totalDecorationFactor = 0;
    let furnitureNames = [];
    let num = 0;

    let prods = Array.from(document.querySelectorAll('table tbody tr'));

    for (const prod of prods) {
      let check = prod.querySelector('input');

      if (check.checked) {
        let name = prod.querySelector('td:nth-child(2) p').textContent;
        let price = Number(prod.querySelector('td:nth-child(3) p').textContent);
        let decFac = Number(prod.querySelector('td:nth-child(4) p').textContent);

        furnitureNames.push(name);
        sum += price;
        totalDecorationFactor += decFac;
        num++;
      }
    }

    let outputTxt = document.querySelector('#exercise > textarea:nth-child(5)');
    outputTxt.value = `Bought furniture: ${furnitureNames.join(', ')}\n`;
    outputTxt.value += `Total price: ${sum.toFixed(2)}\n`;
    outputTxt.value += `Average decoration factor: ${totalDecorationFactor / num}`;

  }

  function createRow(product) {
    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let td4 = document.createElement('td');
    let td5 = document.createElement('td');

    let img = document.createElement('img');
    img.src = product.img;

    let p1 = document.createElement('p');
    p1.textContent = product.name;

    let p2 = document.createElement('p');
    p2.textContent = product.price;

    let p3 = document.createElement('p');
    p3.textContent = product.decFactor;

    let inp = document.createElement('input');
    inp.type = 'checkbox';

    td1.appendChild(img);
    td2.appendChild(p1);
    td3.appendChild(p2);
    td4.appendChild(p3);
    td5.appendChild(inp);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);

    return tr;
  }
}