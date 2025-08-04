module.exports = {
  // MongoDB Atlas connection (replace with your actual connection string)
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb+srv://ReviewIQ:Anshika%4013@cluster0.xh9e41z.mongodb.net/code-reviewer?retryWrites=true&w=majority&appName=Cluster0',
  
  // For local MongoDB (if installed) - uncomment if you want to use local MongoDB
  // MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/code-reviewer',
  
  JWT_SECRET: process.env.JWT_SECRET || 'dev-secret-key-change-in-production',
  PORT: process.env.PORT || 3000
}; 