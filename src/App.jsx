import { useEffect, useState } from 'react'
import Count from './Count.jsx'
import './App.css'

function App ()
{
  const [products,setProducts]=useState([])
 useEffect(() =>
  {
   fetch("https://fakestoreapi.com/products")
     .then((res) => res.json())
     .then((data) => setProducts(data))
     .catch((err)=>console.assert.log("my error"+err))
  },[])
  return (
		<div>
			<div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand text-warning" href="#">Product 65</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="#genral" id="genral">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="#business" id="business" >Product</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#sports" id="sport">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="#tehnology" id="technology">Contact</a>
                                </li>
                                {/* <li className="nav-item">
                                    <a className="nav-link" href="#entertainment" id="entertainment">Entertainment</a>
                                </li> */}
								<li className="nav-item dropdown">
                                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								  Find 
                                  </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Men's</a></li>
                                    <li><a className="dropdown-item" href="#">Wmomen</a></li>
									<li><a className="dropdown-item" href="#">Bestseller</a></li>
                                    <li><a className="dropdown-item" href="#">Todays Offer</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                                </li>
								<li className="nav-item dropdown">
                                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								  Subscription 
                                  </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Prime</a></li>
                                    <li><a className="dropdown-item" href="#">Plus</a></li>
									<li><a className="dropdown-item" href="#">Pro</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Report</a></li>
                                </ul>
                                </li>
								<li className="nav-item dropdown">
                                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                      SignIn <b>Account & List</b>
                                  </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Login</a></li>
                                    <li><a className="dropdown-item" href="#">SignUp</a></li>
                                </ul>
                                </li>
								<button type="button" className="btn btn-warning">Select Language</button>
                            </ul>
							<form className="d-flex">
                                <input className="form-control me-2" type="text" id="productQuery" placeholder="Search for Product,Brand & More" />
                                <button className="btn btn-outline-warning" type="button" id="searchBtn">Search</button>
                            </form>
							<div id="nav-cart-count-container"> 
								<span id="nav-cart-count" aria-hidden="true" className="nav-cart-count nav-cart-0 nav-progressive-attribute nav-progressive-content">0</span>
								<span className="nav-cart-icon nav-sprite"></span> 
								</div>
								<div id="nav-cart-text-container" className=" nav-progressive-attribute">
								<span aria-hidden="true" className="nav-line-1"> </span> 
								<span aria-hidden="true" className="nav-line-2">
								<button type="button" className="btn btn-outline-secondary">MyCart<i class="fa fa-shopping-cart"></i></button>
								<span className="nav-icon nav-arrow"></span>
								</span>
							</ div>
    
                        </div>
                    </div>
                </nav>
            </div>
			<p><h3>HOLI OFFER</h3></p>
			<div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)"}}>
				{products.map((pr, index) => (
					<div className='insideBox'
						style={{ boxShadow: "2px 2px 2px pink" }}
						key={index}>
						<img
							src={pr.image}
							alt={pr.title}
							height='100'
							width='100'
							//alignitem= "center"
							
						/>
						<h5>{pr.title}</h5>
						
						<Count />
					</div>
				))}
			</div>
			<div className="mt-5">
                <div>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mt-4">
                      <div className="container-fluid m-0 p-0">
                        {/* <div className="social-links">
                            <a href="#">
                                <span className="fa fa-linkedin"></span>
                            </a>
                        </div>
                        <div className="social-links">
                            <a href="#">
                                <span className="fa fa-linkedin"></span>
                            </a>
                        </div> */}
                        <h5 className="text-white me-auto ms-auto"><i class="fa fa-shopping-cart"></i> BirthFor<span className="text-warning">Shop</span></h5>
                        <h5 className="text-white me-auto ms-auto"><i class="fa fa-shopping-cart"></i> BirthFor<span className="text-warning">Shop</span></h5>
                        <h5 className="text-white me-auto ms-auto"><i class="fa fa-shopping-cart"></i> BirthFor<span className="text-warning">Shop</span></h5>
                        <h5 className="text-white me-auto ms-auto"><i class="fa fa-shopping-cart"></i> BirthFor<span className="text-warning">Shop</span></h5>
                        {/* <div className="social-links">
                            <br />
                            <br />
                            <a href="#">
                                <span className="fa fa-linkedin"></span>
                            </a>
                        </div><div className="social-links">
                            <a href="#">
                                <span className="fa fa-linkedin"></span>
                            </a>
                        </div> */}
                      </div>
                    </nav>
                </div>
            </div>
		</div>
	)
}

export default App