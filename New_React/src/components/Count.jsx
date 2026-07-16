import { useState } from "react"
function Count(){
    const [count, setCount] = useState(0)
    return (
        <>
        <h1>This is a Counter</h1>
        <h2>Count is = {count}</h2> //javascript jsx expression
        <button onClick={() => {setCount(count + 1)}}>Increase</button>
        <button onClick={() => {setCount(count - 1)}}>Decrease</button>
        <button onClick={() => {setCount(0)}}>Reset</button>
        </>
    )
}
export default Count