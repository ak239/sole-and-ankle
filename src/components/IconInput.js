import styled from 'styled-components';

import Icon from './Icon';

export default function IconInput({icon, ...delegated}) {
    return (
        <Wrapper>
            <IconWrapper><Icon id={icon} size={16}/></IconWrapper>
            <NativeInput type="text" {...delegated}></NativeInput>
        </Wrapper>
    );
}

const Wrapper = styled.label`
    position: relative;
`;

const IconWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    margin: auto;

    color: var(--gray-300);
`;

const NativeInput = styled.input`
    background-color: var(--gray-900);
    border: none;
    border-bottom: 1px solid var(--gray-300);
    font-size: ${14/16}rem;
    padding: 0px;
    padding-left: 24px;
    color: white;
    border-radius: 3px;

    &::placeholder {
        color: var(--gray-500);
    }
    &:focus {
        outline: 1px solid white;
        outline-offset: 2px;
    }
`;
