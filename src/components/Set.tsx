type SetPropsType = {}

export const Set = (props: SetPropsType) => {
    return (
        <div className="container">
            <div className="monitor-set">
                <p className="title-set">min number:</p>
                <input type="number" className="min" placeholder="enter min number"></input>
                <p className="title-set">max number:</p>
                <input type="number" className="max" placeholder="enter max number"></input>
                <p className="text">Enter numbers and apply changes</p>
                <p className="text-error">Enter correct numbers!</p>
            </div>
            <div className="buttons">
                <button className="apply">apply</button>
            </div>
        </div>
    )
}