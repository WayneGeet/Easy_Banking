import mockups from "../../images/image-mockups.png";
import bgImage from "../../images/bg-intro-desktop.svg"
const Hero = () => {
  return (
    <div className=" ">
        <div className="container hero">
        <div className="left_hero ">
            <div className="hero_content">
                <h1 className="hero_title">Next generation digital banking</h1>
                <p className="hero_info">Take your financial life online. Your Easybank 
                    account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.
                </p>
                
                <button type="button" className="btn_primary cta_sec">
                    Request Invite
                </button>
               
            </div>
        </div>
        <div className="right_hero">
                <div className="right_hero_container">
                    <img className="bg_image" src={bgImage} alt="" />
                    <img className="hero_img" src={mockups} alt="phone mockups" />
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Hero