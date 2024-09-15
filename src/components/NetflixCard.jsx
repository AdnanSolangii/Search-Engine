import { useEffect, useState } from "react";
import './NetflixCard.css'
const NetflixCard = () => {
    const[data, setData] = useState([])
    const[loading, setLoading] = useState(true)
    const[error, setError] = useState('')
    const url = 'https://fakestoreapi.com/products'

    const fetchingStoreData = () =>{
        fetch(url)
        .then((res) => res.json())
        .then((storeData) => {
            setData(storeData)
            setLoading(false)
        })
        .catch((error) => {
            console.log(error)
            setLoading(false)
            setError(error)
        })
    }
    useEffect(() =>{
        fetchingStoreData()
    },[])
    if(error)
    return(
<div className="error msg">
    <img src="https://cdn.svgator.com/images/2024/04/detective-animation-404-error-page.gif" alt="" />
</div>
    )
    console.log(data)
    if(loading)
    return(
<div className="loading">
    <img src="https://cdn.dribbble.com/users/563824/screenshots/3678774/dash2.gif" alt="" />
</div>
    )
    return (
        <div className="card-section">
            {data.map((item) =>{
        return <div className="card" key={item.id}>
                    <div className="product-img">
                    <img src={item.image} alt="" />
                    </div>
                    <div className="product-name">
                        <h4>{item.title}</h4>
                    </div>
                    <div className="price">
                        <p>{item.price} $</p>
                    </div>
                </div>
            })}
        </div>
    );
};

export default NetflixCard;
