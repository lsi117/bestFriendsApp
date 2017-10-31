console.log('main js is working!!');

//appending stuff to the DOM !!

function savedShelters(id, div) {
  fetch(`/bfAllView/${id}/`, {
    method: 'PUT',
  }).then(res => res.json())
    .then(jsonRes => {
      if (jsonRes.saved) {
        div.innerHTML = '<p>Shelters:</p>';
      }
    }).catch(err => {
      console.log(err);
    });
}

function grabShelterDivs() {
  const shelterDivs = document.querySelectorAll('.saved');
  shelterDivs.forEach(div => {
    div.addEventListener('click', () => completeShelters(div.dataset.sheltersid, div));
  })
}

document.addEventListener('DOMContentLoaded', grabShelterDivs);
