
import cover from '../assets/images/coverimage.jpeg'

function Coversection() {
    return (<div className="coversection">
        <img src={cover} alt="cover picture"></img>
            <div className="offerimage">
                <h1>Learning adds up</h1>
                <p>And so do savings. Get courses from ₹549 through Sept 4 — plus <br></br>
                    save an extra 15% with promo code BONUS15SEP.</p>
            </div>
    </div>
    )
}

export default Coversection;