import propTypes from "prop-types";
import { MyCursorContext } from "../context/CursorContext";
import { useContext } from "react";

const BlogSliderCard = ({ isSelected, src, title, date }) => {
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
        isSelected ? "" : "opacity-50 transition-opacity duration-300"
      } text-shade1 mx-auto w-2/3 md:w-full text-xl  flex flex-col md:flex-row gap-4 min-h-40 bg-shade2/10 p-4 rounded-xl shrink-0`}
    >
      <div className="md:h-[400px] md:w-3/5 rounded-xl overflow-hidden">
        <img
          className="h-full w-full object-cover"
          src={src}
          alt="blog image"
        />
      </div>
      <div className="md:w-2/5 h-full flex flex-col justify-between">
        <>
          <div className="mb-4">
            <span className="bg-shade2/30 p-2 rounded-lg text-xs">
              Development
            </span>
          </div>
          <h3 className="font-semibold md:text-3xl tracking-tighter">
            {title}
          </h3>
        </>
        <div className="grid font-thin text-sm mt-auto">
          <span className="opacity-50">12 min</span>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogSliderCard;

BlogSliderCard.propTypes = {
  isSelected: propTypes.bool,
  src: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  date: propTypes.string.isRequired
};
