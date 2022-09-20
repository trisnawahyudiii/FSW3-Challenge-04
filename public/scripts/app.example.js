class App {
    constructor() {
        console.log('App example js: constructor');
        this.clearButton = document.getElementById('clear-btn');
        this.loadButton = document.getElementById('load-btn');
        this.carContainerElement = document.getElementById('cars-container');
    }

    async init() {
        console.log('App example js: init');
        await this.load();

        // Register click listener
        this.clearButton.onclick = this.clear;
        this.loadButton.onclick = this.run;
    }

    run = () => {
        console.log('App example js: run');
        Car.list.forEach((car) => {
            const node = document.createElement('div');
            node.innerHTML = car.render();
            this.carContainerElement.appendChild(node);
        });
    };

    async load() {
        console.log('App example js: load');
        const cars = await Binar.listCars();
        Car.init(cars);
        // console.log(cars);
    }

    clear = () => {
        console.log('App example js: clear');
        let child = this.carContainerElement.firstElementChild;

        while (child) {
            child.remove();
            child = this.carContainerElement.firstElementChild;
        }
    };
}
