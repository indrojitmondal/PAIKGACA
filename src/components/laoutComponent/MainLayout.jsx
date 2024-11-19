import React from 'react';
import Sliders from '../Sliders';
import TopBrands from '../../layouts/Brands/TopBrands';
import BransOnSell from '../../layouts/Brands/BrandsOnSell';

const MainLayout = () => {
    return (
        <div>
             <Sliders></Sliders>
             <TopBrands></TopBrands>
             <BransOnSell></BransOnSell>
        </div>
    );
};

export default MainLayout;