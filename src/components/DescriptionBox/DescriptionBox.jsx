import React from 'react';
import './DescriptionBox.css';





export const DescriptionBox = () => {
  return (
    <div className='descriptionbox' >
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews(122)</div>
        </div>
        <div className="descriptionbox-description">
            <h1>Product Description</h1>
            <p>A lightweight, durable, and stylish solution for your daily commute. The perfect size for a laptop, tablet, and all your daily essentials.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam cupiditate quia repellat cum ab quasi ullam facilis reiciendis quam ipsum modi velit ratione aliquam voluptatem inventore, fugit, sit ipsam atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi deleniti aliquid quis corrupti, at nobis molestiae hic amet excepturi fugit architecto dicta consequatur sunt adipisci eum, mollitia perspiciatis rerum delectus?</p>
            </div>
    </div>
  )
}

export default DescriptionBox;