import styles from '../styles/articles.module.css'

const Articles = () => {

    const articles = [
        {
            id: 0,
            name: 'Challenges of doing UX design in online gambling',
            desc: 'So I recently quit my job in one of the leading online gambling companies in Georgia, Tbilisi. So I decided to sum up the challenges and…',
            imgUrl: 'medium.png',
            articleUrl: 'https://kphagava.medium.com/challenges-of-doing-ux-design-in-online-gambling-c052338347d'
        },
        {
            id: 1,
            name: 'Recruitment platform — JOBSPACE',
            desc: 'Jobspace is my first attempt to create a startup. Me and my partner started working on it as a fun side project, but continued pursuing…',
            imgUrl: 'medium.png',
            articleUrl: 'https://kphagava.medium.com/recruitment-platform-jobspace-d2094bf7cf87'
        },
        {
            id: 2,
            name: 'The usability of road signs',
            desc: 'The history of road signs goes back to the early 1800s and the first road signs were meant for bicycles, they warned cyclists about bad roads, dangerous turns, etc.',
            imgUrl: 'medium.png',
            articleUrl: 'https://uxdesign.cc/usability-of-road-signs-345d2cc7524a'
        },
        {
            id: 3,
            name: 'My journey to UX design',
            desc: 'I think the world knows by now, that a design degree doesn’t make a good designer. Especially in Georgia, where UX design is not even…',
            imgUrl: 'medium.png',
            articleUrl: 'https://kphagava.medium.com/my-journey-to-ux-design-95288931a6b9'
        }
    ];

    return (
        <div>
            {articles.map(item => {
                return (
                    <div className={[styles.articles, styles.pageContainer].join(' ')}>
                        <div className={styles.articleContainer} key={item.id}>
                            <img src="/images/medium.png" alt=""/>
                            <div className={styles.title}>
                                {item.name}
                            </div>
                            <div className={styles.intro}>
                                {item.desc}
                            </div>
                            <div className={styles.readArticleBtn}>
                                <a href={item.articleUrl} target="_blank" className={styles.readArticleBtn}>
                                    Read article 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><defs><style>.a{'{'}fill:#848c92;{'}'}</style></defs><path class="a" d="M6.175,13.659a1.167,1.167,0,0,1,0-1.65l3.842-3.842H1.166a1.167,1.167,0,0,1,0-2.334h8.85L6.175,1.992A1.167,1.167,0,0,1,7.825.342l5.834,5.833.02.021.01.01.01.01.012.013.007.008.013.015.005.006.014.017,0,.005.014.018,0,0,.013.018,0,0,.013.018,0,.006.012.018,0,.007.01.016.005.009.008.014.007.012.006.011.009.016,0,.007.011.021v0a1.166,1.166,0,0,1-.24,1.359L7.825,13.659a1.167,1.167,0,0,1-1.65,0Z"/></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Articles;