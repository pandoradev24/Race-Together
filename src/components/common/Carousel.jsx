import clsx from "clsx";
import { Children } from "react";
import { useSpringCarousel } from "react-spring-carousel";

export default function Carousel({ children, itemsPerSlide, buttonStyle }) {
  const { carouselFragment, slideToPrevItem, slideToNextItem } =
    useSpringCarousel({
      itemsPerSlide: itemsPerSlide,
      withLoop: true,
      gutter: 0,
      items: Children.map(Children.toArray(children), (child, i) => ({
        id: i,
        renderItem: child,
      })),
    });

  return (
    <div className="relative flex flex-row overflow-hidden">
      <button
        onClick={slideToPrevItem}
        className={clsx(buttonStyle, buttonStyle && "left-0")}
      >
        <svg
          width="38"
          height="44"
          viewBox="0 0 38 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.130145 22.2611L37.5165 0.414848L37.7427 43.7155L0.130145 22.2611Z"
            fill="#D9D9D9"
          />
        </svg>
      </button>
      <div className="block overflow-hidden">{carouselFragment}</div>
      <button
        onClick={slideToNextItem}
        className={clsx(buttonStyle, buttonStyle && "right-0")}
      >
        <svg
          width="39"
          height="44"
          viewBox="0 0 39 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M38.1296 22.2611L0.743233 0.414848L0.517032 43.7155L38.1296 22.2611Z"
            fill="#D9D9D9"
          />
        </svg>
      </button>
    </div>
  );
}
