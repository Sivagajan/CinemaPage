import { useEffect, useState } from "react"
import Seat from "../components/Seat"


const Home = () => {

    const [seats, setSeats] = useState([])

 
    useEffect(() => {
        fetch('http://localhost:9191/')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setSeats(data)
        })
    },[])

    return(

        <main>
            
            <h1>Welcome to the Booking System</h1>

            <section className="bookingTable">
                    {seats.map((seat, key) =>

                        <Seat key={key} seat={seat} setSeat={setSeats}/>

                    )}
            </section>
        </main>
    )
}

export default Home