function ComicsList(props){
   const { comicsList } = props;
   const {id, thumb, title, price} = comicsList;
    console.log(props)
    return(
        <>
            
            <div key={id} className="card">
                <img src={thumb} alt={title} />
                <div className="card-body">
                    <h5>{title}</h5>
                    <span>{price}</span>
                </div>
            </div>
           
    
    </>
    )

}

export default ComicsList