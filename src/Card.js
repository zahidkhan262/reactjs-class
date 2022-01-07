import logo from './logo512.png';

const Card = (props) => {
    return (
        <>
            <div className="card">
                <img src={logo} />
                <div className="card-body">
                    <h3>{props.data}</h3>
                </div>
            </div>
        </>
    )
}
export default Card;