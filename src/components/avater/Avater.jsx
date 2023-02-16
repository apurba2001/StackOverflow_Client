const Avater = ({ children, py, px, color, backgroundColor, borderRadius, fontSize, textAlign, type }) => {
    let size = ''
    if(type === 'nav'){
        size = '30px'
    } else if (type === 'question'){

    }

    const style = {
        color: "white",
        backgroundColor,
        borderRadius,
        fontSize,
        width: size,
        height: size,
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        padding: "0px"
    }
    return (
        <div style={style}>
            { children }
        </div>
    )
}

export default Avater