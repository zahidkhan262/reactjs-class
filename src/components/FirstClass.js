import React, { useState } from 'react';

import womenData from './womenData/womenData.json';


const FirstClass = () => {

    const [api, setApi] = useState(womenData);



    return (
        <>

            {api.map((data, index) => {
                return (
                    <>
                        <img src={data.path} alt={data.path} />
                        <p>{data.price}</p>
                    </>
                )
            })}

        </>
    )
}

export default FirstClass;
