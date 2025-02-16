import { getMainMenu, getInlineKeyboard } from "./menus.js";
import { setupBookHandlers } from "./handlers/books.js";
import { setupKotobaHandlers } from "./handlers/kotoba.js";
import { setupVdclassesHandlers } from "./handlers/vdclasses.js";
import { setupFileHandlers } from "./handlers/files.js";
import { setupVideoHandlers } from "./handlers/videos.js";
import { setupContactCommand } from "./handlers/contact.js";

export const setupCommands = (bot) => {
  bot.start(async (ctx) => {
    await ctx.reply(
      "မင်္ဂလာပါ။ Hikaru Bot မှ ကြိုဆိုပါတယ် ❤️",
      getInlineKeyboard()
    );
    await ctx.reply("Main Menu", getMainMenu());
  });

  // Setup handlers
  setupBookHandlers(bot);
  setupKotobaHandlers(bot);
  setupVdclassesHandlers(bot);
  setupFileHandlers(bot);
  setupVideoHandlers(bot);
  setupContactCommand(bot);
  // Setup handlers

  bot.hears("Back", (ctx) => {
    ctx.reply("Main Menu:", getMainMenu());
  });
};
