const Navbar = ({ filterItem, menuList }) => {
  return (
    <>
      <nav className="navbar d-flex justify-content-center">
        <div className="btn-grup">
          {menuList.map((curElm) => {
            return (
              <>
                <button
                  className="btn-grup-item border-0 px-4 py-2 rounded m-1 mt-5 text-uppercase font-weight-bold"
                  onClick={() => filterItem(curElm)}
                >
                  {curElm}
                </button>
              </>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
