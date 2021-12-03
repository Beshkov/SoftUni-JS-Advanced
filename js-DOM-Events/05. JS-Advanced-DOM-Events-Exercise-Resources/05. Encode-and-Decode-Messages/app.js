function encodeAndDecodeMessages() {
    const messanger = document.getElementsByTagName('textarea')[0];
    const reciever = document.getElementsByTagName('textarea')[1];

    const encryptDecryptShift = (str, type) => str.split('')
        .map(x => String.fromCharCode(type === 'encode' ? x.charCodeAt(0) + 1 : x.charCodeAt(0) - 1))
        .join('')


    document.addEventListener('click', onClick);

    function onClick(e) {
        if (e.target.tagName ==='BUTTON') {
            if (e.target.textContent.includes('Encode')) {
                reciever.value = encryptDecryptShift(messanger.value, 'encode');
                messanger.value = '';
            }else {
                reciever.value = encryptDecryptShift(reciever.value, 'decode')
            }
        }
    }
}