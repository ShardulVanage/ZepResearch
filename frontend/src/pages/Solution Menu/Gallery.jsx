import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Helmet } from "react-helmet-async";


const galleryData = [
  {
    id: 1,
    imageUrl: "https://res.cloudinary.com/dwlhesiyi/image/upload/v1727876302/Gallery/v3oashc1hzwihilxf3gm.jpg",
    title: "International Conference on Educational Innovation",
  },
  {
    id: 2,
    imageUrl: "https://res.cloudinary.com/dwlhesiyi/image/upload/v1727876297/Gallery/jdf8gyetdgiedxlhnpnl.jpg",
    title: "Global Conference on Research Methodologies",
  },
  {
    id: 3,
    imageUrl: "https://res.cloudinary.com/dwlhesiyi/image/upload/v1727876296/Gallery/lkcyqy7rk2p0e6oesswk.jpg",
    title: "Scopus Indexed Journal Publication Workshop",
  },
  {
    id: 4,
    imageUrl: "https://res.cloudinary.com/dwlhesiyi/image/upload/v1727876296/Gallery/mxivsfp3g0y0n3eaiq44.jpg",
    title: "Conference Registration and Networking Event",
  },
  {
    id: 5,
    imageUrl: "https://res.cloudinary.com/dwlhesiyi/image/upload/v1727876296/Gallery/yhlhxotliva9utsfysn3.jpg",
    title: "Conference Speakers Panel Discussion",
  },
  {
    id: 6,
    imageUrl: "https://res.cloudinary.com/dwlhesiyi/image/upload/v1727876296/Gallery/p2tvfkmhq5qgoxcuyjdr.jpg",
    title: "Virtual Event Management Workshop",
  },
  {
    id: 7,
    imageUrl: "https://res.cloudinary.com/dwlhesiyi/image/upload/v1727876295/Gallery/jxouvaqolvravdgpj5rl.jpg",
    title: "Education Conference 2024",
  },
  {
    id: 8,
    imageUrl: "https://res.cloudinary.com/dwlhesiyi/image/upload/v1727876295/Gallery/pa3i8esjgvq48mknllcx.jpg",
    title: "Research Paper Writing Seminar",
  },
  {
    id: 9,
    imageUrl: "https://res.cloudinary.com/dwlhesiyi/image/upload/v1727876295/Gallery/rrsb08xchyicddz6qshx.jpg",
    title: "Best Online Learning Practices Conference",
  },
  {
    id: 10,
    imageUrl: "https://res.cloudinary.com/dwlhesiyi/image/upload/v1727876294/Gallery/fmrpgxt6zw7kidnw9ccj.jpg",
    title: "Event Promotion and Marketing Symposium",
  },
  {
    id: 11,
    imageUrl: "https://res.cloudinary.com/dwlhesiyi/image/upload/v1727876294/Gallery/bdizrg7nkr31qzrm6j2b.jpg",
    title: "Scopus Journal Publication Guidelines",
  },
  {
    id: 12,
    imageUrl: "https://res.cloudinary.com/dwlhesiyi/image/upload/v1727876294/Gallery/hg4u0klfxydvar2mpgjo.jpg",
    title: "International Research Conference",
  },
  {
    id: 13,
    imageUrl: "https://res.cloudinary.com/dwlhesiyi/image/upload/v1727876294/Gallery/alqwdo3c2hqw2fa0sywn.jpg",
    title: "Global Education Technology Conference",
  },
  {
    id: 14,
    imageUrl: "https://res.cloudinary.com/dwlhesiyi/image/upload/v1727876294/Gallery/sgvnrkqmsykcv4xjr9np.jpg",
    title: "Research Methodology Workshop",
  },
  {
    id: 15,
    imageUrl: "https://res.cloudinary.com/dwlhesiyi/image/upload/v1730986108/Gallery/vvt2im2kpsbbqjq6hhfg.jpg",
    title: "Conference on Educational Innovation",
  },
  {
    id: 16,
    imageUrl: "https://res.cloudinary.com/dwlhesiyi/image/upload/v1730986107/Gallery/xdbkjcupuywr3efl1ik6.jpg",
    title: "Scopus Indexed Journal Conference",
  },
  {
    id: 17,
    imageUrl: "https://res.cloudinary.com/dwlhesiyi/image/upload/v1730986107/Gallery/nahmntwq44xrwqaycvny.jpg",
    title: "Virtual Conference Management",
  },
  {
    id: 18,
    imageUrl: "https://res.cloudinary.com/dwlhesiyi/image/upload/v1730986106/Gallery/gbs9b1ryscomlmzepwpc.jpg",
    title: "Research Paper Presentation",
  },
  {
    id: 19,
    imageUrl: "https://res.cloudinary.com/dwlhesiyi/image/upload/v1730986106/Gallery/wdkibqxo9bh6xm0rsyzy.jpg",
    title: "International Education Conference",
  },
  {
    id: 20,
    imageUrl: "https://res.cloudinary.com/dwlhesiyi/image/upload/v1730986106/Gallery/obloffhbagwrc8y5zbbl.jpg",
    title: "Global Research Symposium",
  },
  {
    id: 21,
    imageUrl: "https://res.cloudinary.com/dwlhesiyi/image/upload/v1730986106/Gallery/uhqkedvdfepausvn5vft.jpg",
    title: "Conference Speakers Forum",
  },
  {
    id: 22,
    imageUrl: "https://res.cloudinary.com/dwlhesiyi/image/upload/v1730986105/Gallery/z6gxyegvxfaz6s0ujg7x.jpg",
    title: "Best Online Learning Conference",
  },
  {
    id: 23,
    imageUrl: "https://res.cloudinary.com/dwlhesiyi/image/upload/v1730986104/Gallery/zasxw5lqhn8shefhczsp.jpg",
    title: "Event Promotion ",
  },
  {
    id: 24,
    imageUrl: "https://res.cloudinary.com/dwlhesiyi/image/upload/v1730986104/Gallery/ofjqi0zff5yqhevjmr9o.jpg",
    title: "Research Methodology Conference",
  },
  {
    id: 25,
    imageUrl: "https://res.cloudinary.com/dwlhesiyi/image/upload/v1730986104/Gallery/zb3jr69jkxkjf52js7n9.jpg",
    title: "Educational Research Symposium",
  },
  {
    id: 26,
    imageUrl: "https://res.cloudinary.com/dwlhesiyi/image/upload/v1730986104/Gallery/cltkqv3tfbuconzlcjxe.jpg",
    title: "Global Conference Registration",
  },
  {
    id: 27,
    imageUrl: "https://res.cloudinary.com/dwlhesiyi/image/upload/v1730986104/Gallery/juxso5bb6rqpk1pijdzv.jpg",
    title: "Scopus Publication Guidelines",
  },
  {
    id: 28,
    imageUrl: "https://res.cloudinary.com/dwlhesiyi/image/upload/v1730986103/Gallery/kyp2onqcxpwbgwoano8y.jpg",
    title: "International Education Research Conference",
  },
];
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};
function Gallery() {
  return (
    <>
    <Helmet>
                {/* Basic meta tags */}
                <title>Gallery | International Journal Publication and Conference</title>
                <meta 
                  name="description" 
                  content="Leading platform for international journal publications, academic conferences, and advanced courses in Data Science and AI." 
                />
                <meta 
                  name="keywords" 
                  content="research journal, international publication, academic conference, data science courses" 
                />
        
                {/* Open Graph meta tags */}
                <meta property="og:title" content="Zep Research | International Journal Publication" />
                <meta 
                  property="og:description" 
                  content="Leading platform for international journal publications and conferences" 
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://zepresearch.com" />
                <meta property="og:image" content="/og-image.jpg" />
        
                {/* Twitter Card meta tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Zep Research | International Journal Publication" />
                <meta 
                  name="twitter:description" 
                  content="Leading platform for international journal publications and conferences" 
                />
                <meta name="twitter:image" content="/og-image.jpg" />
        
                {/* Canonical URL */}
                <link rel="canonical" href="https://zepresearch.com" />
              </Helmet>
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Conferences and Publications
        </h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          >
          {galleryData.map((item) => (
            <GalleryItem key={item.id} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
    </>
  );
}

function GalleryItem({ item }) {
  return (
    <motion.div
      className="overflow-hidden rounded-lg shadow-lg bg-white"
      variants={itemVariants}
    >
      <div className="relative aspect-[4/3]">
        <img
          src={item.imageUrl}
          alt={item.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
          priority={item.id <= 6} // Load first 6 images immediately
          loading={item.id <= 6 ? "eager" : "lazy"}
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
          {item.title}
        </h3>
      </div>
    </motion.div>
  );
}

export default Gallery;