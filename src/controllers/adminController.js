const AdminController = {
    // ... other functions
  
    // Sign up (register) a new admin
    signupAdmin: async (req, res) => {
      try {
        const { username, email, password } = req.body;
  
        // Check if the email is already in use
        const existingAdmin = await Admin.findOne({ where: { email } });
        if (existingAdmin) {
          return res.status(400).json({ error: 'Email is already in use' });
        }
  
        // Create a new admin
        const newAdmin = await Admin.create({
          username,
          email,
          password, // Note: The password will be automatically hashed in the model
        });
  
        return res.status(201).json(newAdmin);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
    },
  
    // Sign in an existing admin
    signinAdmin: async (req, res) => {
      try {
        const { email, password } = req.body;
  
        // Find admin by email
        const admin = await Admin.findOne({ where: { email } });
  
        // Check if admin exists and password is correct
        if (!admin || !bcrypt.compareSync(password, admin.password)) {
          return res.status(401).json({ error: 'Invalid credentials' });
        }
  
        // Return authenticated admin
        return res.json(admin);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
    },
  };
  
  module.exports = AdminController;
  