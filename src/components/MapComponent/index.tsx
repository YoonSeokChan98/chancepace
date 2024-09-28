import { Container as MapDiv, NaverMap, NavermapsProvider } from 'react-naver-maps';
import MapComponentStyled from './styled';

const MapComponent = () => {
    const clientId = 'epn2ll7du8';
    console.log('Naver Client ID:', process.env.REACT_APP_NAVER_CLIENT_ID);
    console.log('Naver Client ID:', clientId);
    return (
        <MapComponentStyled>
            <div>맵 테스트</div>
            <div className="mapComponentWrap">
                <div className="mapBox">
                    <NavermapsProvider ncpClientId={clientId}>
                        <MapDiv
                            style={{
                                width: '100%',
                                height: '600px',
                            }}
                        >
                            <NaverMap />
                        </MapDiv>
                    </NavermapsProvider>
                </div>
            </div>
        </MapComponentStyled>
    );
};
export default MapComponent;
