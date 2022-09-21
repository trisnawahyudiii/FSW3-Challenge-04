class Car {
    static list = [];

    static init(cars) {
        this.list = cars.map((i) => new this(i));
    }

    constructor({ id, plate, manufacture, model, image, rentPerDay, capacity, description, transmission, available, type, year, options, specs, availableAt }) {
        this.id = id;
        this.plate = plate;
        this.manufacture = manufacture;
        this.model = model;
        this.image = image;
        this.rentPerDay = rentPerDay;
        this.capacity = capacity;
        this.description = description;
        this.transmission = transmission;
        this.available = available;
        this.type = type;
        this.year = year;
        this.options = options;
        this.specs = specs;
        this.availableAt = availableAt;
    }

    render() {
        const rentCost = rupiah(this.rentPerDay);
        return `

            <div class="col m-2">
                <div class="card" style="width: 18rem; height: 550px">
                <img src="${this.image}"" class="thisd-img-top img-fluid" alt="${this.manufacture}" style="height: 190px; object-fit: scale-down;">
                <div class="thisd-body" style="font-size: 14px;">
                    <p class="thisd-title">${this.manufacture} ${this.model}</p>
                    <p class="fw-bold">${rentCost} / hari</p>
                    <p class="thisd-text" style="height: 90px">${this.description}</p>
                    <div class="my-2"><i class="bi bi-people me-2"></i>${this.capacity} Orang</div>
                    <div class="my-2"><i class="bi bi-gear me-2"></i>${this.transmission}</div>
                    <div class="my-2"><i class="bi bi-calendar4 me-2"></i>${this.year}</div>
                    <a href="#" class="btn bg-button text-white w-100 mt-2 fw-bold mt-4" style="font-size: 14px;">Pilih Mobil</a>
                </div>
                </div>
            </div>
        `;
    }
}

