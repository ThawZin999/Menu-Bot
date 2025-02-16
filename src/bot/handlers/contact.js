import { Markup } from "telegraf";

export const setupContactCommand = (bot) => {
  bot.command("contact", (ctx) => {
    ctx.reply(
      "Contact Us:",
      Markup.inlineKeyboard([
        [
          Markup.button.url(
            "Facebook Page",
            "https://www.facebook.com/hikarujapaneseschool"
          ),
        ],
        [
          Markup.button.url(
            "YouTube Channel",
            "https://youtube.com/@hikarujls"
          ),
        ],
        [Markup.button.url("Telegram", "https://t.me/hikarujls")],
      ])
    );
  });
};
