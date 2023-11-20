const express = require('express');
const AdminController = require('../controllers/adminController');
const RestaurantController = require('../controllers/restaurantController');

const router = express.Router();

// Admin routes
router.post('/signup', AdminController.signupAdmin);
router.post('/signin', AdminController.signinAdmin);

// Restaurant routes
router.post('/restaurants', RestaurantController.addRestaurant);
router.delete('/restaurants/:restaurantId', RestaurantController.removeRestaurant);


router.post('/restaurants/:restaurantId/menu', RestaurantController.addItemToMenu);

router.put('/restaurants/:restaurantId/menu/:itemId', RestaurantController.updateMenuItem);

router.delete('/restaurants/:restaurantId/menu/:itemId', RestaurantController.removeMenuItem);



router.put('/restaurants/:restaurantId/online', RestaurantController.setOnline);

router.put('/restaurants/:restaurantId/offline', RestaurantController.setOffline);

module.exports = router;
