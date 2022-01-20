const Category = ({text, setTransition, styleName}) => {
    return (
        <div className={`button ${styleName}  noselect` } onClick={()=>{setTransition([false,true,false])}}>
            <a href="#!" className={styleName}><span className="category-text"> {text}</span></a>
        </div>
    )
}

export default Category;