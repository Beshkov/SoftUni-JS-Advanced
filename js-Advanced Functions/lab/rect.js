function createRect(wid, hei) {
    function getWidth() {
        return wid;
    }

    function getHeight() {
        return hei
    }

    function getArea() {
        return wid * hei
    }

    return {
        getHeight,
        getWidth,
        getArea
        
    };
}

const myRect = createRect(5,3);
console.log(myRect.getWidth())
console.log(myRect.getArea())