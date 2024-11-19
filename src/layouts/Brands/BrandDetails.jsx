import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';

const BrandDetails = () => {
    const param = useParams();
    console.log('Hello Params:', param.id);
    return (
        <div className='min-h-[420px]'>
            <Helmet>
                <title>Paikgaca | Brand-Details</title>
            </Helmet>
            <div className='bg-b1 border-t py-5 border-white text-white'>
                 <h2 className='text-center text-2xl'>Brand Details</h2>
            </div>
             
        </div>
    );
};

export default BrandDetails;