import SwiperDataStyled from './styled';

interface DataProps {
    item: {
        id: number;
        name: string;
        src: {
            src: string;
        };
    };
}

const SwiperData = ({ item }: DataProps) => {
    return (
        <SwiperDataStyled>
            <div>{item.id}</div>
            <div>{item.name}</div>
            <div>
                <img src={item.src.src} />
            </div>
        </SwiperDataStyled>
    );
};
export default SwiperData;
