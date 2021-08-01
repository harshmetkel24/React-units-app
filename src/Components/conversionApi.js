const conversionApi = [
    {
        id: 1,
        quantity: 'Length',
        lunit: 'Meter',
        runit: 'Centimeter',
        formula: 'multiply the Length value by 100',
    },
    {
        id: 2,
        quantity: 'Mass',
        lunit: 'Kilogram',
        runit: 'Gram',
        formula: 'multiply the Kilogram value by 1000',
    },
    {
        id: 3,
        quantity: 'Time',
        lunit: 'Second',
        runit: 'Minute',
        formula: 'divide the Second value by 60',
    },
    {
        id: 4,
        quantity: 'Temperature',
        lunit: 'Kelvin',
        runit: 'Celcius',
        formula: 'subtract 273 from Kelvin',
    },
];

export default conversionApi;
