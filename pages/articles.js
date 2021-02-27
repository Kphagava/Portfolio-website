const Articles = () => {

    const articles = [
        {
            name: 'Challenges of doing UX design in online gambling',
            desc: 'So I recently quit my job in one of the leading online gambling companies in Georgia, Tbilisi. So I decided to sum up the challenges and…',
            imgUrl: 'gambling.png'
        },
        {
            name: 'Recruitment platform — JOBSPACE',
            desc: 'Jobspace is my first attempt to create a startup. Me and my partner started working on it as a fun side project, but continued pursuing…',
            imgUrl: 'jobspace.png'
        },
        {
            name: 'The usability of road signs',
            desc: 'The history of road signs goes back to the early 1800s and the first road signs were meant for bicycles, they warned cyclists about bad roads, dangerous turns, etc.',
            imgUrl: 'roadSigns.png'
        },
        {
            name: 'My journey to UX design',
            desc: 'I think the world knows by now, that a design degree doesn’t make a good designer. Especially in Georgia, where UX design is not even…',
            imgUrl: 'Journey.png'
        }
    ];

    return (
        <div>
            {articles.map(x => (<p>{x.name}</p>))}
        </div>
    )
}

export default Articles;