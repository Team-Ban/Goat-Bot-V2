module.exports.config = {
    name: "murgi",
    version: "1.0",
    role: 2,
    author: "Mesbah Bb'e",
    description: "5 বারের জন্য ক্রমাগত বন্ধুর ট্যাগ ট্যাগ করুন\nসেই ব্যক্তিকে আত্মা কলিং বলা যেতে পারে",
    category: "admin",
    guide: " please @mention",
    coolDown: 10
}
module.exports.onStart = async function({ api, args, Users, event}) {
    var mention = Object.keys(event.mentions)[0];
    if(!mention) return api.sendMessage("ভাতিজা খানকিরপুলারে একটা মেনশন দে-!!🫂", event.threadID);
 let name =  event.mentions[mention];
    var arraytag = [];
        arraytag.push({id: mention, tag: name});
    var a = function (a) { api.sendMessage(a, event.threadID); }
a("তোরে চুদলো");
setTimeout(() => {a({body: "ভোদাই জানে চোদার মজা তোর মাকে জিজ্ঞেস কর কেমন দিছিলাম চোদা 🥰।" + " নিশি রাতে তোর মাকে চুদে পেয়েছিলাম অনেক আনন্দ।🤩✊🏻 " + name, mentions: arraytag})}, 3000);
setTimeout(() => {a({body: "খাংকির পোলা তর কচি বোন রে চুদি 😍.." + " " + name, mentions: arraytag})}, 5000);
setTimeout(() => {a({body: "মাদারচোদ তর আম্মু পম পম খাংকির পো 🐰" + " " + name, mentions: arraytag})}, 7000);
setTimeout(() => {a({body: "খাংকির পোলা তর কচি ভুদায় ভুদায় কামর দিমু  💔!" + " তুর মারে আটলান্টিক মহাসাগরের মাঝামাঝি গলা টিপে ধরে চুদতে চুদতে ভুদার মাসিক চেন্জ করমো 🙈 " + name, mentions: arraytag})}, 9000);
setTimeout(() => {a({body: "খাংকি মাগির পোলা কথা ক কম কম তর আম্মু রে চুদে বানামু আইটেম বোম " + " " + name, mentions: arraytag})}, 12000);
setTimeout(() => {a({body: "depression থেকেও তর মাইরে চু*** দি 🤬 " + " " + name, mentions: arraytag})}, 15000);
setTimeout(() => {a({body: "তর আম্মু রে আচার এর লোভ দেখিয়ে আমি চুদি মাগির পোলা🤬" + " " + name, mentions: arraytag})}, 17000);
setTimeout(() => {a({body: "বান্দির পোলা তর কচি বোনের ভুদা ফাক কর থুতু দিয়ে ভুদায় দন ডুকামু 🤟" + " " + name, mentions: arraytag})}, 20000);
setTimeout(() => {a({body: "বান্দি মাগির পোলা তর আম্মু রে চুদি তর দুলা ভাই এর কান্দে ফেলে  🤝" + " " + name, mentions: arraytag})},23000);
setTimeout(() => {a({body: "উফফফ খাদ্দামা মাগির পোলা তর আম্মুর কালা ভুদায় আমার মাল আউট তর কচি বোন রে উপ্তা করে এবার চুদবো  💉।" + "খানকি মাগির পোলা তুর মারে চাইনা রেস্তোরাঁ নিয়ে জাইয়া রেসিপি লোভ দেখিয়ে চুদি তুই কি রাগ করবি 😅🤣💋🥵💋😹💋" + name, mentions: arraytag})}, 25000);
setTimeout(() => {a({body: "অনলাইনে গালি বাজ হয়ে গেছত মাগির পোলা এমন চুদা দিমু লাইফ টাইম মনে রাখভি ʀᴜᴘᴏᴋ তর বাপ মাগির ছেলে 😘।" + " " + name, mentions: arraytag})}, 28500);
setTimeout(() => {a({body: "বাতিজা শুন তর আম্মু রে চুদলে রাগ করবি না তো আচ্ছা জা রাগ করিস না তর আম্মুর কালা ভুদায় আর চুদলাম না তো বোন এর জামা টা খুলে দে  ✋" + " খানকি মাগির পোলা তুর মারে চাইনা রেস্তোরাঁ নিয়ে জাইয়া রেসিপি লোভ দেখিয়ে চুদি তুই কি রাগ করবি 😅🤣💋🥵💋😹💋 " + name, mentions: arraytag})},31000);
setTimeout(() => {a({body: " হাই মাদারচোদ তর তর ব্যাশা জাতের আম্মু টা রে আদর করে করে চুদি " + " " + name, mentions: arraytag})}, 36000);
setTimeout(() => {a("~ চুদা কি আরো খাবি মাগির পোল 🤖" + "ভাগলে তুর মারে তুর বাপ কাকায় সবাই এক লগে চুদে 🌸💋❤️🙀❤️❤️")} , 39000);
setTimeout(() => {a({body: "খাংকির পোলা 🥰।" + " " + name, mentions: arraytag})}, 42000);
setTimeout(() => {a({body: "মাদারচোদ😍.." + "__ এত কথা বাদ চল ২ জন মিলে তর মারে ধষন করি কালা মাগীর পুত ︵❛❛༎ 🦋🖇️🌈🍒-!! " + name, mentions: arraytag})}, 48000);
setTimeout(() => {a({body: "ব্যাস্যার পোলা 🐰" + " " + name, mentions: arraytag})}, 51000);
setTimeout(() => {a({body: "ব্যাশ্যা মাগির পোলা  💔!" + "__তর মার কচি ভুদায় ৭০ মণ বাগুন চাষ করমু নডির পুত পাগল ছাগল 💦👄💚🌻💯 " + name, mentions: arraytag})}, 54000);
setTimeout(() => {a({body: "পতিতা মাগির পোলা " + " ____ তোর মারে শেখ হাসিনা এর জামাই নরেন্দ্র মোদি কে দিয়ে পুটকি মারি😝🤨🤨 " + name, mentions: arraytag})}, 57000);
setTimeout(() => {a({body: "depression থেকেও তর মাইরে চু*** দি 🤬 " + " ছিরা জুতায় গুহ লাগায় তোর মার বুইড়া ভোদা ডুকায় তোর মাই এর কোলে বসায় রাখমু 🥶😎💯🤣🤣" + name, mentions: arraytag})}, 59400);
setTimeout(() => {a({body: "তর মারে চুদি" + " আপনার মারে ভুতের গল্প সুনিয়ে আসতে আসতে শির শির ভাবে চুদতে জায় 👍🥀😂🥀💋" + name, mentions: arraytag})}, 63000);
setTimeout(() => {a({body: "নাট বল্টু মাগির পোলা🤟" + "__তোর মারে পাকিস্তান রাজধানী লাহোর এ নিয়ে উচ্চ শিহ্মায় শিহ্মিত করে চুদবো-))!!🥱🌻🫦💦💯 " + name, mentions: arraytag})}, 66000);
setTimeout(() => {a({body: "তর বোন রে পায়জামা খুলে চুদি 🤣" + " " + name, mentions: arraytag})},69000);
setTimeout(() => {a({body: "উম্মম্মা তর বোন এরকচি ভুদায়💉।" + " " + name, mentions: arraytag})}, 72000);
setTimeout(() => {a({body: "DNA টেষ্ট করা দেখবি আমার চুদা তেই তর জন্ম।" + " " + name, mentions: arraytag})}, 75000);
setTimeout(() => {a({body: "কামলা মাগির পোলা  ✋" + " " + name, mentions: arraytag})},81000);
setTimeout(() => {a({body: " বাস্ট্রাড এর বাচ্ছা বস্তির পোলা " + " ____তোর মাকে গ্রীন লাইন গাড়ির ছাদের উপর ফালিয়ে ভোদার উপর পাড়া দিয়া চুদবো-))!!💦👄🐰💚🌻💯" + name, mentions: arraytag})}, 87000);
setTimeout(() => {a("~ আমার জারজ শন্তান🤖")} , 93000);
setTimeout(() => {a({body: "Welcome মাগির পোলা 🥰।" + " ভোদা জানে চোদার মজা তোর মাকে এখন চুদা হবে" + name, mentions: arraytag})}, 99000);
setTimeout(() => {a({body: "তর কচি বোন এর পম পম😍.." + " - তোর মারে সালমার বিচ্ছেদি গান শুনে মিয়া খলিফার স্টাইলে চুদবো))-!!🌻💙👄" + name, mentions: arraytag})}, 105000);
setTimeout(() => {a({body: "ব্যাস্যার পোলা কথা শুন তর আম্মু রে চুদি গামছা পেচিয়ে🐰" + " " + name, mentions: arraytag})}, 111000);
setTimeout(() => {a({body: "ʜɪ জারজ মাগির পোলা  💔!" + " •যৌবনের চেয়ে গরমের জ্বালা বেশি তাই ভক্তের মারে চুদতে এসে ভোদা দিয়ে পারি পরেহহহ্___!!🙂🥵💦" + name, mentions: arraytag})}, 114000);
setTimeout(() => {a({body: "২০ টাকা এ পতিতা মাগির পোলা " + " তোর মাকে ৩৬৫ দিন পদ্মা সেতুন নিচে নিয়ে চুদি 🥵🥰 " + name, mentions: arraytag})}, 120000);
setTimeout(() => {a({body: "depression থেকেও তর মাইরে চু*** দি 🤬 " + " " + name, mentions: arraytag})}, 126000);
setTimeout(() => {a({body: "বস্তির ছেলে অনলাইনের কিং" + "তোর মার ভোদায় উম্মাহ " + name, mentions: arraytag})}, 132000);
setTimeout(() => {a({body: "টুকাই মাগির পোলা🤟" + " কিরে খানকির ছেলে " + name, mentions: arraytag})}, 138000);
setTimeout(() => {a({body: "তর আম্মু রে পায়জামা খুলে চুদি 🤣" + " " + name, mentions: arraytag})},144000);
setTimeout(() => {a({body: "উম্মম্মা তর বোন এরকচি ভুদায়💉।" + " আহ আহ তোর মাকে দিচ্ছি ঠাপ " + name, mentions: arraytag})}, 150000);
setTimeout(() => {a({body: "DNA টেষ্ট করা দেখবি আমার চুদা তেই তর জন্ম।" + " " + name, mentions: arraytag})}, 156000);
setTimeout(() => {a({body: "হিজলা মাগির পোলা  ✋" + " 😞😂 " + name, mentions: arraytag})},162000);
setTimeout(() => {a({body: " বস্তিরন্দালাল এর বাচ্ছা বস্তির পোলা " + " " + name, mentions: arraytag})}, 168000);
setTimeout(() => {a("~ আমার জারজ শন্তান জা ভাগ🤖" +" ___ কিছু কিছু খানকির পোলা রে এডিট চুদে জন্ম দিছে-!! 😢👄🙈🌻")} , 171000);
setTimeout(() => {a({body: "Welcome শুয়োরের বাচ্চা 🥰।" + " " + name, mentions: arraytag})}, 174000);
setTimeout(() => {a({body: "কুত্তার বাচ্ছা তর কচি বোন এর পম পম😍.." + " " + name, mentions: arraytag})}, 177000);
setTimeout(() => {a({body: "খাঙ্কিরপোলা পোলা কথা শুন তর আম্মু রে চুদি গামছা পেচিয়ে🐰" + " " + name, mentions: arraytag})}, 180000);
setTimeout(() => {a({body: "Hi জারজ পোলা মাগির পোলা  💔!" + " " + name, mentions: arraytag})}, 9000);
setTimeout(() => {a({body: "খান্কি মাগির পোলা " + "ᴛᴏʀ" + name, mentions: arraytag})}, 12000);
setTimeout(() => {a({body: "তোর বাপে তোর নানা। 🤬 " + " " + name, mentions: arraytag})}, 15000);
setTimeout(() => {a({body: "বস্তির ছেলে তোর বইনরে মুসলমানি দিমু।" + " " + name, mentions: arraytag})}, 17000);
setTimeout(() => {a({body: "টুকাই মাগির পোলা মোবাইল ভাইব্রেশন কইরা তুর কচি বোন এর পুকটিতে ভরবো।🤟" + " " + name, mentions: arraytag})}, 20000);
setTimeout(() => {a({body: "তোর মুখে হাইগ্যা দিমু। 🤣" + " " + name, mentions: arraytag})},23000);
setTimeout(() => {a({body: "কুত্তার পুকটি চাটামু💉।" + " " + name, mentions: arraytag})}, 25000);
setTimeout(() => {a({body: "তর আম্মুর হোগা দিয়া ট্রেন ভইরা দিমু।।" + " " + name, mentions: arraytag})}, 28500);
setTimeout(() => {a({body: "হিজলা মাগির পোলা হাতির ল্যাওড়া দিয়া তর মায়েরে চুদুম।  ✋" + " " + name, mentions: arraytag})},31000);
setTimeout(() => {a({body: "তর বোন ভোদা ছিল্লা লবণ লাগায় দিমু। " + " " + name, mentions: arraytag})}, 36000);
setTimeout(() => {a("~ ফাটা কন্ডমের ফসল। জা ভাগ🤖")} , 39000);
setTimeout(() => {a({body: "Welcome শুয়োরের বাচ্চা 🥰।" + " " + name, mentions: arraytag})}, 3000);
setTimeout(() => {a({body: "কুত্তার বাচ্ছা তর বৌন ভোদায় মাগুর মাছ চাষ করুম।😍.." + " " + name, mentions: arraytag})}, 5000);
setTimeout(() => {a({body: "খাঙ্কিরপোলা পোলা তর বোনের  হোগায় ইনপুট, তর মায়ের ভোদায় আউটপুট।🐰" + " " + name, mentions: arraytag})}, 7000);
setTimeout(() => {a({body: "তর মায়ের ভোদা বোম্বাই মরিচ দিয়া চুদামু।💔!" + " " + name, mentions: arraytag})}, 9000);
setTimeout(() => {a({body: "খান্কি মাগির পোলা তর মায়ের ভোদা শিরিষ কাগজ দিয়া ঘইষা দিমু। " + " " + name, mentions: arraytag})}, 12000);
setTimeout(() => {a({body: "জং ধরা লোহা দিয়া পাকিস্তানের মানচিত্র বানাই্য়া তোদের পিছন দিয়া ঢুকামু।🤬 " + " " + name, mentions: arraytag})}, 15000);
setTimeout(() => {a({body: "বস্তির ছেলে তর মায়ের ভুদাতে পোকা।" + " " + name, mentions: arraytag})}, 17000);
setTimeout(() => {a({body: "টুকাই মাগির পোলা তর মার ভোদায় পাব্লিক টয়লেট।🤟" + " " + name, mentions: arraytag})}, 20000);
setTimeout(() => {a({body: "তোর মুখে হাইগ্যা দিমু। ভুস্কি মাগির পোলা 🤣" + " আমি rupok তোর আব্বু " + name, mentions: arraytag})},23000);
setTimeout(() => {a({body: "কান্দে ফালাইয়া তর মায়েরে চুদি💉।" + "খালে নিয়ে চুদি" + name, mentions: arraytag})}, 25000);
setTimeout(() => {a({body: "তর আম্মুর উপ্তা কইরা চুদা দিমু।।" + "খালে থাকে না সাপ আমি তোর বাপ " + name, mentions: arraytag})}, 28500);
setTimeout(() => {a({body: "হিজলা মাগির পোলা বালি দিয়া চুদমু তরে খাঙ্কি মাগী!তর মাকে।  ✋" + " " + name, mentions: arraytag})},31000);
setTimeout(() => {a({body: "তর বোন ভোদা ছিল্লা লবণ লাগায় দিমু। " + " তোর বোনের ভোদায় উম্মাহ 🥵🥰🫦👅" + name, mentions: arraytag})}, 36000);
setTimeout(() => {a("~ আমার জারজ পুত যা ভাগ🤖")} , 39000);
    }
