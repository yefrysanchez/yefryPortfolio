import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import BlogSliderCard from "./BlogSliderCard";
import MoreBlogCard from "./MoreBlogCard";
import { useState, useEffect } from "react";
import { blogs } from "../data/blogdata";
import { motion } from "framer-motion";
import { fadeUp } from "../animations/animation";

const BlogSlider = () => {
  const [index, setIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  const slides = [...blogs.slice(0, 3), "more"];
  const maxIndex = slides.length - 1;

  const handleIndexChange = (direction) => {
    if (direction === "next" && index < maxIndex) {
      setIndex(index + 1);
    } else if (direction === "prev" && index > 0) {
      setIndex(index - 1);
    }
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return;

    const distance = touchStartX - touchEndX;
    const minSwipeDistance = 50;

    if (Math.abs(distance) > minSwipeDistance) {
      if (distance > 0) {
        handleIndexChange("next");
      } else {
        handleIndexChange("prev");
      }
    }

    setTouchStartX(null);
    setTouchEndX(null);
  };

  // Keyboard navigation for accessibility
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        handleIndexChange("next");
      } else if (e.key === "ArrowLeft") {
        handleIndexChange("prev");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [index]);

  return (
    <motion.div
      variants={fadeUp}
      initial="initial"
      viewport={{ once: true }}
      whileInView={"animate"}
      className="max-w-6xl mx-auto "
    >
      {/* Slider wrapper with visible overflow */}
      <div
        className="relative "
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-300"
          style={{
            transform: `translateX(-${index * 72}%)`, // 70% width + ~2% gap
          }}
        >
          {slides.map((slide, i) => {
            const isSelected = i === index;
            return (
              <div key={i} className="flex-shrink-0 basis-[71.3%] px-2">
                {slide === "more" ? (
                  <MoreBlogCard isSelected={isSelected} />
                ) : (
                  <BlogSliderCard
                    title={slide.title}
                    src={slide.img}
                    date={slide.date}
                    isSelected={isSelected}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="text-shade1 flex gap-2 w-fit bg-shade2/30 p-2 rounded-xl mt-4 mx-auto lg:mx-0">
        <button
          onClick={() => handleIndexChange("prev")}
          disabled={index === 0}
          className="disabled:opacity-40 disabled:cursor-not-allowed bg-shade3 p-4 rounded-xl hover:bg-accent transition-colors duration-300"
          aria-label="Previous slide"
        >
          <ArrowLeftIcon />
        </button>
        <button
          onClick={() => handleIndexChange("next")}
          disabled={index === maxIndex}
          className="disabled:opacity-40 disabled:cursor-not-allowed bg-shade3 p-4 rounded-xl hover:bg-accent transition-colors duration-300"
          aria-label="Next slide"
        >
          <ArrowRightIcon />
        </button>
      </div>
    </motion.div>
  );
};

export default BlogSlider;
