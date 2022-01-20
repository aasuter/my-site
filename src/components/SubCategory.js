import React from 'react'



const SubCategory = ({text, setTransition, styleName, images, preview, link}) => {
    return (
        <div> 
            <p onClick={()=>setTransition([true,false,false])} className='subcategory-text'> <span>&#10005;</span> {text} </p>
            {
                preview?
                <div className={`list-container  ${styleName} button`} onClick={()=>setTransition([false,false,true])}>
                    {images.map(img =>
                            <img key= {img.source} src={img.source} alt=''></img>
                        )}
                </div>:null
            }
            {
                !preview?
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <div className={`list-container  ${styleName} button`}>
                        {images.map(img =>
                                <img key= {img.source} src={img.source} alt=''></img>
                            )}
                    </div>
                </a>:null
                
            }

        </div>
    )
}

export default SubCategory;