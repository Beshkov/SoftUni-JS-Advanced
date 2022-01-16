function createProcessor() {
    let state = '';
    
    return {
        append,
        removeEnd,
        removeStart,
        print
    };


    function append(str) {
        state = state + str;
    }

    function removeStart(n) {
        state = state.slice(n);
    }


    function removeEnd(n){
        state = state.slice(0, -n);
    }

    function print() {
        console.log(state);
    }




}



const firstZeroTest = createProcessor();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();