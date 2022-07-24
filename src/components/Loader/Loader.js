import { TailSpin } from 'react-loader-spinner';
import { Wrapper } from './Loader.styles';

const Loader = () => {
    return (
        <Wrapper>
            <TailSpin
                heigth="200"
                width="200"
                color='blue'
                ariaLabel='loading'
            />
        </Wrapper>
    );
};

export default Loader;