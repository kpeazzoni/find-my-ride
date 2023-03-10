const router = require('express').Router();
const { Car} = require('../../models');

router.post('/', async (req, res) => {
    console.log(req.body);
      try {
        let car = req.body;
        car.kbbURL = `https://www.kbb.com/cars-for-sale/used/${car.year}/${car.make}/${car.model}`;
        car.user_id = req.session.user_id

            const carData = await Car.create(car);
            console.log(carData)
            res.status(200).json(carData);
        }
        catch (err) {
            res.status(400).json(err);
      }
});

router.get('/', async (req, res) => {
    try {
    
        const carData = await Car.findAll({ where: { user_id: req.session.user_id }});
        res.status(200).json(carData);
    }
    catch (err) {
        let errorMessages = "";
        err.errors.forEach(e => errorMessages += `\n ${e.message}`);
        res.status(400).json({message: errorMessages});
    } 
});

module.exports = router;