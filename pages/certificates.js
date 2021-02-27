
const Certificates = () => {

    const certificates = [
        {
            name: 'Mobile UX design',
            desc: 'Design mobile interfaces based on mobile usability best practices, use personas and task modelling to inform the design of a mobile user experience. Design mobile interfaces that cater to the different operating platforms (e.g. iOS vs Android), design mobile user experiences that are engaging and fun.',
            from: 'Interaction design foundation',
            imgUrl: 'mobileUxDesign.png'
        },
        {
            name: 'Service design',
            desc: 'Run a service design process from start to finish, apply essential service design methods such as service blueprints, business model canvases and value propositions. Set up a service design team and engage the entire organization in service design.',
            from: 'Interaction design foundation',
            imgUrl: 'serviceDesign.png'
        },
        {
            name: 'UX design',
            desc: 'TBC Bank is one of the leading banks in Georgia, currently I’m responsible for ensuring smooth experience for merchants and creating the platform for digitalizing all their analytical needs. I am working with an agile team on improving payment experiences, as well as with the marketing team on redesigning related products and platforms.',
            from: 'Tbilisi school of communication',
            imgUrl: 'UxDesign.png'
        }
    ];

    return (
        <div>
            {certificates.map(x => (<p>{x.name}</p>))}
        </div>
    )
}

export default Certificates;