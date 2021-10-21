import styled from 'styled-components';

export default function CategoryList(props) {
    return (
        <Wrapper>
            <Item>Lifestyle</Item>
            <Item>Jordan</Item>
            <Item selected>Running</Item>
            <Item>Basketball</Item>
            <Item>Training & Gym</Item>
            <Item>Football</Item>
            <Item>Skateboarding</Item>
            <Item>American Football</Item>
            <Item>Baseball</Item>
            <Item>Golf</Item>
            <Item>Tennis</Item>
            <Item>Atheletics</Item>
            <Item>Walking</Item>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    padding-top: 24px;

    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const Item = styled.div`
    color: ${p => p.selected ? 'var(--primary)' : 'var(--gray-900)'};
    font-size: ${16 / 16}rem;
    font-weight: 600;
`;
