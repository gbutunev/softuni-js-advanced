window.addEventListener('load', solution);

function solution() {
  let sumbitBtn = document.getElementById('submitBTN');
  let editBtn = document.getElementById('editBTN');
  let continueBtn = document.getElementById('continueBTN');

  let globalName;
  let globalEmail;
  let globalPhone;
  let globalAddress;
  let globalCode;

  let nameBox = document.getElementById('fname');
  let emailBox = document.getElementById('email');
  let phoneBox = document.getElementById('phone');
  let addressBox = document.getElementById('address');
  let codeBox = document.getElementById('code');

  sumbitBtn.addEventListener('click', onSubmit);
  editBtn.addEventListener('click', onEdit);
  continueBtn.addEventListener('click', onContinue);

  function onSubmit(e) {
    //no trim needed?
    if (nameBox.value != '' && emailBox.value != '') {
      let nameLi = document.createElement('li');
      let emailLi = document.createElement('li');
      let phoneLi = document.createElement('li');
      let addressLi = document.createElement('li');
      let codeLi = document.createElement('li');

      globalName = nameBox.value.trim();
      globalEmail = emailBox.value.trim();
      globalPhone = phoneBox.value.trim();
      globalAddress = addressBox.value.trim();
      globalCode = codeBox.value.trim();

      nameLi.textContent = `Full Name: ${globalName}`;
      emailLi.textContent = `Email: ${globalEmail}`;
      phoneLi.textContent = `Phone Number: ${globalPhone}`;
      addressLi.textContent = `Address: ${globalAddress}`;
      codeLi.textContent = `Postal Code: ${globalCode}`;

      let ul = document.getElementById('infoPreview');

      ul.appendChild(nameLi);
      ul.appendChild(emailLi);
      ul.appendChild(phoneLi);
      ul.appendChild(addressLi);
      ul.appendChild(codeLi);

      sumbitBtn.disabled = true;
      editBtn.disabled = false;
      continueBtn.disabled = false;

      nameBox.value = '';
      emailBox.value = '';
      phoneBox.value = '';
      addressBox.value = '';
      codeBox.value = '';

    }
    // else {
    //   nameBox.value = '';
    //   emailBox.value = '';
    //   phoneBox.value = '';
    //   addressBox.value = '';
    //   codeBox.value = '';
    // }
    console.log(this);
  }

  function onEdit() {
    let infoPreviewChildren = document.querySelectorAll('#infoPreview li');
    for (const li of infoPreviewChildren) {
      li.remove();
    }

    nameBox.value = globalName;
    globalName = '';
    emailBox.value = globalEmail;
    globalEmail = '';
    phoneBox.value = globalPhone;
    globalPhone = '';
    addressBox.value = globalAddress;
    globalAddress = '';
    codeBox.value = globalCode;
    globalCode = '';

    sumbitBtn.disabled = false;
    editBtn.disabled = true;
    continueBtn.disabled = true;
  }

  function onContinue() {
    let block = document.querySelector('#block');
    block.innerHTML = '';

    let h3 = document.createElement('h3');
    h3.textContent = 'Thank you for your reservation!';

    block.appendChild(h3);
  }
}
