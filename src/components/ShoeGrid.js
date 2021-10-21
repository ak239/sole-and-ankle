import styled from 'styled-components';

import Select from './Select';
import SHOES from '../data';

export default function ShoeGrid(props) {
    return (
        <Wrapper>
            <TitleWrapper>
                <Title>Running</Title>
                <Select
                    label="Sort"
                    value="newest"
                >
                    <option value="newest">Newest Releases</option>
                    <option value="price">Price</option>
                </Select>
            </TitleWrapper>
            <Grid>
                {SHOES.map(shoe => <ShoeCard {...shoe}></ShoeCard>)}
            </Grid>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    flex: 1;
`;

const TitleWrapper = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    padding-bottom: 32px;
`;

const Title = styled.div`
    font-size: ${24/16}rem;
    color: var(--gray-900);
    font-weight: 600;
`;

const Grid = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 36px;
`;

function ShoeCard({releaseDate, imageSrc, name, numOfColors, price, salePrice}) {
    return (
        <ShoeCardWrapper>
            <ImageWrapper src={imageSrc}/>
            <ShoeFooter>
                <ShoeTitle>{name}<Color>{numOfColors > 1 ? numOfColors + ' Colors' : '1 Color' }</Color></ShoeTitle>
                <PriceWrapper>
                <Price hasSalePrice={!!salePrice}>{price / 100}$</Price>
                {salePrice && <SalePrice>{salePrice / 100}$</SalePrice>}
                </PriceWrapper>
            </ShoeFooter>
            {salePrice && <Label color='var(--primary)'>Sale</Label>}
            {Date.now() - releaseDate < 1000 * 60 * 60 * 24 && <Label  color='var(--secondary)'>Just Released!</Label>}
        </ShoeCardWrapper>
    );
}

const ShoeCardWrapper = styled.article`
    flex: 1 1 340px;
    position: relative;
`;

const ImageWrapper = styled.img`
    width: 100%;
    border-radius: 16px 16px 4px 4px;
`;

const ShoeTitle = styled.div`
    flex: 1;

    color: var(--gray-900);
    font-size: ${16 / 16}rem;
    font-weight: 600;
`;

const Price = styled.div`
    color: var(--gray-900);
    font-size: ${16 / 16}rem;
    font-weight: 500;
    text-decoration: ${p => p.hasSalePrice && 'line-through'};
`;

const PriceWrapper = styled.div`
`;

const Color = styled.div`
    color: var(--gray-700);
    font-size: ${16/16}rem;
    font-weight: 500;
`;

const SalePrice = styled.div`
    color: var(--primary);
    font-size: ${16 / 16}rem;
    font-weight: 600;
    text-decoration: unset;
`;

const ShoeFooter = styled.div`
    display: flex;
`;

const Label = styled.div`
    position: absolute;
    right: -4px;
    top: 12px;

    background-color: ${p => p.color};
    padding: 8px 10px;

    color: white;
    font-weight: 700;
    font-size: ${14/16}rem;

    border-radius: 2px;
`;
