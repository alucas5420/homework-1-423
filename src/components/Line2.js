import React from "react";
import styles from "@/styles/Line2.module.css";

export default function Line(props) {
    // console.log(props);
    return (
        <>
        <div className={styles.line}>
            {props.header}
        </div>
        </>
    )
}