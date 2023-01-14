function button() {
  let hex_numbers = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];

  let hexcode = '';
  let hexcode2 = '';

  for(let i = 0; i<=5; i++){
    let hex_rand = Math.floor(Math.random() * hex_numbers.length);

    hexcode += hex_numbers[hex_rand];
  }

  document.getElementById('color-id').innerHTML = hexcode;
  document.getElementsByTagName('body')[0].style.background = "#" + hexcode;
}
