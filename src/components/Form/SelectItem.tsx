import React, { useState } from "react";
import styled from "styled-components";


const Select = styled.select`
    background: none;
    border: none;
    border-radius: 2px;
    box-shadow: 0px 0px 1px 0px;
    outline: none;
    width: 97%;
    height: 1.8rem;
    padding-left: 17px;
`



export const SelectItem = () => {
    const [value, setValue] = useState("default");
    const handleChange = (e: any) => {
        setValue(e.target.value);
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(value);
    };
    return (
        <form onSubmit={handleSubmit}>
            <Select defaultValue={value} onChange={handleChange}>
                <option value="default" disabled hidden>
                    DNI        </option>
                <option value="dni">DNI</option>
                <option value="lu">LU</option>
            </Select>
        </form>
    );
}