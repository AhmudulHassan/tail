// import { Link } from "react-router-dom";
import { Collapse, Dropdown, initTWE, } from "tw-elements";


initTWE({ Collapse, Dropdown });
import DatePicker from "react-datepicker";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <div>
      <nav className="navbar bg-blue-100">
        <div className="container">
          <a className="navbar-brand" href="https://www.whatsapp.com/">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8QkpgeqYWbviuV3aUH5w3GfOwzlw421lZ5aJMPGMYYg&s"
              className="image"
              alt="Bootstrap"
              width="30"
              height="24"
            />
          </a>
          <div className="nav">
            <a to="" style={{ textDecoration: "none" }}>
              <button type="button" className="btn btn-success">
                Send Notification
              </button>
            </a>
          </div>
          <div className="nav">
            <a to="" style={{ textDecoration: "none" }}>
              <button type="button" className="btn btn-success">
                iExpense
              </button>
            </a>
          </div>

          <div className="profile">
            <div className="d-flex space-x-4 text-sky-900">
              {/* <svg
                fill="currentcolor"
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                width="10px"
                viewBox="0 0 192 512"
              >
                <path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V448c0 17.7 14.3 32 32 32s32-14.3 32-32V64zm128 0c0-17.7-14.3-32-32-32s-32 14.3-32 32V448c0 17.7 14.3 32 32 32s32-14.3 32-32V64z" />
              </svg> */}
              <p className="text-sm text-blue-700">
                Logged In As <br />
                <span style={{ color: "green" }}>76</span>
              </p>
            </div>
          </div>
          <div className="text-danger">
            <svg
              fill="currentcolor"
              style={{ marginLeft: "-10px", marginBottom: "-40px" }}
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="16"
              viewBox="0 0 512 512"
            >
              <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
            </svg>
            <button
              style={{
                marginRight: "30px",
                marginTop: "10px",
                color: "white",
              }}
              className="btn btn-error"
              // onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </nav>
      <h1 className="mt-4 text-2xl text-center font-bold text-teal-600">
        Seven Circle Bangladesh Ltd.
      </h1>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <form className="d-flex flex-wrap align-items-center justify-content-center">
              <input
                className="form-control me-2 mb-2"
                type="search"
                placeholder="Search by month"
                aria-label="Payroll Month Search"
              />
              <select
                className="form-select mb-2"
                aria-label="Status Search"
                placeholder="Status"
              >
                {/* Render dropdown options */}
              </select>
              <select
                className="form-select mb-2"
                aria-label="Status Search"
              ></select>
              <select
                className="form-select mb-2"
                aria-label="Status Search"
              ></select>
              <input
                className="form-control me-2 mb-2"
                type="search"
                placeholder="Search by name"
                aria-label="Name Search"
              />
              <input
                className="form-control me-2 mb-2"
                type="search"
                placeholder="Search by id"
                aria-label="Name Search"
              />
              <div className="dateParam mb-2">
                <DatePicker
                  placeholderText="Start Date"
                  dateFormat="dd/MM/yyyy"
                  className="form-control me-2"
                />
                <DatePicker
                  placeholderText="End Date"
                  dateFormat="dd/MM/yyyy"
                  className="form-control me-2"
                />
              </div>
              <div className="dateParam mb-2">
                <DatePicker
                  placeholderText="Start Date"
                  dateFormat="dd/MM/yyyy"
                  className="form-control me-2"
                />
                <DatePicker
                  placeholderText="End Date"
                  dateFormat="dd/MM/yyyy"
                  className="form-control me-2"
                />
              </div>
              <button className="btn btn-primary me-2" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="search-body table-responsive-md">
              <table className="table table-striped">
                <thead className="table-info">
                  <tr>
                    <th>Transaction ID</th>
                    <th>Payee ID</th>
                    <th>Payee Name</th>
                    <th>Cash Amount</th>
                    <th>Payroll Month</th>
                    <th>Sent Time</th>
                    <th>Accepted Time</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>10</td>
                    <td>10</td>
                    <td>10</td>
                    <td>10</td>
                    <td>10</td>
                    <td>10</td>
                    <td>10</td>
                    <td>10</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
