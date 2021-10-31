function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);
    // display restauratn of all the added one with its BEST and AVERAGE salarey.
    // best restorant is the one with the highes Average salary.
    // if two have the same the best is the 1st one added.
    // display the workers in the best restauratns with there salaries - sorted by SALARIES in Descending order.



    function onClick() {
        let text = JSON.parse(document.querySelector('#inputs textarea').value);
        
        let restaurants = {};

        for (let i=0; i < text.length; i++){
            let [restaurantName, workersString] = text[i].split(' - ')
            let inputWorkers = workersString.split(', ').map(workerAndSalaryString => {
                let [workerName, workerSalary] = workerAndSalaryString.split(' ');
                return {workerName, salary: Number(workerSalary)};
            })
            
            if (!restaurants[restaurantName]){
                restaurants[restaurantName] = {
                    workers: [],
                    restaurantName: restaurantName,
                    getAverageSalary: function(){
                        return this.workers.reduce((acc, el) => acc + el.salary, 0)/this.workers.length
                    }
                };
            }

            restaurants[restaurantName].workers = restaurants[restaurantName].workers.concat(inputWorkers)         
        }
        // sort retaurants by averagesalary in descending order
        let sortedRestaurants = Object.values(restaurants).sort((a,b) => b.getAverageSalary()-a.getAverageSalary())
        let bestRestaurant = sortedRestaurants[0];
        let sortedWorkers = bestRestaurant.workers.sort((a,b) => b.salary - a.salary);
        let averageSalary = bestRestaurant.getAverageSalary().toFixed(2);
        
        let bestsalary = sortedWorkers[0].salary.toFixed(2);
        let topRestaurant = `Name: ${bestRestaurant.restaurantName} Average Salary: ${averageSalary} Best Salary: ${bestsalary}`;
        let workersToString = sortedWorkers.map(x => `Name: ${x.workerName} With Salary: ${x.salary}`).join(' ')

        // insert best restaurtant in the DOM:  <p> - element 
        let bestRestaurantPElement = document.querySelector('#bestRestaurant p');
        let workersPElement = document.querySelector('#workers p');

        bestRestaurantPElement.textContent = topRestaurant;
        workersPElement.textContent = workersToString;
    }



}
