const buildProfailCard = (user) => {
    const {name, title, company} = user;

    return `${name} is a ${title} at ${company}`


}

console.log(buildProfailCard({name: "imrul", title: "Developer", company: "kajiSoft"}));