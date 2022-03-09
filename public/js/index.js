const toFavour = document.querySelector('.container');
toFavour.addEventListener('click', async (event) => {
  event.preventDefault();

  if (event.target.classList.contains('add_button')) {
    console.log(event.target);
    console.log(event.target.closest('.sockscard').dataset.socksid);

    const resp = await fetch('/user/addtofavour', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        socksid2: event.target.closest('.sockscard').dataset.socksid,
      }),
    });
    if (resp.status === 200) {
      alert('ok');
    } else {
      alert('bad');
    }
  }

  if (event.target.classList.contains('add_tocart')) {
    console.log(event.target);
    console.log(event.target.closest('.sockscard').dataset.socksid);

    const resp = await fetch('/user/addtocart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        socksid1: event.target.closest('.sockscard').dataset.socksid,
      }),
    });
    if (resp.status === 200) {
      alert('ok');
    } else {
      alert('bad_bad');
    }
  }
});
