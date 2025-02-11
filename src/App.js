import photo from './img.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-light ">
        <div class="container-fluid menu position-relative">
          <a class="navbar-brand" href="#">Start Bootstrap</a>
          <button class="navbar-toggler menu-btn position-absolute" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">About</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Shop
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
            </ul>
          </div>
          <button type="button" className="btn btn-outline-dark d-flex align-items-center  gap-3">
            <i class="fa-solid fa-cart-shopping"></i>
            <span>Cart</span>
            <span class='bg-dark text-white badge rounded-pill p-2'>0</span>
        </button>
        </div>

        
      </nav>

      <div className="slogan bg-dark text-white text-center">
          <h2>Shop in style</h2>
          <p className="">With this shop hompeage template</p>
      </div>

      <div className="container">
        <div className="row row-cols-3 row-cols-md-4 row-cols-lg-5 justify-content-center justify-content-lg-between ">
            <div className="col">

                <div class="card text-center">
                  <img src={photo} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Fancy Product</h5>

                    <div className="rating invisible">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                    </div>
                    <p class="card-text">$40.00 - $80.00 .</p>
                    <div>

                    </div>
                    <a href="#" class="btn btn-primary">View options</a>
                  </div>
                </div>

            </div> 

            <div className="col">

                <div class="card sale-box">
                  <img src={photo} class="card-img-top" alt="..." />
                  <small class="bg-dark ps-2 pe-2 pt-1 pb-1 text-white rounded sale">Sale</small>
                  <div class="card-body text-center">
                    <h5 class="card-title">Special Item</h5>
                    <div className="rating">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                    </div>
                    <p class="card-text"><del class='text-muted'>$20.00</del> - $18.00 </p>
                    <a href="#" class="btn btn-primary">View options</a>
                  </div>
                </div>

            </div>

            <div className="col">

                <div class="card text-center sale-box">
                  <img src={photo} class="card-img-top" alt="..." />
                  <small class="bg-dark ps-2 pe-2 pt-1 pb-1 text-white rounded sale">Sale</small>
                  <div class="card-body">
                    <h5 class="card-title">Sale Item</h5>

                    <div className="rating invisible">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                    </div>
                    <p class="card-text"><del className="text-muted">$50.00</del> - $80.00 .</p>
                    <div>

                    </div>
                    <a href="#" class="btn btn-primary">View options</a>
                  </div>
                </div>

            </div>

            <div className="col">

            <div class="card sale-box">
              <img src={photo} class="card-img-top" alt="..." />
              
              <div class="card-body text-center">
                <h5 class="card-title">Popular Item</h5>
                <div className="rating">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <p class="card-text">$40.00 </p>
                <a href="#" class="btn btn-primary">View options</a>
              </div>
            </div>

            </div>

{/* 2-nd row */}

            <div className="col">

                <div class="card text-center sale-box">
                  <img src={photo} class="card-img-top" alt="..." />
                  <small class="bg-dark ps-2 pe-2 pt-1 pb-1 text-white rounded sale">Sale</small>
                  <div class="card-body">
                    <h5 class="card-title">Sale Item</h5>

                    <div className="rating invisible">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                    </div>
                    <p class="card-text"><del className="text-muted">$50.00</del> - $80.00 .</p>
                    <div>

                    </div>
                    <a href="#" class="btn btn-primary">View options</a>
                  </div>
                </div>

             </div>

             <div className="col">

            <div class="card text-center">
              <img src={photo} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Fancy Product</h5>

                <div className="rating invisible">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <p class="card-text">$120.00 - $280.00 .</p>
                <div>

                </div>
                <a href="#" class="btn btn-primary">View options</a>
              </div>
            </div>

            </div>

            <div className="col">

                <div class="card sale-box">
                  <img src={photo} class="card-img-top" alt="..." />
                  <small class="bg-dark ps-2 pe-2 pt-1 pb-1 text-white rounded sale">Sale</small>
                  <div class="card-body text-center">
                    <h5 class="card-title">Special Item</h5>
                    <div className="rating">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                    </div>
                    <p class="card-text"><del class='text-muted'>$20.00</del> - $18.00 </p>
                    <a href="#" class="btn btn-primary">View options</a>
                  </div>
                </div>

            </div>

            <div className="col">

            <div class="card sale-box">
              <img src={photo} class="card-img-top" alt="..." />
              
              <div class="card-body text-center">
                <h5 class="card-title">Popular Item</h5>
                <div className="rating">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <p class="card-text">$40.00 </p>
                <a href="#" class="btn btn-primary">View options</a>
              </div>
            </div>

            </div>
            
        </div>
      </div>

      <footer className='bg-dark text-white text-center py-5'>
          <p>Copyright © Your Website 2023</p>
      </footer>
    </div>
  );
}

export default App;
