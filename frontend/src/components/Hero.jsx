import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { heroSlides, noticeItem } from "../data/mock";
import styles from "./Hero.module.css";

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={styles.hero} aria-label="메인 비주얼">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        loop
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className={styles.swiper}
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className={styles.slide}
              style={{ background: slide.gradient }}
            >
              <div className={`container ${styles.slideContent}`}>
                <p className={styles.slideSubtitle}>{slide.subtitle}</p>
                <h2 className={styles.slideTitle}>{slide.title}</h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={styles.noticeBar}>
        <div className={`container ${styles.noticeInner}`}>
          <h3 className={styles.noticeLabel}>NOTICE</h3>
          <a href="#notice" className={styles.noticeLink}>
            <strong>{noticeItem.title}</strong>
            <span className={styles.noticeDate}>{noticeItem.date}</span>
          </a>
        </div>
      </div>

      <div className={styles.dots} aria-hidden="true">
        {heroSlides.map((_, i) => (
          <span
            key={i}
            className={`${styles.dot} ${i === activeIndex ? styles.dotActive : ""}`}
          />
        ))}
      </div>
    </section>
  );
}
