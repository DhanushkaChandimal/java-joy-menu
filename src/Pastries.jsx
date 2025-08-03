const Pastries = ({items, header}) => {
    return(
        <div>
            <h3>{header}</h3>
            {items.map((item, index) => <p key={index}>{item}</p>)}
        </div>
    )
}

export default Pastries;