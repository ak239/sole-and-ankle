import styled from 'styled-components';

export default function Main({children}) {
    return (<Wrapper>
        {children}
    </Wrapper>);
}

const Wrapper = styled.div`
    padding-top: 64px;
    padding-left: 32px;
    padding-right: 32px;
    width: 100%;
    min-height: 100%;

    display: flex;
    flex-direction: row-reverse;
    align-items: baseline;
    isolation: isolate;
    position: relative;
`;
