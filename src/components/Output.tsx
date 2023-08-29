import {Button} from "./Button";

type OutputPropsType = {}

export const Output = (props: OutputPropsType) => {

    const increment = () => {}
    const toggleSetting = () => {}

    return (
        <div className="container">
            <div className="monitor-output">
                <p className="number">0</p>
            </div>
            <div className="buttons">
                <Button className={'increment'} value={'inc'} callback={increment}/>
                <Button className={'set'} value={'set'} callback={toggleSetting}/>
            </div>


        </div>

    )
}