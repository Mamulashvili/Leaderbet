/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState, useRef, useContext } from "react";
import PropTypes from "prop-types";
import './style.scss';
import { FilterContext } from '../../Context/FilterContext';
import { rangeSliderMin, rangeSliderMax } from '../../helpers/constants';

export const MultiRangeSlider = ({ min, max, onChange }) => {
  const [ minVal, setMinVal ] = useState(0);
  const [ maxVal, setMaxVal ] = useState(0);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef(null);
  const sliderLeftValueRef = useRef(null);
  const sliderRightValueRef = useRef(null);
  const { filter, setFilter } = useContext(FilterContext);

  // Convert to percentage
  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [ min, max ]
  );

  useEffect(() => {
    setMinVal(min);
    setMaxVal(max);
  }, [ min, max ]);

  // Set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
      // Move value text with thumb
      sliderLeftValueRef.current.style.left = `${minPercent - 1}%`;
      sliderRightValueRef.current.style.right = `${100 - parseInt(maxPercent)}%`;
    }
  }, [ minVal, maxVal, getPercent ]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [ maxVal, getPercent ]);

  // Get min and max values when their state changes
  useEffect(() => {
    onChange({ min: minVal, max: maxVal });
    setFilter({
      ...filter,
      min: minVal,
      max: maxVal
    });
  }, [ minVal, maxVal ]);

  return (
    <div className='slider-wrapper flex flex-center'>
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        onChange={(event) => {
          const value = Math.min(Number(event.target.value), maxVal - 1);
          setMinVal(value);
          minValRef.current = value;
        }}
        className="thumb thumb-left"
        style={{ zIndex: minVal > max - 100 && "5" }}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        onChange={(event) => {
          const value = Math.max(Number(event.target.value), minVal + 1);
          setMaxVal(value);
          maxValRef.current = value;
        }}
        className="thumb thumb-right"
      />

      <div className="slider">
        <div className="slider-track" />
        <div
          ref={range}
          className="slider-range"
        />
        <div
          ref={sliderLeftValueRef}
          className="slider-left-value"
        >
          {minVal}
        </div>
        <div
          ref={sliderRightValueRef}
          className="slider-right-value"
        >
          {maxVal}
        </div>
      </div>
    </div>
  );
};

MultiRangeSlider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

MultiRangeSlider.defaultProps = {
  min: rangeSliderMin,
  max: rangeSliderMax,
  onChange: ({ min, max }) => { }
};