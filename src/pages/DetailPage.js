import React from 'react';
import styled from 'styled-components';
import { Product } from '../component';

const DetailPage = ({data, user}) => {
    return (
        <DetailWrapper>
            <Product userData={data} user={user} />
        </DetailWrapper>
    );
};

export default DetailPage;

const DetailWrapper = styled.section`

`