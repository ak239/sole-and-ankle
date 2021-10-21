import styled from 'styled-components';

import Icon from './Icon';
import IconInput from './IconInput';
import Link from './Link';

export default function Header() {
    return (
        <Wrapper>
            <SuperHeader/>
            <MainHeader/>
        </Wrapper>);
}

const Wrapper = styled.header`
    position: sticky;
    top: -48px;
    background-color: white;
    z-index: 1;
`;

function SuperHeader() {
    return (
        <SuperHeaderWrapper>
            <span>Free shipping on domestic orders over $75!</span>
            <SuperHeaderRightWrapper>
                <IconInput icon='search' placeholder='Search...'/>
                <Link>Help</Link>
                <Link><Icon id='shopping-bag' size={24}/></Link>
            </SuperHeaderRightWrapper>
        </SuperHeaderWrapper>
    );
}

const SuperHeaderWrapper = styled.aside`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 32px;
    background-color: var(--gray-900);
    color: white;
    font-size: ${14/16}rem;
`;

const SuperHeaderRightWrapper = styled.span`
    display: flex;
    gap: 24px;
    color: var(--gray-300);
    align-items: center;
`;

function MainHeader() {
    return (
        <MainHeaderBox>
            <MainHeaderWrapper>
                <Logo>Sole&Ankle</Logo>
                <NavItem selected>Sale</NavItem>
                <NavItem>New Releases</NavItem>
                <NavItem>Men</NavItem>
                <NavItem>Women</NavItem>
                <NavItem>Kids</NavItem>
                <NavItem>Collections</NavItem>
                <Spacer/>
            </MainHeaderWrapper>
        </MainHeaderBox>
    );
}

const MainHeaderBox = styled.nav`
    height: 72px;
    border-bottom: 1px solid var(--gray-300);

    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const MainHeaderWrapper = styled.div`    
    display: flex;
    justify-content: center;
    gap: 48px;
    align-items: baseline;
    padding: 0px 32px;
    flex: 0;
`;

const Logo = styled.div`
    left: 32px;
    font-size: ${24/16}rem;
    font-weight: 800;
    flex: 1;
`;

const NavItem = styled.a`
    text-transform: uppercase;
    height: ${24/16}rem;
    color: ${p => p.selected && 'var(--secondary)'};

    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`;

const Spacer = styled.div`
    flex: 1;
`;
