
type ButtonPropsType = {
    className: string
    value: string
    callback: ()=> void
}
export const Button = (props: ButtonPropsType)=>{
    const btnCallback = ()=> {
        props.callback()
    }

    return(
        <button
            onClick={btnCallback}
            className={props.className}>{props.value}</button>
    )
}