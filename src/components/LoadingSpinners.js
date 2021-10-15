import React from 'react'
import Loader from "react-loader-spinner";

const LoadingSpinners = () => {
    return (
        <div className="container loader_head">
            <div className="loading">
            <Loader
                type="Bars"
                color="black"
                height={50}
                width={50}
               
            />
            </div>
        </div>
    )
}

export default LoadingSpinners
