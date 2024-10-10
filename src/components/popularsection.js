import course5 from '../assets/images/Course5.jpg';
import course6 from '../assets/images/Course6.jpg';
import course7 from '../assets/images/Course7.jpg';
import course8 from '../assets/images/Course8.jpg';
import course9 from '../assets/images/Course9.jpg';
import course10 from '../assets/images/Course10.jpg';
import course11 from '../assets/images/Course11.jpg';
import course12 from '../assets/images/Course12.jpg';

function Popular() {
    return (
        <div className="popularsection">
            <h1 className="popular_title">Most Popular Courses</h1>
            <p className="popular_subtitle">Pick the best fit</p>
            <div className="popular_container">
                <div className="course-card">
                    <img src={course5} alt="SEO Mastery: The Complete Guide" />
                    <h3>SEO Mastery: The Complete Guide</h3>
                    <p>Neil Patel</p>
                    <p>3.0 ⭐⭐⭐</p>
                    <p>₹4,999 <del>₹9,999</del></p>
                </div>
                <div className="course-card">
                    <img src={course6} alt="Mindfulness for Everyday Life" />
                    <h3>Mindfulness for Everyday Life</h3>
                    <p>Jon Kabat-Zinn</p>
                    <p>4.4 ⭐⭐⭐⭐</p>
                    <p>₹2,499 <del>₹2999</del></p>
                </div>
                <div className="course-card">
                    <img src={course7} alt="Graphic Design Bootcamp" />
                    <h3>Graphic Design Bootcamp</h3>
                    <p>Derrick Mitchell</p>
                    <p>5.0 ⭐⭐⭐⭐⭐</p>
                    <p>₹3,499 <del>₹6,999</del></p>
                </div>
                <div className="course-card">
                    <img src={course8} alt="Social Media Marketing: Strategy and Tactics" />
                    <h3>Social Media Marketing: Strategy and Tactics</h3>
                    <p>Gary Vaynerchuk</p>
                    <p>3.0 ⭐⭐⭐</p>
                    <p>₹3,999 <del>₹7,999</del></p>
                </div>
                <div className="course-card">
                    <img src={course9} alt="Google Analytics for Beginners" />
                    <h3>Google Analytics for Beginners</h3>
                    <p>J Justin Cutroni</p>
                    <p>3.0 ⭐⭐⭐</p>
                    <p>₹1,999 <del>₹3,999</del></p>
                </div>
                <div className="course-card">
                    <img src={course10} alt="Trading Fundamentals: Stocks and Forex" />
                    <h3>Trading Fundamentals: Stocks and Forex</h3>
                    <p>Rayner Teo</p>
                    <p>4.4 ⭐⭐⭐⭐</p>
                    <p>₹4,499 <del>₹8,999</del></p>
                </div>
                <div className="course-card">
                    <img src={course11} alt="Marketing Analytics: Data-Driven Strategies" />
                    <h3>Marketing Analytics: Data-Driven Strategies</h3>
                    <p>Avinash</p>
                    <p>5.0 ⭐⭐⭐⭐⭐</p>
                    <p>₹3,799 <del>₹7,599</del></p>
                </div>
                <div className="course-card">
                    <img src={course12} alt="Bitcoin & Blockchain Fundamentals" />
                    <h3>Bitcoin & Blockchain Fundamentals</h3>
                    <p>Andreas M. Antonopoulos</p>
                    <p>3.0 ⭐⭐⭐</p>
                    <p>₹5,499 <del>₹10,999</del></p>
                </div>
            </div>
        </div>
    );
}

export default Popular;
