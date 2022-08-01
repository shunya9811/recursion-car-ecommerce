var app = new Vue({
    el: "#app",
    data: {
        products: [
            {id: 1, name: 'Model 3', category: 'Tesla', price: 48490, date: 20200904, image: './images/Model3.jpg'},
            {id: 2, name: 'Model X', category: 'Tesla', price: 89990, date: 20170808, image: './images/ModelX.jpg'},
            {id: 3, name: 'Model S', category: 'Tesla', price: 82990, date: 20190401, image: './images/ModelS.jpg'},
            {id: 4, name: 'Model Y', category: 'Tesla', price: 48190, date: 20200202, image: './images/ModelY.jpg'},
            {id: 5, name: 'Cayenne', category: 'Porsche', price: 67500, date: 20171220, image: './images/Cayenne.jpg'},
            {id: 6, name: 'Macan', category: 'Porsche', price: 52100, date: 20190712, image: './images/Macan.jpg'},
            {id: 7, name: 'Camry', category: 'Toyota', price: 24425, date: 20150629, image: './images/Camry.jpg'},
            {id: 8, name: 'Accord', category: 'Honda', price: 24800, date: 20181002, image: './images/Accord.jpg'},
            {id: 9, name: 'Civic', category: 'Honda', price: 20650, date: 20150404, image: './images/Civic.jpg'},
            {id: 10, name: 'CX-5', category: 'Mazda', price: 26940, date: 20121103, image: './images/CX-5.jpg'},
            {id: 11, name: 'GLE Coupe', category: 'Mercedes-Benz', price: 76500, date: 20200205, image: './images/GLECoupe.jpg'},
            {id: 12, name: 'CLA', category: 'Mercedes-Benz', price: 37850, date: 20190609, image: './images/CLA.jpg'},
            {id: 13, name: 'GLA 250', category: 'Mercedes-Benz', price: 37280, date: 20170502, image: './images/GLA250.jpg'},
            {id: 14, name: 'RX 350', category: 'Lexus', price: 45175, date: 20150101, image: './images/RX350.jpg'},
            {id: 15, name: 'NX 300', category: 'Lexus', price: 37510, date: 20180912, image: './images/NX300.jpg'},
            {id: 16, name: 'Urus', category: 'Lamborghini', price: 218000, date: 20210816, image: './images/Urus.jpg'},
            {id: 17, name: 'Aventador', category: 'Lamborghini', price: 393695, date: 20200911, image: './images/Aventador.jpg'},
            {id: 18, name: 'A3', category: 'Audi', price: 33500, date: 20190508, image: './images/A3.jpg'}, 
            {id: 19, name: 'X3', category: 'BMW', price: 43000, date: 20180311, image: './images/X3.jpg'},
            {id: 20, name: '2 Series', category: 'BMW', price: 37500, date: 20190115, image: '/images/2Series.jpg'}
        ]
    }
});