import Articles from "../../UI/Articles";
import {latestArticles} from "../../data/data";
const Latest = () => {
  return (
    <div className="articles">
        <div className="container article_section">
            <h2 className="t_article">Latest Articles</h2>

            <article className="ads article_cards">
                {latestArticles.map(({image,author, title, info}, key) =>{
                    return(
                        <section key={key}>
                            <Articles>
                                <div className="article_img">
                                    <img src={image} alt={title} />
                                </div>
                                <small className="author">By {author}</small>
                                <div className="lime"><h3 className="title_card">{title}</h3></div>
                                <small className="ad_info">{info}</small>
                            </Articles>
                        </section>
                    )
                })}
            </article>
        </div>
    </div>
  )
}

export default Latest