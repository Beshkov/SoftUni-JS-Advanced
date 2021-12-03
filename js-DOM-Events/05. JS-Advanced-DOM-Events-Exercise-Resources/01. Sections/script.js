function create(words) {
   let result = document.getElementById('content')
   Array.from(words).forEach(word => {
      let div = document.createElement('div');
      let p = document.createElement('p');
      p.textContent = word;
      p.style.display = 'none'
      div.addEventListener('click', onClick)
      div.appendChild(p)
      result.appendChild(div);
   });

   function onClick(ev) {
      console.log(ev.target.childNodes[0].style.display = '');
   }
}