import Card from "../../UI/Card";
import {cardContent} from "../../data/data";

const Ad = () => {
  return (
    <section className="section">
        <div className="container ">
            <header>
                <h2 className="choose_us">Why Choose EasyBank?</h2>
                <small className="ad_info">We leverage Open Banking to turn your bank account intro
                    your financial hub. Control your finances like never before.
                </small>
            </header>

            <article className="ads article_ads">
                {cardContent.map(({id, icon, title, info }) => {
                    return(
                        <Card
                        key={id}
                        className="">
                            <div className="icon_container"><img src={icon} alt="" /></div>
                            <h3>{title}</h3>
                            <p className="ad_info">{info}</p>
                        </Card>
                    )
                })}
            </article>
        </div>
    </section>
  )
}

export default Ad