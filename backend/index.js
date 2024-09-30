const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Save files to the uploads directory
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Append timestamp to filename
  },
});

const upload = multer({ storage: storage });

// Define the route for submitting design
app.post('/submit-design', upload.single('design'), (req, res) => {
  const { title, name, email, phone, margin } = req.body; // Access user data from req.body
  const designFile = req.file; // Access the uploaded file

  // Prepare the user data to write to a file
  const userData = `Title: ${title}\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMargin: ${margin}\nDesign File: ${designFile.filename}\n\n`;

  // Write user data to a text file
  fs.appendFile('./uploads/userData.txt', userData, (err) => {
    if (err) {
      console.error('Error writing to file:', err);
      return res.status(500).json({ message: 'Error saving user data.' });
    }
    
    console.log('User data saved successfully:', userData);

    // Send a response back to the client
    res.json({ message: 'Design and user data submitted successfully!', designFile });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
