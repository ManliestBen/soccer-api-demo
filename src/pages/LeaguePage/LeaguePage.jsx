import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const LeaguePage = () => {

    return (
        <>
            <Link
                to='/brazil'
            >Brazil
            </Link><br></br>
            <Link
                to='/england'
            >England
            </Link><br></br>
            <Link
                to='/spain'
            >Spain
            </Link>
        </>
    )
}


export default LeaguePage;