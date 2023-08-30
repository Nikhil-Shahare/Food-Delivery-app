import React from 'react'

const Card = () => {
  return (
    <div className="card" style={{"width": "18rem","maxHeight": "360px"}}>
    <img src="http://blog.hdwallsource.com/wp-content/uploads/2015/01/italian-food-wallpaper-hd-44478-45604-hd-wallpapers.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <div className='container w-100'>
         <select className='m-2 h-100  bg-success rounded'>
          {Array.from(Array(6),(e,i)=>{
            return(
              <option key={i+1} value={i+1}>{i+1}</option>
            )
          })
          }

         </select>
         <select className='m-2 h-100  bg-success rounded'>
          <option value="half">Half</option>
          <option value="full">Full</option>

         </select>
         <div className='d-inline h-100 fs-5'>Total Price</div>
      </div>
  </div>
</div>
  )
}

export default Card