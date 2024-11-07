import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GalleryItem from "./GalleryItem";

gsap.registerPlugin(ScrollTrigger);

const galleryData = [
  {
    id: 1,
    imageUrl:
      "https://res.cloudinary.com/dwlhesiyi/image/upload/v1727876302/Gallery/v3oashc1hzwihilxf3gm.jpg",
  },
  {
    id: 2,
    imageUrl:
      "https://res.cloudinary.com/dwlhesiyi/image/upload/v1727876297/Gallery/jdf8gyetdgiedxlhnpnl.jpg",
  },
  {
    id: 3,
    imageUrl:
      "https://res.cloudinary.com/dwlhesiyi/image/upload/v1727876296/Gallery/lkcyqy7rk2p0e6oesswk.jpg",
  },
  {
    id: 4,
    imageUrl:
      "https://res.cloudinary.com/dwlhesiyi/image/upload/v1727876296/Gallery/mxivsfp3g0y0n3eaiq44.jpg",
  },
  {
    id: 5,
    imageUrl:
      "https://res.cloudinary.com/dwlhesiyi/image/upload/v1727876296/Gallery/yhlhxotliva9utsfysn3.jpg",
  },
  {
    id: 6,
    imageUrl:
      "https://res.cloudinary.com/dwlhesiyi/image/upload/v1727876296/Gallery/p2tvfkmhq5qgoxcuyjdr.jpg",
  },
  {
    id: 7,
    imageUrl:
      "https://res.cloudinary.com/dwlhesiyi/image/upload/v1727876295/Gallery/jxouvaqolvravdgpj5rl.jpg",
  },
  {
    id: 8,
    imageUrl:
      "https://res.cloudinary.com/dwlhesiyi/image/upload/v1727876295/Gallery/pa3i8esjgvq48mknllcx.jpg",
  },
  {
    id: 9,
    imageUrl:
      "https://res.cloudinary.com/dwlhesiyi/image/upload/v1727876295/Gallery/rrsb08xchyicddz6qshx.jpg",
  },
  {
    id: 10,
    imageUrl:
      "https://res.cloudinary.com/dwlhesiyi/image/upload/v1727876294/Gallery/fmrpgxt6zw7kidnw9ccj.jpg",
  },
  {
    id: 11,
    imageUrl:
      "https://res.cloudinary.com/dwlhesiyi/image/upload/v1727876294/Gallery/bdizrg7nkr31qzrm6j2b.jpg",
  },
  {
    id: 12,
    imageUrl:
      "https://res.cloudinary.com/dwlhesiyi/image/upload/v1727876294/Gallery/hg4u0klfxydvar2mpgjo.jpg",
  },
  {
    id: 13,
    imageUrl:
      "https://res.cloudinary.com/dwlhesiyi/image/upload/v1727876294/Gallery/alqwdo3c2hqw2fa0sywn.jpg",
  },
  {
    id: 14,
    imageUrl:
      "https://res.cloudinary.com/dwlhesiyi/image/upload/v1727876294/Gallery/sgvnrkqmsykcv4xjr9np.jpg",
  },
  {
    id: 15,
    imageUrl:
      "https://res.cloudinary.com/dwlhesiyi/image/upload/v1730986108/Gallery/vvt2im2kpsbbqjq6hhfg.jpg",
  },
  {
    id: 16,
    imageUrl:
      "https://res.cloudinary.com/dwlhesiyi/image/upload/v1730986107/Gallery/xdbkjcupuywr3efl1ik6.jpg",
  },
  {
    id: 17,
    imageUrl:
      "https://res.cloudinary.com/dwlhesiyi/image/upload/v1730986107/Gallery/nahmntwq44xrwqaycvny.jpg",
  },
  {
    id: 18,
    imageUrl:
      "https://res.cloudinary.com/dwlhesiyi/image/upload/v1730986106/Gallery/gbs9b1ryscomlmzepwpc.jpg",
  },
  {
    id: 19,
    imageUrl:
      "https://res.cloudinary.com/dwlhesiyi/image/upload/v1730986106/Gallery/wdkibqxo9bh6xm0rsyzy.jpg",
  },
  {
    id: 20,
    imageUrl:
      "https://res.cloudinary.com/dwlhesiyi/image/upload/v1730986106/Gallery/obloffhbagwrc8y5zbbl.jpg",
  },
  {
    id: 21,
    imageUrl:
      "https://res.cloudinary.com/dwlhesiyi/image/upload/v1730986106/Gallery/uhqkedvdfepausvn5vft.jpg",
  },
  {
    id: 22,
    imageUrl:
      "https://res.cloudinary.com/dwlhesiyi/image/upload/v1730986105/Gallery/z6gxyegvxfaz6s0ujg7x.jpg",
  },
  {
    id: 23,
    imageUrl:
      "https://res.cloudinary.com/dwlhesiyi/image/upload/v1730986104/Gallery/zasxw5lqhn8shefhczsp.jpg",
  },
  {
    id: 24,
    imageUrl:
      "https://res.cloudinary.com/dwlhesiyi/image/upload/v1730986104/Gallery/ofjqi0zff5yqhevjmr9o.jpg",
  },
  {
    id: 25,
    imageUrl:
      "https://res.cloudinary.com/dwlhesiyi/image/upload/v1730986104/Gallery/zb3jr69jkxkjf52js7n9.jpg",
  },
  {
    id: 26,
    imageUrl:
      "https://res.cloudinary.com/dwlhesiyi/image/upload/v1730986104/Gallery/cltkqv3tfbuconzlcjxe.jpg",
  },
  {
    id: 27,
    imageUrl:
      "https://res.cloudinary.com/dwlhesiyi/image/upload/v1730986104/Gallery/juxso5bb6rqpk1pijdzv.jpg",
  },
  {
    id: 28,
    imageUrl:
      "https://res.cloudinary.com/dwlhesiyi/image/upload/v1730986103/Gallery/kyp2onqcxpwbgwoano8y.jpg",
  },
];

function Gallery() {
  const galleryRef = useRef(null);

  useEffect(() => {
    const gallery = galleryRef.current;

    if (gallery) {
      gsap.fromTo(
        gallery.children,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gallery,
            start: "top bottom-=100",
            end: "bottom top+=100",
            scrub: 1,
          },
        }
      );
    }
  }, []);
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Conferences and Publications
        </h2>
        <motion.div
          ref={galleryRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {galleryData.map((item) => (
            <GalleryItem key={item.id} item={item} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Gallery;
