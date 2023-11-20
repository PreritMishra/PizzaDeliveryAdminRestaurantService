const { Restaurant } = require('../models');

const RestaurantController = {
  // Add a new restaurant
  addRestaurant: async (req, res) => {
    try {
      const { name, location } = req.body;

      // Create a new restaurant
      const newRestaurant = await Restaurant.create({
        name,
        location,
      });

      return res.status(201).json(newRestaurant);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  // Remove a restaurant
  removeRestaurant: async (req, res) => {
    try {
      const { id } = req.params;

      // Check if the restaurant exists
      const restaurant = await Restaurant.findByPk(id);

      if (!restaurant) {
        return res.status(404).json({ error: 'Restaurant not found' });
      }

      // Remove the restaurant
      await restaurant.destroy();

      return res.status(204).send(); // No content response
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  addItemToMenu: async (req, res) => {
    try {
      const { restaurantId } = req.params;
      const { name, price } = req.body;

      // Check if the restaurant exists
      const restaurant = await Restaurant.findByPk(restaurantId);
      if (!restaurant) {
        return res.status(404).json({ error: 'Restaurant not found' });
      }

      // Add a new item to the menu
      const newItem = await MenuItem.create({
        name,
        price,
      });

      // Associate the item with the restaurant
      await restaurant.addMenuItem(newItem);

      return res.status(201).json(newItem);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  // Update an item on the menu
  updateMenuItem: async (req, res) => {
    try {
      const { itemId } = req.params;
      const { name, price } = req.body;

      // Check if the item exists
      const item = await MenuItem.findByPk(itemId);
      if (!item) {
        return res.status(404).json({ error: 'Menu item not found' });
      }

      // Update the item
      await item.update({
        name,
        price,
      });

      return res.json(item);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  // Remove an item from the menu
  removeMenuItem: async (req, res) => {
    try {
      const { itemId } = req.params;

      // Check if the item exists
      const item = await MenuItem.findByPk(itemId);
      if (!item) {
        return res.status(404).json({ error: 'Menu item not found' });
      }

      // Remove the item
      await item.destroy();

      return res.status(204).send(); // No content response
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  // Set restaurant online
  setOnline: async (req, res) => {
    try {
      const { restaurantId } = req.params;

      // Check if the restaurant exists
      const restaurant = await Restaurant.findByPk(restaurantId);
      if (!restaurant) {
        return res.status(404).json({ error: 'Restaurant not found' });
      }

      // Set the restaurant online
      await restaurant.update({
        isOnline: true,
      });

      return res.json(restaurant);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  // Set restaurant offline
  setOffline: async (req, res) => {
    try {
      const { restaurantId } = req.params;

      // Check if the restaurant exists
      const restaurant = await Restaurant.findByPk(restaurantId);
      if (!restaurant) {
        return res.status(404).json({ error: 'Restaurant not found' });
      }

      // Set the restaurant offline
      await restaurant.update({
        isOnline: false,
      });

      return res.json(restaurant);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = RestaurantController;
