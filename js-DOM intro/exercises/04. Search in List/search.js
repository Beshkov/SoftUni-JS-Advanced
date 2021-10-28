function search() {
   const towns = Array.from(document.querySelectorAll('ul li'));
   const searchBox = document.getElementById('searchText').value;
   matches = 0;
   towns.forEach((el) =>{
      if (el.textContent.includes(searchBox)){
         el.style.fontWeight = "bold";
         el.style.textDecoration = "underline"
         matches ++;
      } else {
         el.style.fontWeight = "normal";
         el.style.textDecoration = "";
      }
   })
   if (matches > 0){
      document.getElementById('result').textContent = `${matches} matches found`
   }
   
}
