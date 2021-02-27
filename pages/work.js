const Work = () => {

    const works = [
        {
            name: 'TBC Payments',
            desc: 'TBC Bank is one of the leading banks in Georgia, currently I’m responsible for ensuring smooth experience for merchants and creating the platform for digitalizing all their analytical needs. I am working with an agile team on improving payment experiences, as well as with the marketing team on redesigning related products and platforms.',
            status: 'Currently working at',
            imgUrl: 'tbc.png'
        },
        {
            name: 'Adjarabet.com',
            desc: 'I was developing Wireframes and prototypes around customer and business needs, working closely with marketing team to ensure right and suitable visuals and specifications for Promo pages, communicating designs to development team and working with them to produce competitive and engaging products for Adjarabet.com users. Working in a promotional team involved creating Ux flows, UI and graphic design assets and also currently used design system.',
            status: 'Work done for',
            imgUrl: 'adjara.png'
        },
        {
            name: 'Individ fashion website & app',
            desc: 'I was developing Wireframes and prototypes around customer and business needs, working closely with marketing team to ensure right and suitable visuals and specifications for Promo pages, communicating designs to development team and working with them to produce competitive and engaging products for Adjarabet.com users. Working in a promotional team involved creating Ux flows, UI and graphic design assets and also currently used design system.',
            status: 'Work done for',
            imgUrl: 'individ.png'
        },
        {
            name: 'Jobspace',
            desc: 'I was developing Wireframes and prototypes around customer and business needs, working closely with marketing team to ensure right and suitable visuals and specifications for Promo pages, communicating designs to development team and working with them to produce competitive and engaging products for Adjarabet.com users. Working in a promotional team involved creating Ux flows, UI and graphic design assets and also currently used design system.',
            status: 'Work done for',
            imgUrl: 'jspace.png'
        }
    ];

    return (
        <div>
            {works.map(x => (<p>{x.name}</p>))}
        </div>
    )
}

export default Work;