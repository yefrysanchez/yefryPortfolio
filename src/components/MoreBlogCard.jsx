import propTypes from "prop-types";
import { MyCursorContext } from "../context/CursorContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const MoreBlogCard = ({ isSelected }) => {
  const { setIsActive } = useContext(MyCursorContext);

  const onMouseEnter = () => {
    setIsActive(true);
  };
  const onMouseLeave = () => {
    setIsActive(false);
  };

  return (
    <div
      onClick={() => setIsActive(false)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`${
        isSelected ? "" : "opacity-20 transition-opacity duration-300"
      } text-shade1 group hover:bg-shade2/20 transition-colors duration-300 mx-auto w-full h-[400px]  overflow-hidden  min-h-40 bg-shade2/10 p-4 rounded-xl shrink-0`}
    >
   
        <Link
          to="/blogs"
          className="w-full h-full justify-center items-center flex font-bold tracking-tighter text-5xl lg:text-7xl text-center uppercase"
        >
          <h3>
            Explore More <br /> Blogs
          </h3>
        </Link>
 
    </div>
  );
};

export default MoreBlogCard;

MoreBlogCard.propTypes = {
  isSelected: propTypes.bool.isRequired,
};
