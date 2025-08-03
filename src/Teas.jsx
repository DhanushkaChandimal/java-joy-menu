const Teas = ({items}) => {
    return(
        <div>
            <h3>Teas</h3>
            {items.map((item, index) => <p key={index}>{item}</p>)}
        </div>
    )
}

export default Teas;