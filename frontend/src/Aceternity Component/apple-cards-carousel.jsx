import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconX,
} from "@tabler/icons-react";
import { cn } from "../lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "../utils/Image";
import { useOutsideClick } from "../hooks/useOutsideClick ";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

export const CarouselContext = createContext({
  onCardClose: () => {},
  currentIndex: 0,
});

export const Carousel = ({ items, initialScroll = 0 }) => {
  const carouselRef = React.useRef(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handleCardClose = (index) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 230 : 384;
      const gap = isMobile() ? 4 : 8;
      const scrollPosition = (cardWidth + gap) * (index + 1);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const isMobile = () => {
    return window && window.innerWidth < 768;
  };

  return (
    <CarouselContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex }}
    >
      <div className="relative w-full">
        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto py-10 md:py-20 scroll-smooth [scrollbar-width:none]"
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          <div
            className={cn(
              "absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l"
            )}
          ></div>
          <div
            className={cn(
              "flex flex-row justify-start gap-4 pl-4",
              "max-w-7xl mx-auto"
            )}
          >
            {items.map((item, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.2 * index,
                    ease: "easeOut",
                  },
                }}
                key={"card" + index}
                className="last:pr-[5%] md:last:pr-[33%] rounded-3xl"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="absolute left-0 right-0 -bottom-10 flex justify-center gap-2 mb-4 ">
          <button
            className="z-40 sm:h-14 sm:w-14 h-10 w-10 rounded-full bg-gray-900 flex items-center justify-center disabled:opacity-50 transition-opacity"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
          >
            <IconArrowNarrowLeft className="h-6 w-6 text-gray-100" />
          </button>
          <button
            className="z-40 sm:h-14 sm:w-14 h-10 w-10 rounded-full bg-gray-900 flex items-center justify-center disabled:opacity-50 transition-opacity"
            onClick={scrollRight}
            disabled={!canScrollRight}
          >
            <IconArrowNarrowRight className="h-6 w-6 text-gray-100" />
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const CardX = ({ card, index, layout = false }) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);
  const { onCardClose } = useContext(CarouselContext);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        handleClose();
      }
    }

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useOutsideClick(containerRef, () => handleClose());

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 h-screen z-50 overflow-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-black/80 backdrop-blur-lg h-full w-full fixed inset-0"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              ref={containerRef}
              layoutId={layout ? `card-${card.title}` : undefined}
              className="max-w-5xl mx-auto bg-white dark:bg-neutral-900 h-fit  z-[60] my-10 p-4 md:p-10 rounded-3xl font-sans relative"
            >
              <button
                className="sticky top-4 h-8 w-8 right-0 ml-auto bg-black dark:bg-white rounded-full flex items-center justify-center"
                onClick={handleClose}
              >
                <IconX className="h-6 w-6 text-gray-100" />
              </button>
              <motion.p
                layoutId={layout ? `category-${card.title}` : undefined}
                className="text-base font-medium text-black dark:text-white"
              >
                📍{card.location}
              </motion.p>
              <motion.p
                layoutId={layout ? `title-${card.title}` : undefined}
                className="text-2xl md:text-5xl font-semibold text-neutral-700 mt-4 dark:text-white"
              >
                {card.title}
              </motion.p>
              <div className="py-10">
                <Content content={card} />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <motion.button
        layoutId={layout ? `card-${card.title}` : undefined}
        onClick={handleOpen}
        className="rounded-3xl bg-gray-700 dark:bg-neutral-900 h-80 w-56 md:h-[40rem] md:w-96 overflow-hidden flex flex-col items-start justify-start relative z-10"
      >
        <div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30 pointer-events-none" />
        <div className="relative z-40 p-8">
          {/* <motion.p
            layoutId={layout ? `category-${card.category}` : undefined}
            className="text-white text-sm md:text-base font-medium font-sans text-left drop-shadow-md"
          >
            📍 {card.location}
          </motion.p> */}
          <motion.p
            layoutId={layout ? `title-${card.title}` : undefined}
            className="text-white text-xl md:text-3xl font-semibold max-w-xs text-left [text-wrap:balance] font-sans mt-2 drop-shadow-2xl "
          >
            {card.title}
          </motion.p>
          <div className="flex flex-col justify-start items-start px-2 pt-3">
            <p className="text-white text-sm md:text-base font-bold font-sans text-left drop-shadow-md">
              📍 {card.location}
            </p>
            <p className="text-white text-sm md:text-base font-bold font-sans text-left drop-shadow-md">
              📅{card.date}
            </p>
          </div>
        </div>
        <BlurImage
          src={card.img}
          alt={card.title}
          fill
          className="object-cover absolute z-10 inset-0 bg-black opacity-70"
        />
      </motion.button>
    </>
  );
};

export const BlurImage = ({ height, width, src, className, alt, ...rest }) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <Image
      className={cn(
        "transition duration-300 h-full",
        isLoading ? "blur-sm" : "blur-0",
        className
      )}
      onLoad={() => setLoading(false)}
      src={src}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      blurDataURL={typeof src === "string" ? src : undefined}
      alt={alt ? alt : "Background of a beautiful view"}
      {...rest}
    />
  );
};

export const Content = ({ content }) => {
  return (
    <>
      <div
        key={"dummy-content"}
        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
      >
        <Image
          src={content.img}
          alt="Macbook mockup from Aceternity UI"
          height="500"
          width="500"
          className=" h-full w-4/5 rounded-xl mx-auto object-fill mb-4 drop-shadow-lg"
        />
        <p className="text-neutral-600 dark:text-neutral-400 text-base text-justify md:text-xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            {content.title},<br />
          </span>{" "}
          {content.description}
        </p>
        <section className="grid sm:grid-cols-3 grid-cols-1 gap-2 justify-items-center  h-full place-items-center p-4">
          <Card className="w-auto sm:max-w-[24rem] ">
            <CardHeader floated={false} shadow={false} className="rounded-none">
              <Typography
                color="blue-gray"
                className="mt-1 mb-2  text-[20px] font-bold"
              >
                Place
              </Typography>
            </CardHeader>
            <CardBody className="px-4 pt-0">
              <Typography className="font-normal text-gray-600">
                {content.location}
              </Typography>
            </CardBody>
          </Card>
          <Card className="w-auto max-w-[24rem]">
            <CardHeader floated={false} shadow={false} className="rounded-none">
              <Typography
                color="blue-gray"
                className="mt-1 mb-2 text-[20px] font-bold"
              >
                Website
              </Typography>
            </CardHeader>
            <CardBody className="px-4 pt-0">
              <a
                href={content.websiteUrl}
                className="font-normal text-gray-600 underline underline-offset-2"
              >
                {content.websiteUrl}
              </a>
            </CardBody>
          </Card>
          <Card className="w-auto max-w-[24rem]">
            <CardHeader floated={false} shadow={false} className="rounded-none">
              <Typography
                color="blue-gray"
                className="mt-1 mb-2 text-[20px] font-bold"
              >
                Date
              </Typography>
            </CardHeader>
            <CardBody className="px-4 pt-0">
              <Typography className="font-normal text-gray-600">
                {content.date}
              </Typography>
            </CardBody>
          </Card>
        </section>
      </div>
    </>
  );
};
