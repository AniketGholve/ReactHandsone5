
const ParentHOC = (props) => {
    return (
        <>
            <h3>Higher order component allows you to reduce the code redendency you can pass the component using props in hoc </h3>
            <h1 style={{ backgroundColor: "red" }}><props.hoc color="red" /></h1>
            <h1 style={{ backgroundColor: "blue" }}><props.hoc color="blue" /></h1>
            <h1 style={{ backgroundColor: "black" }}><props.hoc color="black" /></h1>
        </>
    )
}

export default ParentHOC