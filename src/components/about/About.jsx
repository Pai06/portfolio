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
                <p className="a-sub">psksmamnmdnckksmxnnskmks
                </p>
                <p className="a-desc">ckjkjkjkkmwknnnmwckqkmkcmwmcmmx
                cnwnkwcxwkjclkwcwcmowovnnw3vloponpwo
                </p>
                <div className="a-award">
                    <img src={awards} alt="" className="a-award-img"></img>
                    <div className="a-award-texts">
                        <h4>winner</h4>
                        <p className="a-award-desc">
                            kksnnmmsdkdkkdlsppsoiejennfmmxwmkxc iwmxiw,x,
                    </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About