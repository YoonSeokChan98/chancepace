import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SwiperComponentStyled from './styled';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import { data1 } from '@/util/data';
import SwiperData from './SwiperData';

const Swipercomponent = () => {
    return (
        <SwiperComponentStyled>
            <div className="swiperWrap">
                <div>스위퍼슬라이드</div>
                <Swiper
                    // className="swiper"
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    navigation
                    pagination={{ clickable: true }}
                >
                    {data1 ? (
                        data1.map((x, i) => {
                            return (
                                <SwiperSlide key={i + 'asdf'}>
                                    <SwiperData item={x} />
                                </SwiperSlide>
                            );
                        })
                    ) : (
                        <SwiperSlide>데이터가 없습니다.</SwiperSlide>
                    )}
                </Swiper>
            </div>
        </SwiperComponentStyled>
    );
};
export default Swipercomponent;
