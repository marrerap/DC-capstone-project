import { formatDistance } from "date-fns";
// npm i date-fns
import React from "react";



function RelativeTime(props) {
    
    const string = formatDistance(new Date(props.date), new Date(),{
        
        addSuffix: true
    });
    return <span>{string}</span>;
}

export default RelativeTime;

// What is the distance between 2 July 2014 and 1 January 2015?
// const result = formatDistance(new Date(2014, 6, 2), new Date(2015, 0, 1))
//=> '6 months'

// data.published_date -- format 2021-08-27

/* <RelativeTime date={published_date} /> */