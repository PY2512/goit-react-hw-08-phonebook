import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFilterValue } from "redux/filter/filter-selectors";
import {changeFilter} from './../../redux/filter/filter-actions';

import style from "./filter.module.css";


const Filter = () => {
    const filterValue = useSelector(getFilterValue);
    const dispatch = useDispatch();

    const onChange = ({target: {value}}) => dispatch(changeFilter(value));

    return (
        <label className={style.label}>
            Find contacts by name
            <input
            type="text"
            value={filterValue}
            onChange={onChange}
            className={style.input}
            ></input>
        </label>
    );
}

export default Filter;