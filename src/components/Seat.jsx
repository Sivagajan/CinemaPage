import { useNavigate } from "react-router-dom"

const Seat = (seat) => {

    const nav = useNavigate()

    const changeBooking = () => {

        const selectedSeat = seat.seat.seat
        console.log(selectedSeat)
        console.log(JSON.stringify({seat:selectedSeat}))
        
        fetch('http://localhost:9191/', {
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({seat:selectedSeat})
        })
        .then(res => res.json())
        .then(data => seat.setSeat(data))
        console.log('wir waren im fetch')

    }

    return(
        <button className={`seat ${seat.seat.booked} ${seat.seat.category}`} onClick={changeBooking}>
        </button>
    )
}
export default Seat