
type ButtonPropsType = {
    className: string
    value: string
    callback: ()=> void
    disable?: boolean
}
export const Button__ = (props: ButtonPropsType)=>{
    const btnCallback = ()=> {
        props.callback()
    }

    return(
        <button
            onClick={btnCallback}
            className={props.className}
        disabled={props.disable}>{props.value}
        </button>
    )
}