function solve() {
  let fullText = document.getElementById('input').value;

  let sentArr = fullText.split('.').filter(x => x);
  for (let i = 0; i < sentArr.length; i++) {
    sentArr[i] = sentArr[i].trim();
  }

  let outputElement = document.getElementById('output');

  while (sentArr.length > 0) {
    if (sentArr.length < 3) {
      outputElement.innerHTML += `<p>${sentArr.join('. ')}.</p>`;
      let l = sentArr.length;
      for (let i = 0; i < l; i++) {
        sentArr.shift();
      }
    }
    else {
      outputElement.innerHTML += `<p>${sentArr.shift()}. ${sentArr.shift()}. ${sentArr.shift()}.</p>`
    }
  }
}