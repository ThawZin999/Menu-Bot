import { Markup } from "telegraf";

const groupId = -1002476040515; // Your group's chat ID

const handleBooks = async (ctx, messageIds) => {
  try {
    for (const messageId of messageIds) {
      await ctx.telegram.copyMessage(ctx.chat.id, groupId, messageId);
    }
    await ctx.reply(
      "အချို့စာအုပ်များကိုဂိုဒေါင်ရှင်းအထူးလျှော့ဈေးဖြင့်ပေးထားပါတယ်။\nစာအုပ်ဝယ်ယူရန်အတွက် ဝယ်ယူမည့်စာအုပ်၏ codeကိုမှတ်ပြီး Adminနှင့်တိုက်ရိုက်ဆက်သွယ်မှာယူနိုင်ပါတယ်ခင်ဗျာ👇",
      Markup.inlineKeyboard([
        Markup.button.url("Admin နှင့်ဆက်သွယ်မည်", "https://t.me/hikarujls"),
      ])
    );
  } catch (error) {
    console.error("Error forwarding message:", error);
    await ctx.reply("Sorry, There is a error. 🙇🏻‍♂️");
  }
};

export const setupBookHandlers = (bot) => {
  bot.hears("Hikaruမှ ဝယ်ယူနိုင်သည့်ဂျပန်စာအုပ်များ", (ctx) => {
    ctx.reply(
      "Choose the level:",
      Markup.keyboard([
        ["N5 Books", "N4 Books"],
        ["N3 Books", "N2 Books"],
        ["General Books"],
        ["Back"],
      ])
        .resize()
        .oneTime(false)
    );
  });

  bot.hears("N5 Books", async (ctx) => {
    const messageIds = [44, 46, 48, 50, 52, 54, 110]; // List of message IDs to copy
    await handleBooks(ctx, messageIds);
  });

  bot.hears("N4 Books", async (ctx) => {
    const messageIds = [56, 58, 60, 62, 64, 66, 98, 106, 108]; // List of message IDs to copy
    await handleBooks(ctx, messageIds);
  });

  bot.hears("N3 Books", async (ctx) => {
    const messageIds = [68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88]; // List of message IDs to copy
    await handleBooks(ctx, messageIds);
  });

  bot.hears("N2 Books", async (ctx) => {
    const messageIds = [94, 96]; // List of message IDs to copy
    await handleBooks(ctx, messageIds);
  });

  bot.hears("General Books", async (ctx) => {
    const messageIds = [100, 102, 104]; // List of message IDs to copy
    await handleBooks(ctx, messageIds);
  });
};
