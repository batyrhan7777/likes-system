function likes(names) {
    if(typeof names !== "object") return;
    if (!names.length) return "no one likes this";
    if (names.length === 1) return `${names[0]} likes this`;
    if (names.length === 2) return `${names[0]} and ${names[1]} like this`;
    if (names.length === 3) return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    if (names.length >= 4) return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
}

console.log(likes([]));
console.log(likes(["Putin"]));
console.log(likes(["Artur", "Habib"]));
console.log(likes(["Tramp", "Habib", "Vadim"]));
console.log(likes(["Artur", "Habib", "Vadim", "Sveta"]));
console.log(likes(["Obama", "Habib", "Vadim", "Merkel", "Masha"]));
