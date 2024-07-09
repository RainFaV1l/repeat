import { PageHeaderComponent } from "../Components/PageHeaderComponent"
import styles from "./Home.module.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, EffectCube, FreeMode, Navigation, Pagination, Scrollbar } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cube';

export function Home() {
    return (
        <>
            <div className={styles.home}>
                <PageHeaderComponent title="Покупайте дешевле с нами!" subtitle="Продажа товаров. Скидка 30% на первую покупку!"/>
                <button className="custom-prev">Назад</button>
                <button className="custom-next">Вперед</button>
                <Swiper
                    loop={true}
                    effect={'cube'}
                    className={styles.slider}
                    modules={[Navigation, Pagination, Scrollbar, A11y, FreeMode, EffectCube]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation={{
                        nextEl: '.custom-next',
                        prevEl: '.custom-prev',
                    }}
                    freeMode={true}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <div className={styles.banner}>
                            <h3>Товар 1</h3>
                            <img src="/images/home/banner.jpg" alt="Картинка" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.banner}>
                            <h3>Товар 2</h3>
                            <img src="/images/home/banner.jpg" alt="Картинка" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.banner}>
                            <h3>Товар 3</h3>
                            <img src="/images/home/banner.jpg" alt="Картинка" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.banner}>
                            <h3>Товар 4</h3>
                            <img src="/images/home/banner.jpg" alt="Картинка" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}