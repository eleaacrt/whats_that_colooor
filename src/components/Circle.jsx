// style
import '../index.css';

const Circle = ({
    colorValues
}) => {
    return (
        <>
            <section className="section_circle" >
                <div className="circle" style={{ background: "rgb(" + colorValues.red + ", " + colorValues.green + ", " + colorValues.blue + ")" }}></div >
            </section >
        </>
    )
}

export default Circle;