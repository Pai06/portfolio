import "./about.css";
import prizes from "../../img/prize.png";
import coder from "../../img/coderimg.png";
const About = () => {
    return(
        <div className="a">
        <div className="c-bg"></div>
            <div className="a-left">
                    <div className="a-card">
                        <img src={coder} alt="" className="a-img"></img>
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me . . .</h1>
                <p className="a-sub">
                <h3><b>Education</b></h3>
                <br/>
                - Bethany High School, Bangalore
                <br/>
                - Nehru Smaraka Vidyalaya, Bangalore
                <br/>
                - PES University Electronic City Campus, Bangalore
                <br/>
                </p>
                <p className="a-desc">
                </p>
                <div className="a-award">
                    <img src={prizes} alt="" className="a-award-img"></img>
                    <div className="a-award-texts">
                        <h3>Achievements</h3>
                        <br/>
                        <p className="a-award-desc">
                        - 1st place at Ingenius'2023, flagship hackathon conducted at PES University.
                        <br/>
                        - Finished in top 5 at Override'23, hackathon conducted by Google Developer Student Clubs, PESU ECC.
                        <br/>
                        - Scored 98.6% in CISCE Board Examinations, 2019 and secured the 1st rank in my school.
                        <br/>
                        - KCET State Rank:727.
                    </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About