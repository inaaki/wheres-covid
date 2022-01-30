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
import { getPerDaysData } from '../api';
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

const filterOptions = [10, 30];

function Charts({ currentCountry }) {
  // eslint-disable-next-line no-unused-vars
  const [filter, setFilter] = useState(10);
  const [loading, setLoading] = useState(false);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    (async function fetchData() {
      setLoading(true);
      const result = await getPerDaysData(filter, currentCountry);
      setChartData(result);
      setLoading(false);
      // console.log('result', result);
    })();
  }, [filter]);

  const handleFilter = (e) => {
    const value = _lang.toNumber(e.currentTarget.value);
    setFilter(value);
  };

  return (
    <ChartWrapper>
      {loading && <Loader />}
      {!loading && (
        <>
          <LineChart
            width={800}
            height={600}
            data={chartData}
            margin={{
              left: 50,
              right: 30,
              top: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              interval={0}
              dataKey="date"
              angle={-75}
              height={130}
              textAnchor="end"
            />
            <YAxis />
            <Tooltip />
            <Line
              dataKey="total"
              type="monotone"
              stroke={cardColors.totalCase}
            />
            <Line
              dataKey="recovered"
              type="monotone"
              stroke={cardColors.totalRecovery}
            />
            <Line
              dataKey="death"
              type="monotone"
              stroke={cardColors.totalDeath}
            />
            <Legend />
          </LineChart>
          <Filter value={filter} onChange={handleFilter}>
            {filterOptions.map((option) => (
              <option key={option} value={option}>
                Last {option} days
              </option>
            ))}
          </Filter>
        </>
      )}
    </ChartWrapper>
  );
}

export default Charts;

Charts.defaultProps = {
  currentCountry: 'all',
};
Charts.propTypes = {
  currentCountry: PropTypes.string,
};
