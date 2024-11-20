import React from 'react';
import Sliders from '../Sliders';
import TopBrands from '../../layouts/Brands/TopBrands';
import BransOnSell from '../../layouts/Brands/BrandsOnSell';
import Services from '../../layouts/Services';
import Contact from '../../layouts/Contact';

const MainLayout = () => {
    return (
        <div>
             <Sliders></Sliders>
             <TopBrands></TopBrands>
             <BransOnSell></BransOnSell>
             <Services></Services>
             <Contact></Contact>
        </div>
    );
};

export default MainLayout;