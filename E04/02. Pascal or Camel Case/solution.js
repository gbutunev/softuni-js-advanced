function solve() {
  let text = document.getElementById('text').value.trim();
  let conv = document.getElementById('naming-convention').value;

  switch (conv) {
    case 'Camel Case':
      send(cc(text));
      break;
    case 'Pascal Case':
      send(pc(text));
      break;
    default:
      send('Error!');
      break;
  }

  function send(text) {
    document.getElementById('result').textContent = text;
  }

  function cc(text) {
    let newtxt = '';
    let arr = text.toLowerCase().split(' ');
    newtxt += arr[0];
    for (let i = 1; i < arr.length; i++) {
      newtxt += arr[i][0].toUpperCase() + arr[i].slice(1);
    }
    return newtxt;
  }

  function pc(text) {
    let newtxt = '';
    let arr = text.toLowerCase().split(' ');
    for (let i = 0; i < arr.length; i++) {
      newtxt += arr[i][0].toUpperCase() + arr[i].slice(1);
    }
    return newtxt;
  }
}