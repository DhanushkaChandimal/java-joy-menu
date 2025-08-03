const Coffees = ({items}) => {
    return(
        <div>
            <h3>Coffees</h3>
            {items.map((item, index) => <p key={index}>{item}</p>)}
        </div>
    )
}

export default Coffees;