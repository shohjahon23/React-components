export const NumberedList = ({
    items, 
    recourceName,
    itemComponent: ItemComponent
}) => {
    return(
        <>
        {items.map((item, i) => (
            <>
            <h3>{i + 1}</h3>
            <ItemComponent key={i} {...{[recourceName]: item}} />
            </>
        ))}
        </>
    )
}