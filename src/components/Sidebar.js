import styled from 'styled-components';

export default function Sidebar({children}) {
    return (<Wrapper>{children}</Wrapper>)
}

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;

    flex: 0 1 248px;
`;
