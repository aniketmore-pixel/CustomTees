const express = require('express');
const multer = require('multer');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5000;

// Initialize Supabase client
const supabaseUrl = process.env.SUPABASE_URL; // Your Supabase URL
const supabaseKey = process.env.SUPABASE_KEY; // Your Supabase API key
const supabase = createClient(supabaseUrl, supabaseKey);

// Set up multer for file uploads (keeping it in memory)
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Middleware to parse JSON bodies
app.use(express.json());

// Define the route for submitting design
app.post('/submit-design', upload.single('design'), async (req, res) => {
  const { title, name, email, phone, margin } = req.body; // Access user data from req.body
  const designFile = req.file; // Access the uploaded file

  // Check if file is uploaded
  if (!designFile) {
    return res.status(400).json({ message: 'Please upload a design file.' });
  }

  try {
    // Upload file to Supabase Storage
    const { data, error } = await supabase.storage
      .from('uploads') // Use the correct bucket name
      .upload(`${Date.now()}_${designFile.originalname}`, designFile.buffer, {
        contentType: designFile.mimetype,
        upsert: true, // Overwrite if file already exists
      });

    if (error) {
      console.error('Error uploading to Supabase:', error);
      return res.status(500).json({ message: error.message });
    }

    // Prepare the user data to log or return
    const userData = {
      title,
      name,
      email,
      phone,
      margin,
      designFile: data.path, // Use data.path to get the uploaded file path
    };

    // Log user data (or save to a database if needed)
    console.log('User data saved successfully:', userData);

    // Send a response back to the client
    res.json({ message: 'Design and user data submitted successfully!', designFile: userData });
  } catch (err) {
    console.error('Error handling the upload:', err);
    res.status(500).json({ message: 'Error saving user data.' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
