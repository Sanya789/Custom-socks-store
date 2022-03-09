
const del = document.querySelector('.table-shopping-cart');
// console.log(del);

del.addEventListener('click', async (event) => {

  event.preventDefault()
  // console.log(event.target.innerText);
  if (event.target.tagName === 'BUTTON' && event.target.innerText === 'Удалить') {

    const parent = event.target.closest('[data-id]');
    // console.log(event.target.closest('[data-id]').dataset.id);
    const { id } = parent.dataset;
    // console.log(parent);
    const responce = await fetch(`/cart/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    });
    if (responce.ok) {
      parent.remove();
    } else {
      console.log('nooooooooo!!!');
    }
  }
});



