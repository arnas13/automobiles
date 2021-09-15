import {useState} from "react"
import {useHistory} from "react-router-dom"
import Photos from "../components/Photos"

function Upload({username, uploadCar}) {
    const history = useHistory()
    const [getError, setError] = useState ({error: false, message: ''})
    const [car, setCar] = useState({
        photos: [], 
        name: '', 
        price: '', 
        year: '', 
        gearBox: '', 
        color: '', 
        username
    })

    function updateCar(value, keyName) {
        let cr = car
        cr[keyName] = value
        setCar({...cr})
    }

    function upload() {

        let error = false

        Object.keys(car).map(key => {
            
            return car[key].length < 1 ? error = true : null
        
        })


        if(error) {
            return setError({error: true, message: 'All fields must be filled up'})
        } else {
            setError({error: false, message: ''})
            uploadCar(car)
            return history.push('/allproducts')
        }
            

        
    }


    return (
        <div className="form">
            <h3>Add car</h3>

            <Photos uploadPhotos={(photos) => updateCar(photos, 'photos')}/>

            <input  onChange={(e) => updateCar(e.target.value, 'name')}
            type="text" placeholder="Car name"/> 
            <input  onChange={(e) => updateCar(e.target.value, 'price')} 
            type="number" placeholder="price"/>  
            <input  onChange={(e) => updateCar(e.target.value, 'year')}
            type="number" placeholder="year"/>  
            <input  onChange={(e) => updateCar(e.target.value, 'gearBox')}
            type="text" placeholder="gear box"/>  
            <input  onChange={(e) => updateCar(e.target.value, 'color')}
            type="text" placeholder="color"/>  

            <button onClick={upload}>Upload</button>  

            {getError.error ? <span className="error">{getError.message}</span> : null} 
                    
        </div>
    )
}


export default Upload
