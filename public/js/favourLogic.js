const toCartButton = document.querySelector('.container');

toCartButton.addEventListener('click', async (event) => {
  event.preventDefault();
  if (event.target.classList.contains('add_tocart')) {
    console.log(event.target);
    console.log(event.target.closest('.sockscard').dataset.socksid);

    const response = await fetch('/user/addtocart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        socksid1: event.target.closest('.sockscard').dataset.socksid,
      }),
    });
    if (response.status === 200) {
      alert('Добавлено');
    } else {
      alert('Не удалось добавить')
    }
  }
});

toCartButton.addEventListener('click', async (event) => {
  event.preventDefault();
  if (event.target.classList.contains('del_button')) {
    console.log(event.target);
    console.log(event.target.closest('.sockscard').dataset.fav_sock_id);

    const response = await fetch(`/user/delete_fav/${event.target.closest('.sockscard').dataset.fav_sock_id}`, {
      method: 'DELETE',
      body: JSON.stringify({
        // socksid2: event.target.closest('.sockscard').dataset.fav_sock_id,
        // key: 'Xxxxxxxxxx'
      }),
    });
    if (response.status === 200) {
      alert('Удалено');
      document.getElementById(event.target.closest('.sockscard').dataset.fav_sock_id).remove();

    } else {
      alert('Не удалось удалить!')
    }
  }
});

// if (toCartButton) {
//   toCartButton.addEventListener('submit', async (event) => {

//     // console.log('_____________________')
//     // event.preventDefault();
//     // console.log('_______', event.target)
//     // const response = await fetch('/favour/add_to_cart', {
//     //   method: 'POST',
//     //   headers: {
//     //     'Content-Type': 'application/json',
//     //   },
//     //   body: JSON.stringify(),
//     // });
//   });
// }
