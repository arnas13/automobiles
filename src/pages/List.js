import {Link} from "react-router-dom"

function List({cars}) {

    return (

        <div className="d-flex wrap">

            {cars.map((car, index) => {
                return <Link key={index} to={`/singleproduct/${index}`}>
                    <div className="card">
                        <div className="img" style={{backgroundImage:`url('${car.photos[0]}')`}}></div>
                        <div>{car.name}</div>
                        <div>{car.price}</div>
                        <div>{car.year}</div>
                        <div>{car.gearBox}</div>
                        <div>{car.color}</div>
                    </div>
                </Link>

            })}


        </div>
    );
}

export default List;
