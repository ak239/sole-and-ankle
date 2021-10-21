import styled from 'styled-components';

export default function Breadcrumbs(props) {
    return (
        <Wrapper>
            <Link>Home</Link>
            <Link>Sale</Link>
            <Link>Shoes</Link>
        </Wrapper>
    );
}

const Wrapper = styled.div`
`;

const Link = styled.a`
    &:not(:first-of-type)::before {
        content: '/';
        padding-right: 8px;
        padding-left: 8px;
    }

    color: var(--gray-700);
    font-size: ${14/16}rem;
`;
