type OutputPropsType = {}

export const Output = (props: OutputPropsType) => {
    return (

        <div className="container">

            <div className="monitor-output">
                <p className="number">0</p>
            </div>
            <div className="buttons">
                <button className="increment">inc</button>
                <button className="set">set</button>
            </div>


        </div>

    )
}