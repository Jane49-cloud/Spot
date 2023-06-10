import { Search } from "@mui/icons-material";
import { Avatar } from "@mui/material";

interface Props {}

const Navbar = (props: Props) => {
  return (
    <div className="h-16 flex items-center justify-between shadow-md bg-white">
      <nav className="flex items-center ">
        <h1 className="mr-10 ml-4">Logo</h1>
        <div className="relative">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
            style={{ fontSize: 18 }}
          />
          <div>
            <form
              action=""
              className="searchbox__form searchbox--header masthead__searchbox"
            >
              <input
                type="text"
                placeholder="Search video"
                className="pl-10 outline-none"
              />
            </form>
          </div>
        </div>
      </nav>
      <div className="flex mr-10 items-center">
        <Avatar className="mr-2" />
        <p>Jane Doe</p>
      </div>
    </div>
  );
};

export default Navbar;
