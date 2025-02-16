import { Markup } from "telegraf";

const groupId = -1002250750536; // Your group's chat ID

const handleKotoba = async (ctx, messageId) => {
  try {
    await ctx.telegram.copyMessage(ctx.chat.id, groupId, messageId);
  } catch (error) {
    console.error("Error forwarding message:", error);
    await ctx.reply("Sorry, There is a error. 🙇🏻‍♂️");
  }
};

export const setupKotobaHandlers = (bot) => {
  bot.hears("Kotobaများကျက်ရန်", (ctx) => {
    ctx.reply(
      "Level ရွေးချယ်ပါ။ လတ်တလောတွင် N5 Kotoba သာရနိုင်ပါမည်။ ဆက်လက်ထည့်သွင်းပေးသွားပါမည်။",
      Markup.keyboard([
        ["N5 Kotoba", "N4 Kotoba"],
        ["N3 Kotoba", "N2 Kotoba"],
        ["N1 Kotoba", "Back"],
      ])
        .resize()
        .oneTime(false)
    );
  });

  bot.hears("N5 Kotoba", (ctx) => {
    ctx.reply(
      "Example-Unit 1 Kotobaကျက်ရန်အတွက်N5 1ကိုရွေးချယ်ပါ။ ",
      Markup.keyboard([
        ["N5 1", "N5 2", "N5 3"],
        ["N5 4", "N5 5", "N5 6"],
        ["N5 7", "N5 8", "N5 9"],
        ["N5 10", "N5 11", "N5 12"],
        ["N5 13", "N5 14", "N5 15"],
        ["N5 16", "N5 17", "N5 18"],
        ["N5 19", "N5 20", "N5 21"],
        ["N5 22", "N5 23", "N5 24"],
        ["N5 25", "Back"],
      ])
        .resize()
        .oneTime(false)
    );
  });

  const n5MessageIds = {
    "N5 1": 11,
    "N5 2": 25,
    "N5 3": 27,
    "N5 4": 29,
    "N5 5": 31,
    "N5 6": 33,
    "N5 7": 35,
    "N5 8": 37,
    "N5 9": 47,
    "N5 10": 49,
    "N5 11": 51,
    "N5 12": 53,
    "N5 13": 55,
    "N5 14": 57,
    "N5 15": 59,
    "N5 16": 61,
    "N5 17": 63,
    "N5 18": 65,
    "N5 19": 67,
    "N5 20": 69,
    "N5 21": 71,
    "N5 22": 73,
    "N5 23": 75,
    "N5 24": 77,
    "N5 25": 79,
  };

  Object.keys(n5MessageIds).forEach((key) => {
    bot.hears(key, async (ctx) => {
      const messageId = n5MessageIds[key];
      await handleKotoba(ctx, messageId);
    });
  });

  // bot.hears("N4 Kotoba", (ctx) => {
  //   ctx.reply(
  //     "ဉပမာ-Unit 1 Kotobaကျက်ရန်အတွက်N4 1ကိုရွေးချယ်ပါ။ ",
  //     Markup.keyboard([
  //       ["N4 1", "N4 2", "N4 3"],
  //       ["N4 4", "N4 5", "N4 6"],
  //       ["N4 7", "N4 8", "N4 9"],
  //       ["N4 10", "N4 11", "N4 12"],
  //       ["N4 13", "N4 14", "N4 15"],
  //       ["N4 16", "N4 17", "N4 18"],
  //       ["N4 19", "N4 20", "N4 21"],
  //       ["N4 22", "N4 23", "N4 24"],
  //       ["N4 25", "Back"],
  //     ])
  //       .resize()
  //       .oneTime(false)
  //   );
  // });

  // const n4MessageIds = {
  //   "N4 1": 11,
  //   "N4 2": 25,
  //   "N4 3": 27,
  //   "N4 4": 29,
  //   "N4 5": 31,
  //   "N4 6": 33,
  //   "N4 7": 35,
  //   "N4 8": 37,
  //   "N4 9": 47,
  //   "N4 10": 49,
  //   "N4 11": 51,
  //   "N4 12": 53,
  //   "N4 13": 55,
  //   "N4 14": 57,
  //   "N4 15": 59,
  //   "N4 16": 61,
  //   "N4 17": 63,
  //   "N4 18": 65,
  //   "N4 19": 67,
  //   "N4 20": 69,
  //   "N4 21": 71,
  //   "N4 22": 73,
  //   "N4 23": 75,
  //   "N4 24": 77,
  //   "N4 25": 79,
  // };

  // Object.keys(n4MessageIds).forEach((key) => {
  //   bot.hears(key, async (ctx) => {
  //     const messageId = n4MessageIds[key];
  //     await handleKotoba(ctx, messageId);
  //   });
  // });
};
