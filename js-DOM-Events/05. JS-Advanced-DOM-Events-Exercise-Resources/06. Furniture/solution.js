function solve() {
    /*# configure event listener #*/
    // select all buttons
    // first button -> table generation
    // second button -> buy furniture


    const table = document.querySelector('table.table tbody')
    const [input, output] = Array.from(document.querySelectorAll('textarea'));

    const [generateBtn, buyBtn] = Array.from(document.querySelectorAll('button'));

    generateBtn.addEventListener('click', generate);
    buyBtn.addEventListener('click', buy);

    /*# table generation #*/
    function generate(e) {
        // read input JSON and parse it
        // for every array element, crate table row
        const data = JSON.parse(input.value)

        for (let item of data) {
            const row = document.createElement('tr');

            row.appendChild(createCell('img', { src: item.img})); // imgCell
            row.appendChild(createCell('p', {}, item.name)); // nameCell
            row.appendChild(createCell('p', {}, item.price)); // priceCell
            row.appendChild(createCell('p', {}, item.decFactor)); // decFactorCell
            row.appendChild(createCell('input', { type: 'checkbox'},)); // checkCell

            table.appendChild(row);
        }
    }

    function createCell(nestedTag, props, content) {
        
        const cell = document.createElement('td');
        const nested = document.createElement(nestedTag);
        
        for ( let prop in props){
            nested[prop] = props[prop];
        };

        if ( content ){
            nested.textContent = content
        }

        cell.appendChild(nested)

        return cell
    }

    /*# buy furniture #*/
    /**
     * 
     * @param {Event} e 
     */
    function buy(e) {
        
        // select all checkboxes
        // filter only checked checkboxes
        // repeat for every selected checkbox
        // -- select parent row
        // -- read item information
        // display output    
        const furniture = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
            .map(box => box.parentElement.parentElement)
            .map(row => ({
                name: row.children[1].textContent,
                price: Number(row.children[2].textContent),
                decFactor: Number(row.children[3].textContent)
            }))
            .reduce((acc, curr, index, originalArray) => {
                acc.names.push(curr.name);
                acc.total += curr.price;
                acc.decFactor += curr.decFactor / originalArray.length;
                return acc;
            },{ names: [], total: 0, decFactor: 0});

        const result = `Bought furniture: ${furniture.names.join(', ')}
Total price: ${furniture.total.toFixed(2)}
Average decoration factor: ${furniture.decFactor}`

        output.value = result
    }

}
