

const Card = ({ Counter, setCounter }) => {

    const incr = () => {
        setCounter(Counter + 1)
    }
    const decr = () => {

        Counter > 0 ? setCounter(Counter - 1) : setCounter(Counter)

    }
    return (
        <>
            <button onClick={incr}>ChangeData</button>
            <button onClick={decr}>ChangeData1</button>
        </>
    )
}
export default Card;