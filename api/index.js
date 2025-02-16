import express from "express";
import { Telegraf } from "telegraf";
import { setupCommands } from "../src/bot/commands.js";
import { BOT_TOKEN, PORT } from "../src/config.js";

const app = express();
const bot = new Telegraf(BOT_TOKEN);

// Middleware
app.use(express.json());

// Basic Route for Browser Testing
app.get("/", (req, res) => {
  res.send("Hello, World! The bot server is up and running!");
});

// Webhook Handler
app.post("/webhook", async (req, res) => {
  await bot.handleUpdate(req.body, res);
});

// Export App for Vercel
export default app;

// Only start the server if this file is executed directly
if (process.argv[1].endsWith(import.meta.url.slice(7))) {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

// Setup commands and handlers
setupCommands(bot);
