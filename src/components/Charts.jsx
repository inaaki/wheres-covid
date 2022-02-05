import _lang from 'lodash/lang';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import styled from 'styled-components';
import useChart from '../hooks/useChart';
import { cardColors } from '../utils/colors';
import Loader from './Loader';

const ChartWrapper = styled.div`
  border-radius: 2rem;
  border: 1px solid #ddd;
  box-sizing: 0 0 1px 0 #ddd;
  box-sizing: content-box;
  margin: 5rem auto;
  max-width: max-content;
  min-height: 25vh;
  min-width: 30vw;
  overflow: hidden;
  padding: 5rem 3rem 10rem;
  position: relative;

  .loader {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    width: auto;
    min-height: auto;
    background: #353f47;
  }
`;

const Filter = styled.select`
  background-color: transparent;
  border-radius: 0.4rem;
  border: 0.1rem solid ${(props) => props.theme.font};
  bottom: 3rem;
  color: ${(props) => props.theme.font};
  cursor: pointer;
  font-size: 1.6rem;
  left: 50%;
  outline: 0;
  padding: 0.5em;
  position: absolute;
  transform: translateX(-50%);
`;

function Charts({ currentCountry }) {
  const FILTER_OPTIONS = [10, 30, 100, 365];
  const X_AXIS_LIMIT = 30;
  // eslint-disable-next-line no-unused-vars
  const [filter, setFilter] = useState(10);

  const chart = useChart(filter, currentCountry);

  useEffect(() => {
    (async function fetchData() {
      await chart.request();
    })();
  }, [filter]);

  const handleFilter = (e) => {
    const value = _lang.toNumber(e.currentTarget.value);
    setFilter(value);
  };

  if (chart.error) {
    return <p>...{chart.error}...</p>;
  }
  if (chart.loading) {
    return (
      <ChartWrapper>
        <Loader />;
      </ChartWrapper>
    );
  }
  return (
    <ChartWrapper>
      <LineChart
        width={800}
        height={600}
        data={chart.data}
        margin={{
          left: 50,
          right: 30,
          top: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={filter > X_AXIS_LIMIT} />
        <XAxis
          angle={-75}
          dataKey="date"
          height={130}
          hide={filter > X_AXIS_LIMIT}
          interval={0}
          reversed
          textAnchor="end"
        />
        <YAxis />
        <Tooltip />
        <Line dataKey="total" type="monotone" stroke={cardColors.totalCase} />
        <Line
          dataKey="recovered"
          type="monotone"
          stroke={cardColors.totalRecovery}
        />
        <Line dataKey="deaths" type="monotone" stroke={cardColors.totalDeath} />
        <Legend />
      </LineChart>
      <Filter value={filter} onChange={handleFilter}>
        {FILTER_OPTIONS.map((option) => (
          <option key={option} value={option}>
            Last {option} days
          </option>
        ))}
      </Filter>
    </ChartWrapper>
  );
}

export default Charts;

Charts.propTypes = {
  currentCountry: PropTypes.string.isRequired,
};
