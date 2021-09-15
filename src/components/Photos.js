import {useState} from "react"

function Photos({uploadPhotos}) {

    const [photos, setPhotos] = useState([""])

    function del(index) {
        let ph = photos
        ph = ph.filter((x, i) => i !== index)
        setPhotos([...ph])
        uploadPhotos([...ph])
    }

    function addPhoto() {
        const ph = photos
        setPhotos([...ph, ""])
    }

    function addLink(event, index) {
        let ph = photos
        ph[index] = event.target.value
        setPhotos([...ph])
        uploadPhotos([...ph])
    }

    return (
        <div className="photosForm">
            {photos.map((item, index) => {
                return <div className="d-flex" key={index}>
                    <input type="text" onChange={(e) => addLink(e, index)} placeholder="Image URL"/> 
                    {index !== 0 ?<div className="delete center" onClick={() => del(index)}>X</div> : null }
                </div> 
            })}
            
            <button onClick={addPhoto}>Add more photos</button>           
        </div>
    )
}


export default Photos
