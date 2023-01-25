const Avater = ({ children, py, px, color, backgroundColor, borderRadius, fontSize, textAlign }) => {
    const style = {
        color: "white",
        backgroundColor,
        padding: `${py}px ${px}px`,
        borderRadius,
        fontSize,
        textAlign,

    }
    return (
        <div style={style}>
            { children }
        </div>
    )
}

export default Avater