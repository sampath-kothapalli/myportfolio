const credentials = JSON.parse(Buffer.from(process.env.GOOGLE_CREDENTIALS_JSON, "base64").toString());
admin.initializeApp({
  credential: admin.credential.cert(credentials),
});




// const serviceAccount = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT);

// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const fs = require("fs");
// const { google } = require("googleapis");
// const multer = require("multer");
// require("dotenv").config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // Google Drive API Setup
// const auth = new google.auth.GoogleAuth({
//     keyFile: "service-account.json", // Your downloaded Google API key file
//     scopes: ["https://www.googleapis.com/auth/drive.file"],
// });

// const drive = google.drive({ version: "v3", auth });

// // Set up Multer to save form data as a text file before uploading
// const upload = multer({ dest: "uploads/" });

// app.post("/contact", upload.none(), async (req, res) => {
//     try {
//         const { firstName, lastName, email, phone, message } = req.body;
//         const fileName = `Contact-${Date.now()}.txt`;
//         const filePath = `uploads/${fileName}`;

//         // Create a text file with form data
//         fs.writeFileSync(filePath, `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`);

//         // Upload file to Google Drive
//         const response = await drive.files.create({
//             requestBody: {
//                 name: fileName,
//                 mimeType: "text/plain",
//                 parents: ["1neO8eQVm_2tKxf42yXNFy8a-wvZWVGhb"], // Replace with your Drive folder ID
//             },
//             media: {
//                 mimeType: "text/plain",
//                 body: fs.createReadStream(filePath),
//             },
//         });

//         console.log("File uploaded:", response.data);
//         fs.unlinkSync(filePath); // Delete local file after upload

//         res.json({ code: 200, message: "Message saved to Google Drive!" });
//     } catch (error) {
//         console.error("Error uploading to Drive:", error);
//         res.status(500).json({ code: 500, message: "Failed to save contact info" });
//     }
// });

// // Start Server
// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });
