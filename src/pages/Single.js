import {useParams} from "react-router-dom"
import {useState} from 'react'


function Single({cars}) {
    let { index } = useParams();
    const [photoCount, setPhotoCount] = useState(0)

    function changePhoto(way) {
        if(way) {
            setPhotoCount(photoCount+1)
            if(photoCount+1 > cars[index].photos.length -1 ) {
                setPhotoCount(0)
            }
        } else  {
            setPhotoCount(photoCount-1)
            if(photoCount-1 < 0 ) {
                setPhotoCount(cars[index].photos.length -1)
            }
        }
    }

    return (
        <div className="d-flex singleItem">
            <div className="slider" style={{backgroundImage:`url('${cars[index].photos[photoCount]}')`}}>
                <div onClick={() => changePhoto(true)}> ◄ </div>
                <div onClick={() => changePhoto(false)}> ► </div>
            </div>
            <div>
                <h3>{cars[index].name}</h3>
                <h3>{cars[index].price}</h3>
                <h3>{cars[index].year}</h3>
                <h3>{cars[index].gearBox}</h3>
                <h3>{cars[index].color}</h3>
                <h3>{cars[index].username}</h3>
            </div>
        </div>

    );
}

export default Single;
