function solve() {
    let addBtn = document.querySelector('#container button');
    let clearBtn = document.querySelector('#archive button');

    let moviesUl = document.querySelector('#movies ul');
    let archiveUl = document.querySelector("#archive ul");

    moviesUl.addEventListener('click', onArchive);
    archiveUl.addEventListener('click', onDelete);
    addBtn.addEventListener('click', onAdd);
    clearBtn.addEventListener('click', onClear);
    function onAdd(e) {
        e.preventDefault();

        let [name, hall, priceTxt] = document.querySelectorAll('#container input');
        let price = Number(priceTxt.value);

        if (name.value.trim() != '' && hall.value.trim() != '' && priceTxt.value.trim() != '' && !Number.isNaN(price)) {

            let list = document.querySelector('#movies ul');

            let li = document.createElement('li');

            let span = document.createElement('span');
            span.textContent = name.value;

            let strong = document.createElement('strong');
            strong.textContent = `Hall: ${hall.value}`;

            let div = document.createElement('div');

            let strong2 = document.createElement('strong');
            strong2.textContent = price.toFixed(2);

            let input = document.createElement('input');
            input.placeholder = 'Tickets Sold';

            let btn = document.createElement('button');
            btn.textContent = 'Archive';

            div.appendChild(strong2);
            div.appendChild(input);
            div.appendChild(btn);

            li.appendChild(span);
            li.appendChild(strong);
            li.appendChild(div);

            list.appendChild(li);
        }
        name.value = '';
        hall.value = '';
        priceTxt.value = '';
    }

    function onArchive(e) {
        if (e.target.tagName == 'BUTTON') {
            let item = e.target.parentNode.parentNode;
            let name = item.querySelector('span').textContent;
            let price = Number(item.querySelector('div strong').textContent);
            let inputAmount = item.querySelector('div input').value.trim();
            let amount = Number(inputAmount);

            if (inputAmount != '' && !Number.isNaN(amount)) {
                let total = price * inputAmount;

                let archivedList = document.querySelector('#archive ul');

                let li = document.createElement('li');
                let span = document.createElement('span');
                span.textContent = name;
                let strong = document.createElement('strong');
                strong.textContent = `Total amount: ${total.toFixed(2)}`;
                let btn = document.createElement('button');
                btn.textContent = 'Delete';

                li.appendChild(span);
                li.appendChild(strong);
                li.appendChild(btn);

                archivedList.appendChild(li);
                item.remove();
            }
        }

    }

    function onDelete(e) {
        if (e.target.tagName == 'BUTTON') {
            let item = e.target.parentNode;
            item.remove();
        }
    }

    function onClear() {
        let ul = Array.from(document.querySelectorAll('#archive ul li'));
        for (const e of ul) {
            e.remove();
        }
    }
}