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

      {/* <nav className="bg-blue-100">
        <div className="container mx-auto flex justify-between items-center py-4 sm:px-4 md:px-6 lg:px-8">
        
        <a href="https://www.whatsapp.com/" className="navbar-brand">
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8QkpgeqYWbviuV3aUH5w3GfOwzlw421lZ5aJMPGMYYg&s"
                alt="Bootstrap"
                width="30"
                height="24"
            />
        </a>

        
        <div className="nav">
            <a href="#" className="text-white text-sm mr-4">Send Notification</a>
            <a href="#" className="text-white text-sm">iExpense</a>
        </div>
    </div>
      </nav> */}

      {/* <nav class="flex-no-wrap relative flex w-full items-center justify-between bg-zinc-50 py-2 shadow-dark-mild dark:bg-neutral-700 lg:flex-wrap lg:justify-start lg:py-4">
        <div class="flex w-full flex-wrap items-center justify-between px-3">
          <button
            class="block border-0 bg-transparent px-2 text-black/50 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
            type="button"
            data-twe-collapse-init
            data-twe-target="#navbarSupportedContent1"
            aria-controls="navbarSupportedContent1"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="[&>svg]:w-7 [&>svg]:stroke-black/50 dark:[&>svg]:stroke-neutral-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </button>

          <div
            class="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
            id="navbarSupportedContent1"
            data-twe-collapse-item
          >
            <a
              class="mb-4 me-5 ms-2 mt-3 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mb-0 lg:mt-0"
              href="#"
            >
              <img
                src="https://tecdn.b-cdn.net/img/logo/te-transparent-noshadows.webp"
                style="height: 15px"
                alt="TE Logo"
                loading="lazy"
              />
            </a>

            <ul
              class="list-style-none me-auto flex flex-col ps-0 lg:flex-row"
              data-twe-navbar-nav-ref
            >
              <li class="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
                <a
                  class="text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                  href="#"
                  data-twe-nav-link-ref
                >
                  Dashboard
                </a>
              </li>

              <li class="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
                <a
                  class="text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                  href="#"
                  data-twe-nav-link-ref
                >
                  Team
                </a>
              </li>

              <li class="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
                <a
                  class="text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                  href="#"
                  data-twe-nav-link-ref
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>

          <div class="relative flex items-center">
            <a class="me-4 text-neutral-600 dark:text-white" href="#">
              <span class="[&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                </svg>
              </span>
            </a>

            <div
              class="relative"
              data-twe-dropdown-ref
              data-twe-dropdown-alignment="end"
            >
              <a
                class="me-4 flex items-center text-neutral-600 dark:text-white"
                href="#"
                id="dropdownMenuButton1"
                role="button"
                data-twe-dropdown-toggle-ref
                aria-expanded="false"
              >
                <span class="[&>svg]:w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>

                <span class="absolute -mt-4 ms-2.5 rounded-full bg-danger px-[0.35em] py-[0.15em] text-[0.6rem] font-bold leading-none text-white">
                  1
                </span>
              </a>

              <ul
                class="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg data-[twe-dropdown-show]:block dark:bg-surface-dark"
                aria-labelledby="dropdownMenuButton1"
                data-twe-dropdown-menu-ref
              >
                <li>
                  <a
                    class="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                    href="#"
                    data-twe-dropdown-item-ref
                  >
                    Action
                  </a>
                </li>
                <li>
                  <a
                    class="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                    href="#"
                    data-twe-dropdown-item-ref
                  >
                    Another action
                  </a>
                </li>
                <li>
                  <a
                    class="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                    href="#"
                    data-twe-dropdown-item-ref
                  >
                    Something else here
                  </a>
                </li>
              </ul>
            </div>

            <div
              class="relative"
              data-twe-dropdown-ref
              data-twe-dropdown-alignment="end"
            >
              <a
                class="flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
                href="#"
                id="dropdownMenuButton2"
                role="button"
                data-twe-dropdown-toggle-ref
                aria-expanded="false"
              >
                <img
                  src="https://tecdn.b-cdn.net/img/new/avatars/2.jpg"
                  class="rounded-full"
                  style="height: 25px; width: 25px"
                  alt=""
                  loading="lazy"
                />
              </a>

              <ul
                class="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg data-[twe-dropdown-show]:block dark:bg-surface-dark"
                aria-labelledby="dropdownMenuButton2"
                data-twe-dropdown-menu-ref
              >
                <li>
                  <a
                    class="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                    href="#"
                    data-twe-dropdown-item-ref
                  >
                    Action
                  </a>
                </li>
                <li>
                  <a
                    class="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                    href="#"
                    data-twe-dropdown-item-ref
                  >
                    Another action
                  </a>
                </li>
                <li>
                  <a
                    class="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                    href="#"
                    data-twe-dropdown-item-ref
                  >
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav> */}
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
