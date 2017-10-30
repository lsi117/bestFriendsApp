console.log('main js is working!!');

//appending stuff to the DOM !!

function completeShelters(id, div) {
  fetch(`/bfAllView/${id}/complete`, {
    method: 'PUT',
  }).then(res => res.json())
    .then(jsonRes => {
      if (jsonRes.completed) {
        div.innerHTML = '<p>Done!</p>';
      }
    }).catch(err => {
      console.log(err);
    });
}

function grabCompletionDivs() {
  const completionDivs = document.querySelectorAll('.completion');
  completionDivs.forEach(div => {
    div.addEventListener('click', () => completeShelters(div.dataset.sheltersid, div));
  })
}

document.addEventListener('DOMContentLoaded', grabCompletionDivs);
