const Institutos = ({ institutos }) => {
    return (
    <ul className="institutos">
            {
                institutos.map((item) =>
                    <li key={item.id}> {item.institute}</li>
                )
            }
    </ul>
    )
}

export default Institutos;
