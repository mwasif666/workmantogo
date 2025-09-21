import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./Testimonials.module.css";
import t1 from "./../../assets/images/services/t1.png";
import t2 from "./../../assets/images/services/t2.png";
import t3 from "./../../assets/images/services/t3.png";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John M",
      date: "12/09/2025",
      text: "I hired them for custom carpentry work in my living room. The shelves and cabinets were built with excellent precision. Truly skilled workmanship!",
      img: t1,
      rating: 5,
    },
    {
      name: "Sarah K",
      date: "10/09/2025",
      text: "We had a major roof leak during heavy rain. Their roofing team fixed it quickly and professionally. I feel much safer now.",
      img: t2,
      rating: 4.5,
    },
    {
      name: "David R",
      date: "08/09/2025",
      text: "Our office had faulty wiring causing frequent power trips. Their electricians solved the issue within hours. Very reliable service.",
      img: t3,
      rating: 5,
    },
    {
      name: "Emily W",
      date: "06/09/2025",
      text: "My HVAC unit stopped working in peak summer. They installed a new system and explained the maintenance clearly. Great experience!",
      img: t1,
      rating: 4,
    },
    {
      name: "Michael B",
      date: "04/09/2025",
      text: "Our bathroom plumbing was a disaster. Their plumber fixed the clogged pipes and installed a new shower system. Highly satisfied!",
      img: t2,
      rating: 4.5,
    },
    {
      name: "Linda S",
      date: "02/09/2025",
      text: "Needed custom wooden furniture for my kitchen. Their carpentry service delivered modern cabinets on time. Loved the finishing!",
      img: t3,
      rating: 5,
    },
    {
      name: "George T",
      date: "30/08/2025",
      text: "They repaired my damaged roof tiles after a storm. The team worked fast and cleaned up afterward. Excellent roofing service.",
      img: t1,
      rating: 4,
    },
    {
      name: "Rachel P",
      date: "28/08/2025",
      text: "We had frequent electrical short circuits at home. Their electricians diagnosed the fault and upgraded the panel. Safe and efficient job!",
      img: t2,
      rating: 5,
    },
    {
      name: "Kevin L",
      date: "26/08/2025",
      text: "My HVAC system needed servicing before winter. They cleaned and tuned it perfectly. Now the heating works like new.",
      img: t3,
      rating: 4.5,
    },
    {
      name: "Sophia H",
      date: "24/08/2025",
      text: "The kitchen sink was leaking badly. Their plumbing team arrived on time and fixed it without hassle. Definitely recommend their service!",
      img: t1,
      rating: 5,
    },
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push(<FaStar key={i} className={styles.star} />);
      } else if (rating >= i - 0.5) {
        stars.push(<FaStarHalfAlt key={i} className={styles.star} />);
      } else {
        stars.push(<FaRegStar key={i} className={styles.star} />);
      }
    }
    return stars;
  };

  return (
    <Container className={styles.testimonialsSection}>
      <div className={styles.Navigations}>
        <div>
          <h1
            style={{
              fontWeight: "700",
            }}
            className={styles.header}
          >
            What Our Customers Say
          </h1>
        </div>

        {/* Custom Navigation Buttons */}
        <div className={styles.navWrapper}>
          <div className={`${styles.navBtn} ${styles.prevBtn}`}>
            <FaChevronLeft />
          </div>
          <div className={`${styles.navBtn} ${styles.nextBtn}`}>
            <FaChevronRight />
          </div>
        </div>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        centeredSlides={true}
        navigation={{
          nextEl: `.${styles.nextBtn}`,
          prevEl: `.${styles.prevBtn}`,
        }}
        autoplay={{
          delay: 3000, // 3 sec ka delay
          disableOnInteraction: false, // interaction ke baad bhi autoplay continue
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide className={`${styles.swiper}`} key={index}>
            <div className={`${styles.card}`}>
              <div>
                <div className={styles.cardTitle}>
                  <div className={styles.initials}>
                    <span>{testimonial.name.split(" ")[0][0]}</span>
                  </div>
                  <div>
                    <h4>{testimonial.name}</h4>
                    <p className={styles.date}>{testimonial.date}</p>
                    <div className={styles.rating}>
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </div>
                <Card.Text>{testimonial.text}</Card.Text>
              </div>
              <Card.Img
                variant="bottom"
                src={testimonial.img}
                className={styles.testimonialImage}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Testimonials;
