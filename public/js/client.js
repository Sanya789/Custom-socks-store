let imgPath = 'img src="img/100.jpeg"';
const selectors = document.querySelector('#selectors');
let selectedColor;
let selectedLogo;
let selectedPattern;

document.querySelector('#inpprice').value = 50;
document.querySelector('#inptitle').value = 100;

if (selectors) {
  selectors.addEventListener('change', async (event) => {
    event.preventDefault();

    selectedColor = document.getElementById('selectedColor').value;
    selectedLogo = document.getElementById('selectedLogo').value;
    selectedPattern = document.getElementById('selectedPattern').value;

    const newImgPath = `<img src="img/${imgName(selectedColor, selectedLogo, selectedPattern)[0]}" width="200" height="301">`;
    document.querySelector('.imgPathHtml').innerHTML = newImgPath;
    document.querySelector('#price').innerHTML = `Стоимость данной модели: ${imgName(selectedColor, selectedLogo, selectedPattern)[1]}₽`;

    document.querySelector('#inpprice').value = imgName(selectedColor, selectedLogo, selectedPattern)[1];
    document.querySelector('#inptitle').value = imgName(selectedColor, selectedLogo, selectedPattern)[0].slice(0, 3);
  });
}

const saveBtn = document.querySelector('#saveBtn');
saveBtn.addEventListener('submit', async (event) => {
  event.preventDefault();

  const resp = await fetch(`/addSocks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
    }),
  });
  if (resp.status === 200) {
    alert('ok');
  } else {
    alert('bad');
  }
});

function imgName(selectedColor, selectedLogo, selectedPattern) {
  let socksCode;
  let colorCode;
  let logoCode;
  let patternCode;
  let socksImgName;
  let p1;
  let p2;
  let p3;
  let price;

  switch (selectedColor) {
    case 'white':
      colorCode = 100;
      p1 = 50;
      break;

    case 'black':
      colorCode = 200;
      p1 = 50;
      break;
  }

  switch (selectedLogo) {
    case 'logo1':
      logoCode = 10;
      p2 = 30;
      break;

    case 'logo2':
      logoCode = 20;
      p2 = 30
      break;

    case 'nologo':
      logoCode = 0;
      p2 = 0;
      break;
  }

  switch (selectedPattern) {
    case 'pattern1':
      patternCode = 1;
      p3 = 20;
      break;

    case 'pattern2':
      patternCode = 2;
      p3 = 20;
      break;

    case 'nopattern':
      patternCode = 0;
      p3 = 0;
      break;
  }

  socksCode = colorCode + logoCode + patternCode;
  price = p1 + p2 + p3;
  socksImgName = socksCode + '.jpeg';
  return [socksImgName, price];
}

// function imgCode(socksImgName) {

//   colorCode = Number(socksImgName.slice(0, 1));
//   logoCode = Number(socksImgName.slice(1, 1));
//   patternCode = Number(socksImgName.slice(2, 1));

//   console.log(colorCode, logoCode, patternCode);
// }
