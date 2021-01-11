import React from 'react';
import fullHeart from '../images/full_heart.png'
import emptyHeart from '../images/empty_heart.png'

function Lives(props) {
    
    return(
        <div className = "lives">
            {props.lives === 3 && (
                <div>
                    <img src={fullHeart}/>
			        <img src={fullHeart}/>
			        <img src={fullHeart}/>
                </div>
            )}
            {props.lives === 2 && (
                <div>
                    <img src={fullHeart}/>
			        <img src={fullHeart}/>
			        <img src={emptyHeart}/>
                </div>
            )}
            {props.lives === 1 && (
                <div>
                    <img src={fullHeart}/>
			        <img src={emptyHeart}/>
			        <img src={emptyHeart}/>
                </div>
            )}
            {props.lives === 0 && (
                <div>
                    <img src={emptyHeart}/>
			        <img src={emptyHeart}/>
			        <img src={emptyHeart}/>
                </div>
            )}
            

        </div>
    )
}

export default Lives;