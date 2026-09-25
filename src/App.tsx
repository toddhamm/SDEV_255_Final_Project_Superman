import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {

  const [page, setPage] = useState(1);

  return (
    <div>

      {page === 1 && 
        <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-6 col-lg-4">

                <div className="card bg-secondary text-white p-4 shadow">
                  <h3 className="text-center mb-4">Sign In</h3>
                  
                  <form>
                    <div class="mb-3">
                      <label for="email" class="form-label">Email address</label>
                      <input type="email" class="form-control bg-dark text-white border-secondary" id="email" placeholder="name@example.com" required />
                    </div>

                    <div class="mb-3">
                      <label for="password" class="form-label">Password</label>
                      <input type="password" class="form-control bg-dark text-white border-secondary" id="password" required />
                    </div>

                    <button type="submit" class="btn btn-primary w-100 mt-2">Login</button>
                  </form>
                  
                </div>
                
              </div>
            </div>
          </div>
      }

      {page === 2 && 
      <div className="">
        <nav className="navbar bg-dark border-bottom border-body fixed-top" data-bs-theme="dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              [student view]
            </a>
            <div className="d-flex">

              <span className="navbar-text">
                Hello, [student placeholder] 
              </span> 

              <button className="btn btn-primary" type="submit">Logout</button>
            </div>
          </div>
        </nav>

        <div className="container">
          <br />
          <br />
          <br />
        </div>

        <div className="">
          <div className="row">
            <div className="col-md-1">
              <div class="d-grid gap-2">
                <button className="btn btn-primary btn-sm btn-block" type="button">My Schedule</button>
                <button className="btn btn-primary btn-sm btn-block" type="button">Add Class</button>
              </div>
            </div>
            <div className="col-6 col-md-8"></div>
          </div>
        </div>

      </div>
      }

      {page === 3 && 
      <div className="">
        <nav className="navbar bg-dark border-bottom border-body fixed-top" data-bs-theme="dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              [teacher view]
            </a>
            <div className="d-flex">

              <span className="navbar-text">
                Hello, [teacher placeholder] 
              </span> 

              <button className="btn btn-primary" type="submit">Logout</button>
            </div>
          </div>
        </nav>

        <div className="container">
          <br />
          <br />
          <br />
        </div>

        <div className="">
          <div className="row">
            <div className="col-md-1">
              <div class="d-grid gap-2">
                <button className="btn btn-primary btn-sm btn-block" type="button">Students</button>
                <button className="btn btn-primary btn-sm btn-block" type="button">Classes</button>
              </div>
            </div>
            <div className="col-6 col-md-8"></div>
          </div>
        </div>

      </div>
      }


      <div>
          <hr />
          <button className = "btn btn-sm btn-primary" onClick={() => setPage(1)}>Login Page</button> 
          <br />
          <button className = "btn btn-sm btn-primary" onClick={() => setPage(2)}>Student View</button> 
          <br />
          <button className = "btn btn-sm btn-primary" onClick={() => setPage(3)}>Teacher</button>
      </div>

    </div>
  )
}

export default App
