import React, { useLayoutEffect, useState } from "react";
import Cursor from "react-cursor-follow";
import {colors} from "../../style/constants";

const color = [
    colors.white,
    colors.gray500,
    colors.gray500,
    colors.yellow500,
    colors.yellow700
];

const CircleCursor = () => {
    const [i, setI] = useState(0);
    useLayoutEffect(() => {
        setTimeout(() => {
            if (i === color.length) setI(0);
            else setI(i + 1);
        }, 500);
    }, [i]);
    return (
        <Cursor hollow color={color[i]} duration={0.8} size={20} />
    );
}

export default CircleCursor
