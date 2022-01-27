import React from 'react';


function Card() {
  return <div>
      <div  className="card">
        <img className="imgRes" alt="..."/>
        <div className="caption">
            <h5></h5>
            <div className="email">@email.com</div>
            <div ><b>Github</b></div>
            <cite>San Andreas</cite>
                <button className="btn btn-default text-left" > 
                Following
                </button>
        </div>
        </div>
  </div>;
}

export default Card;
