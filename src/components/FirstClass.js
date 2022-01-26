import React, { useState } from 'react';

import jsonData from './womenData/womenData.json';


const FirstClass = () => {

    const [api, setApi] = useState(jsonData);



    return (
        <>

            {api.map((data) => {
                return (
                    <>
                        <img src={data.path} alt={data.path} />
                        <p>{data.price}</p>
                        <p>{data.name}</p>
                        <p>{data.gender}</p>
                    </>
                )
            })}

        </>
    )
}

export default FirstClass;
