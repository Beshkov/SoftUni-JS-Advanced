function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let = inputText = document.getElementById("searchField");
      let input = inputText.value.toLowerCase();

      const table = Array.from(document.querySelectorAll('tbody tr'));
      /* they need to be declared inside the function inorder to continue working after clicking it more then once.\
      My quess is that it if it they are declared outside it get there state only once and saves it.
      But when you declare them inside the function you get "redeclare" them everytime the function is called. 
      Getting the new value everytime. 
      */


      table.forEach((el) => {
         let text = el.textContent.toLowerCase();
         if (text.includes(input)){
            el.classList.add('select');
         } else { 
            el.classList.remove('select');
         }
      })
      inputText.value = '';
   }
   
}