import React from 'react'
import { useState } from 'react'
import MoreDetails from './MoreDetails';

export const ConditionalRendering = () => {
    const [determinant, setDeterminant] = useState(false);

    // let showData = determinant || "mern";
    // console.log(showData);

    let HideData = determinant || "mern";
    console.log(HideData);


    function handleHide() {
        !determinant ? setDeterminant(true) : setDeterminant(false)
        //     // if (!determinant)
        //     {setDeterminant(true)

        //     // }else{setDeterminant(false)

        // //     }

    }




    return (
        <main className='container text-center'>
            <hr />


            <h2 className='text-primary'>ConditionalRendering</h2>
            <hr />

            <form>
                <input type="text" placeholder='your name' />
                <br /><br />

                {determinant && <MoreDetails />}
            </form>

            <button onClick={handleHide}>
                {!determinant ? "see more" : "see less"}</button>

        </main>
    )
}

export default ConditionalRendering