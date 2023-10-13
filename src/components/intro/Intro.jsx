import "./intro.css"
import me2 from "../../img/me3-new.png"
const Intro = () => {
    return (
        <div className="intro">
            <div className="intro-left">
                <div className="intro-left-wrapper">
                    <h2 className="intro-intro1">Hey there! My name is</h2>
                    <h1 className="intro-name">Pranit Prasant Pai</h1>
                    <div className="intro-title">
                        <div className="intro-title-wrapper">
                            <div className="intro-title-item">Web Developer</div>
                            <div className="intro-title-item">Sports Enthusiast</div>
                            <div className="intro-title-item">Cricketer</div>
                            <div className="intro-title-item">Foodie</div>
                            <div className="intro-title-item">Explorer</div>
                        </div>
                    </div>
                    <div className="intro-description">
                        I am a Computer Science student at PES University, Bangalore.
                        I am a Web Development and AI/ML enthusiast.
                        My goal is to put to use all my learnings into developing something that is great
                        and useful to mankind!
                    </div>
                </div>
            </div>
            <div className="intro-right">
                <div className="i-bg"></div>
                <img src={me2} alt="" className="i-img"/>
            </div>

        </div>
    )
}

export default Intro