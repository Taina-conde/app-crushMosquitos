import React from 'react';
import fullHeart from '../images/full_heart.png'
import emptyHeart from '../images/empty_heart.png'

function Lives(props) {
    
    return(
        <div className = "lives">
            {props.lives === 3 && (
                <div>
                    <img src={fullHeart} alt= 'hf1'/>
			        <img src={fullHeart} alt= 'hf2'/>
			        <img src={fullHeart} alt= 'hf3'/>
                </div>
            )}
            {props.lives === 2 && (
                <div>
                    <img src={fullHeart} alt= 'hf1'/>
			        <img src={fullHeart} alt= 'hf2'/>
			        <img src={emptyHeart} alt= 'he3'/>
                </div>
            )}
            {props.lives === 1 && (
                <div>
                    <img src={fullHeart} alt= 'hf1'/>
			        <img src={emptyHeart} alt= 'he2'/>
			        <img src={emptyHeart} alt= 'he3'/>
                </div>
            )}
            {props.lives === 0 && (
                <div>
                    <img src={emptyHeart} alt= 'he1'/>
			        <img src={emptyHeart} alt= 'he2'/>
			        <img src={emptyHeart} alt= 'he3'/>
                </div>
            )}
            

        </div>
    )
}

export default Lives;