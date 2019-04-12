function likes(names){
    let length = names.length;
    switch(length){
        case 0:
            console.log(`No one like this`);
            break;
        case 1:
            console.log(`${names[0]} likes this`);
            break;
        case 2:
            console.log(`${names[0]} and ${names[1]} like this`);
            break;
        case 3:
            console.log(`${names[0]}, ${names[1]} and ${names[1]} like this`);
            break;
    }
    if(length >= 4){
        console.log(`${names[0]}, ${names[1]} and ${length-2} others like this`);
    }
}

likes([]);
likes(["Putin"]);
likes(["Artur", "Habib"]);
likes(["Tramp", "Habib", "Vadim"]);
likes(["Artur", "Habib", "Vadim", "Sveta"]);
likes(["Obama", "Habib", "Vadim", "Merkel", "Vasia", "Petia", "Masha"]);