import styles from '../styles/work-cert.module.css'

const Work = () => {

    const works = [
        {
            id: 0,
            name: 'TBC Payments',
            desc: 'TBC Bank is one of the leading banks in Georgia, currently I’m responsible for ensuring smooth experience for merchants and creating the platform for digitalizing all their analytical needs. I am working with an agile team on improving payment experiences, as well as with the marketing team on redesigning related products and platforms.',
            status: 'Currently working at',
            imgUrl: 'tbc.png'
        },
        {
            id: 1,
            name: 'Adjarabet.com',
            desc: 'I was developing Wireframes and prototypes around customer and business needs, working closely with marketing team to ensure right and suitable visuals and specifications for Promo pages, communicating designs to development team and working with them to produce competitive and engaging products for Adjarabet.com users. Working in a promotional team involved creating Ux flows, UI and graphic design assets and also currently used design system.',
            status: 'Work done for',
            imgUrl: 'adjara.png'
        },
        {
            id: 2,
            name: 'Individ fashion website & app',
            desc: 'I was developing Wireframes and prototypes around customer and business needs, working closely with marketing team to ensure right and suitable visuals and specifications for Promo pages, communicating designs to development team and working with them to produce competitive and engaging products for Adjarabet.com users. Working in a promotional team involved creating Ux flows, UI and graphic design assets and also currently used design system.',
            status: 'Work done for',
            imgUrl: 'individ.png'
        },
        {
            id: 3,
            name: 'Jobspace',
            desc: 'I was developing Wireframes and prototypes around customer and business needs, working closely with marketing team to ensure right and suitable visuals and specifications for Promo pages, communicating designs to development team and working with them to produce competitive and engaging products for Adjarabet.com users. Working in a promotional team involved creating Ux flows, UI and graphic design assets and also currently used design system.',
            status: 'Work done for',
            imgUrl: 'jspace.png'
        }
    ];

    return (
        <div>
            {works.map(item => {
                return (
                    <div className={styles.item} key={item.id}>
                        <div className={styles.itemThumbnail}></div>
                        <div className={styles.itemDetails}>
                            <div className={styles.itemStatus}>{item.status}</div>
                            <div className={styles.itemHeader}>{item.name}</div>
                            <div className={styles.itemTxt}>{item.desc}</div>
                            <div className={styles.itemActions}>
                                {/* <a href="" class="action-to-website action">
                                    Visit Website
                                    <img src="./assets/arrow-link.svg" alt="">
                                </a>
                                <a href="" class="action-to-article action">
                                    Read Article 
                                    <img src="./assets/arrow-link.svg" alt="">
                                </a> */}
                            </div>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}

export default Work;