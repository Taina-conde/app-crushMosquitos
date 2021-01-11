import React from 'react';
import fullHeart from '../images/full_heart.png'

function Lives(props) {
    return(
        <div className = "lives">
            <img id="v1" src={fullHeart}/>
			<img id="v2" src={fullHeart}/>
			<img id="v3" src={fullHeart}/>

        </div>
    )
}

export default Lives;