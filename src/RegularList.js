export const RegularList = ({
    items, 
    recourceName,
    itemComponent: ItemComponent
}) => {
    return(
        <>
        {items.map((item, i) => (
            <ItemComponent key={i} {...{[recourceName]: item}} />
        ))}
        </>
    )
}