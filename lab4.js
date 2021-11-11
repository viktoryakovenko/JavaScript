let roles = [ "Городничий", "Аммос Федорович", "Артемий Филиппович", "Лука Лукич"] 

let textLines = `Городничий: Я пригласил вас, господа, с тем, чтобы сообщить вам пренеприятное известие: к нам едет ревизор.
Аммос Федорович: Как ревизор?
Артемий Филиппович: Как ревизор?
Городничий: Ревизор из Петербурга, инкогнито. И еще с секретным предписаньем.
Аммос Федорович: Вот те на!
Артемий Филиппович: Вот не было заботы, так подай!
Лука Лукич: Господи боже! еще и с секретным предписаньем!`

let quotes = textLines1.split("\n");
let results = roles.slice(); 

for (let i = 0; i < roles.length; i++) {
    results[i] += ":\n";    
    for (let quote of quotes) 
        if (quote.startsWith(roles[i]))
            results[i] += quote.replace(roles[i] + ":", quotes.indexOf(quote)+1 + ")") + "\n";

    console.log(results[i]);
}