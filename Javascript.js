const quotes = [
    {
        quote: `Sans cesse nous nous surprenonsà nous commettre avec le repoussantque ce soit une choseou qu'il s'agisse d'êtres humainsnous sommes en contact avec une chose repoussanteencore et toujoursencore et toujours avec des êtres repoussants aussice qui est repoussant nous attire.`,
        author:'-Thomas Bernhard '
    },

    {
        quote: ` Le sens de la vie supprimé, il reste encore la vie`,
        author:'-Camus'
    },

    {
        quote: ` Notre vie vaut ce qu'elle nous a coûté d'efforts (Le jeune homme)`,
        author:'-Mauriac'
    },
    {
        quote: ` La vie sans religion est une vie sans principe et une vie sans principe est comme un bateau sans gouvernail`,
        author:'-Gandhi'
    },
    {
        quote: ` La vie est l'adaptation continue de relations internes à des relations externes (Qu'est-ce que la morale ?) `,
        author:'-Spencer'
    },
    {
        quote: `Nous sommes tous résignés à la mort; c'est à la vie que nous n'arrivons pas à nous résigner (Le fond du problème) `,
        author:'-Greene'
    },
    {
        quote: `  La vie oscille, comme un pendule, de la souffrance à l’ennu`,
        author:'-Schopenhauer'
    },
]

const quoteBtn = document.getElementById('quote-btn');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');

quoteBtn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerHTML = quotes[random].quote;
    author.innerHTML = quotes[random].author;
})