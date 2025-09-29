// ===== Day 10 - Objects Deep Dive =====

// 1️⃣ Object literals, nested objects, dot vs bracket access
const book = {
title: "Unleash",
author: "Roberto Fernandez",
publisher: {
name: "JJ Publications",
city: "London, UK"
},
};

console.log(book.title);               // Dot access
console.log(book.publisher['name']);  // Bracket access
book["first-edition?"] = true;
console.log(book["first-edition?"]); // Special character key

const k = "publisher";
book[k].city = "Cardiff, Wales";
console.log(book); // Updated nested object

// 2️⃣ Destructuring + rest/spread + shallow vs deep copy
const person = {
name: "Mark",
age: 24,
club: "Tyrol FC",
playerProfile: {
Position: "CAM",
preferredFoot: "Right",
Strengths: ["Pace", "Dribbling", "Flair", "Vision", "Ambipedal", "Mentality"],
Weaknesses: ["Decision Making", "Over Arguing with refs"]
}
};

const { name, ...rest } = person;
console.log(name); // Mark
console.log(rest); // Rest of the object

// Shallow copy example
const shallowCopy = { ...person };
shallowCopy.playerProfile.Strengths.push("Killer in front of goal");
console.log(person.playerProfile.Strengths); // original array changed

// Deep copy example
const deepCopy = structuredClone(person);
deepCopy.playerProfile.Strengths[1] = "Trickery";
console.log(deepCopy.playerProfile.Strengths);
console.log(person.playerProfile.Strengths); // original untouched

const proto = { z: 99 }; 
const o = Object.create(proto); 
o.a = 1; 
o.b = 2; 
console.log(Object.keys(o)) 
console.log(Object.values(o)) 
console.log(Object.entries(o)) 
console.log(o.z); // inheritence property. 
console.log(o.hasOwnProperty("z")) //does o have the key z or not??? Noo.

//  Merge defaults safely without mutation
function mergeSettingsWithDefaults(defaults, user) {
const result = structuredClone(defaults);

function merge(target, source) {
for (const key in source) {
if (source[key] && typeof source[key] === "object" && !Array.isArray(source[key])) {
if (!target[key]) target[key] = {};
merge(target[key], source[key]);
} else {
target[key] = structuredClone(source[key]);
}
}
}

merge(result, user);
return result;
}

const defaults = {
theme: { color: "blue", size: 12 },
notifications: { email: true }
};
const userSettings = {
theme: { size: 14 },
notifications: { sms: true }
};
const merged = mergeSettingsWithDefaults(defaults, userSettings);
console.log("Merged settings:", merged);
console.log("Defaults still safe:", defaults);

// 4️⃣ Safely read nested data + optional chaining + nullish coalescing
console.log(person?.playerProfile?.Strengths?.[2] ?? "No extra strength"); // Flair
console.log(person?.playerProfile?.Weaknesses?.[2] ?? "No extra weakness"); // No extra weakness
console.log(person?.coach?.experience ?? "No coach assigned"); // No coach assigned
