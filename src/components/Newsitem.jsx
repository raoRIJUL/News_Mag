
const Newsitem=({title ,description,src,url})=>{
    return (
        <div className="card bg-dark text-white mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth : "345px",Height:"400px"}}>
        <img src={src} style={{height:"200px",width:"100%"}} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title.slice(0,50)}</h5>
          <p className="card-text">{description?description.slice(0,90):"Stay informed with the latest headlines and in-depth analysis on current events from around the globe. Our dedicated team of journalists brings you up-to-the-minute coverage on politics, economy, technology, health, entertainment, and more."}</p>
          <a href={url} className="btn btn-primary">Read More</a>
        </div>
      </div>
    )
  }
  
  export default Newsitem