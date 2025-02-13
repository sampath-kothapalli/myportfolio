require("dotenv").config(); // Load environment variables
const express = require("express");
const admin = require("firebase-admin");

const app = express();

// Check if GOOGLE_CREDENTIALS_JSON exists
if (!process.env.GOOGLE_CREDENTIALS_JSON) {
  console.error("❌ Firebase initialization error: Missing GOOGLE_CREDENTIALS_JSON environment variable.");
  process.exit(1);
}

// Decode Google Service Account credentials
const credentials = JSON.parse(Buffer.from(process.env.GOOGLE_CREDENTIALS_JSON, "base64").toString());

admin.initializeApp({
  credential: admin.credential.cert(credentials),
});

app.get("/", (req, res) => {
  res.send("Server is running!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});



// const express = require("express");
// const admin = require("firebase-admin");
// require("dotenv").config(); // Ensure environment variables are loaded

// const app = express();
// app.use(express.json()); // Enable JSON request body parsing

// try {
//   // Decode Google Service Account credentials from Render environment variable
//   if (!process.env.GOOGLE_CREDENTIALS_JSON) {
//     throw new Error("Missing GOOGLE_CREDENTIALS_JSON environment variable.");
//   }

//   const credentials = JSON.parse(
//     Buffer.from(process.env.GOOGLE_CREDENTIALS_JSON, "base64").toString()
//   );

//   admin.initializeApp({
//     credential: admin.credential.cert(credentials),
//   });

//   console.log("✅ Firebase Admin initialized successfully!");
// } catch (error) {
//   console.error("❌ Firebase initialization error:", error);
//   process.exit(1); // Stop server if Firebase setup fails
// }

// // Define a basic route to check if the server is running
// app.get("/", (req, res) => {
//   res.send("✅ Server is running!");
// });

// // Handle form submissions (POST request)
// app.post("/", async (req, res) => {
//   try {
//     const { firstName, lastName, email, phone, message } = req.body;

//     if (!firstName || !lastName || !email || !message) {
//       return res.status(400).json({ code: 400, message: "Missing required fields." });
//     }

//     const db = admin.firestore();
//     const docRef = db.collection("contacts").doc(); // Save to Firestore
//     await docRef.set({
//       firstName,
//       lastName,
//       email,
//       phone,
//       message,
//       timestamp: admin.firestore.FieldValue.serverTimestamp(),
//     });

//     res.status(200).json({ code: 200, message: "Message saved successfully!" });
//   } catch (error) {
//     console.error("❌ Error saving message:", error);
//     res.status(500).json({ code: 500, message: "Internal server error." });
//   }
// });

// // Use Render's assigned PORT
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on port ${PORT}`);
// });











// const express = require("express");
// const admin = require("firebase-admin");

// const app = express();

// // Decode Google Service Account credentials from Render environment variable
// const credentials = JSON.parse(Buffer.from(process.env.GOOGLE_CREDENTIALS_JSON, "base64").toString());
// admin.initializeApp({
//   credential: admin.credential.cert(credentials),
// });

// // Define a basic route to check if the server is running
// app.get("/", (req, res) => {
//   res.send("Server is running!");
// });

// // Use Render's assigned PORT
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on port ${PORT}`);
// });








// const serviceAccount = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT);











// const express = require("express");
// const router = express.Router();
// const cors = require("cors");
// const nodemailer = require("nodemailer");

// // server used to send send emails
// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use("/", router);
// app.listen(5000, () => console.log("Server Running"));
// console.log(process.env.EMAIL_USER);
// console.log(process.env.EMAIL_PASS);

// const contactEmail = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: "********@gmail.com",
//     pass: ""
//   },
// });

// contactEmail.verify((error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Ready to Send");
//   }
// });

// router.post("/contact", (req, res) => {
//   const name = req.body.firstName + req.body.lastName;
//   const email = req.body.email;
//   const message = req.body.message;
//   const phone = req.body.phone;
//   const mail = {
//     from: name,
//     to: "********@gmail.com",
//     subject: "Contact Form Submission - Portfolio",
//     html: `<p>Name: ${name}</p>
//            <p>Email: ${email}</p>
//            <p>Phone: ${phone}</p>
//            <p>Message: ${message}</p>`,
//   };
//   contactEmail.sendMail(mail, (error) => {
//     if (error) {
//       res.json(error);
//     } else {
//       res.json({ code: 200, status: "Message Sent" });
//     }
//   });
// });
