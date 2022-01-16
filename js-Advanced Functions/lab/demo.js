function start(){

    let counter = 0;

    function increment(a){
        counter += a;
        console.log(counter);
    }

    return increment;

    // the data("counter") is transfered to the heep the moment it "incrment" is called.
}

const myincrement = start();
myincrement(2);
myincrement(2);
myincrement(2);