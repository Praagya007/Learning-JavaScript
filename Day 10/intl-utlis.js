// Day16/intl-utils.js

// 1. Date Basics
const currDate = new Date();
const weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const currentDay = weekDays[currDate.getDay()];

console.log("📅 Date Basics");
console.log("Year:", currDate.getFullYear());
console.log("Month:", currDate.getMonth() + 1); // Months are 0-based
console.log("Day:", currDate.getDate());
console.log("Hour:", currDate.getHours());
console.log("Minutes:", currDate.getMinutes());
console.log("Day of week:", currentDay);
console.log("-----------------------------------");

// 2. Date Formatting (Intl.DateTimeFormat)
console.log("🌍 Intl Date Formatting");
const ukDateTime = new Intl.DateTimeFormat("en-GB", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
}).format(currDate);

console.log("UK Format:", ukDateTime);

const deFormat = new Intl.DateTimeFormat("de-DE", { dateStyle: "full", timeStyle: "short" });
console.log("German Format:", deFormat.format(currDate));

const jaFormat = new Intl.DateTimeFormat("ja-JP", { dateStyle: "full", timeStyle: "short" });
console.log("Japanese Format:", jaFormat.format(currDate));

const npFormat = new Intl.DateTimeFormat("ne-NP", { dateStyle: "full", timeStyle: "short" });
console.log("Nepali Format:", npFormat.format(currDate));
console.log("-----------------------------------");

// 3. Currency Formatting (Intl.NumberFormat)
console.log("💰 Currency Formatting");
function convertCurrency(currencyName, currencyValue, locale = "en-US") {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currencyName
  }).format(currencyValue);
}

const currencyValue = 5000;
const currencies = ["USD", "EUR", "JPY"].map(currencyName => {
  return convertCurrency(currencyName, currencyValue);
});

console.log("Currencies:", currencies);
console.log("-----------------------------------");

// 4. Regex Examples
console.log("🧩 Regex Validation");
// Username: 3–12 chars, letters + digits only
const userNameRegex = /^[a-zA-Z0-9]{3,12}$/;
console.log("Valid username (andras009):", userNameRegex.test("andras009"));

// Website: basic check for .com domains
const websiteRegex = /^https?:\/\/[a-zA-Z0-9.-]+\.(com|io|ai|in|org)$/;  
//s? means s is optional, we use backslash to escape and get actual / as its special in regex, works for point(.) too, + means separation, and the last domains names should match with them.


console.log("Valid website (https://z.ai):", websiteRegex.test("http://google.com"));
console.log("-----------------------------------");

