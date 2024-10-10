import course1 from '../assets/images/Course1.jpg';
import course2 from '../assets/images/Course2.jpg';
import course3 from '../assets/images/Course3.jpg';
import course4 from '../assets/images/Course4.jpg';

function Recommendation() {
    return (
        <div className="recommendedsec">
            <h1 className="recommended">Recommended for you</h1>
            <p>Pick the best fit</p>

            <div className="recommended_container">
                <div className="course-card">
                    <img src={course1} alt="2024 Python Data Visualization course" />
                    <h3>2024 Python Data Visualization</h3>
                    <p>Frank Jonas</p>
                    <p>5.0 ⭐⭐⭐⭐⭐</p>
                    <p>₹899 <del>₹2999</del></p>
                </div>

                <div className="course-card">
                    <img src={course2} alt="2023 AI and ML Bootcamp course" />
                    <h3>2023 AI and ML Bootcamp Files</h3>
                    <p>Hardey Jefferson</p>
                    <p>4.4 ⭐⭐⭐⭐</p>
                    <p>₹1200 <del>₹2999</del></p>
                </div>

                <div className="course-card">
                    <img src={course3} alt="2024 Getting started with Github course" />
                    <h3>2024 Getting started with Github</h3>
                    <p>Jonathan Davies</p>
                    <p>3.0 ⭐⭐⭐</p>
                    <p>₹799 <del>₹2999</del></p>
                </div>

                <div className="course-card">
                    <img src={course4} alt="2023 Full-stack Web Development course" />
                    <h3>2023 Guide to Full-stack Web Development</h3>
                    <p>Markus Spiske</p>
                    <p>4.4 ⭐⭐⭐⭐</p>
                    <p>₹1999 <del>₹2999</del></p>
                </div>
            </div>
        </div>
    );
}

export default Recommendation;