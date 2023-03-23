import "./about.css";
import awards from "../../img/awards.png";
import coder from "../../img/coderimg.png";
const About = () => {
    return(
        <div className="a">
            <div className="a-left">
                    <div className="a-card">
                        <img src={coder} alt="" className="a-img"></img>
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                Education
                <br/>
                - Bethany High School, Bangalore
                <br/>
                - Nehru Smaraka Vidyalaya, Bangalore
                <br/>
                - PES University, Bangalore
                <br/>
                </p>
                <p className="a-desc">
                </p>
                <div className="a-award">
                    <img src={awards} alt="" className="a-award-img"></img>
                    <div className="a-award-texts">
                        <h4>Achievements</h4>
                        <br/>
                        <p className="a-award-desc">
                        - Achieved 98.6% in CISCE Board Examinations, 2019 and stood first in my School
                        <br/>
                        - KCET State Rank:727
                    </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About