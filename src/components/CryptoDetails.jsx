import React, { useState } from 'react'
import HTMLReactParser from 'html-react-parser'
import { useParams } from 'react-router-dom';
import millify from 'millify';
import { Col, Row, Typography, Select } from 'antd';
import { MoneyCollectOutlined, CheckOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleoutlined, StopOutlined, TrophyOutlined, NumberOutlined, ThunderboltOutlined, ExclamationCircleOutlined } from '@ant-design/icons'

import { useGetCryptoDetailsQuery } from '../services/cryptoApi';

const { Title, Text } = Typography;
const { Option } = Select;


const CryptoDetails = () => {
 const { coinId } = useParams();
 const [timePeriod, setTimePeriod] = useState('7d');
 const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
 const cryptoDetails = data?.data?.coin;

 const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

 const stats = [
  {
   title: 'Price to USD',
   value: `${cryptoDetails.price && millify(cryptoDetails.price)}`,
   icon: <DollarCircleOutlined />
  },
  {
   title: 'Rank',
   value: cryptoDetails.rank,
   icon: <NumberOutlined />
  },
  {
   title: '24h Volume',
   value: `${cryptoDetails.volume && millify(cryptoDetails.volume)}`, icon: <ThunderboltOutlined />
  },
  {
   title: 'Market Cap',
   value: `${cryptoDetails.volume && millify(cryptoDetails.marketCap)}`, icon: <DollarCircleOutlined />
  },
  {
   title: 'All-time-high(daily avg.)',
   value: `${cryptoDetails.volume && millify(cryptoDetails.allTimeHigh.price)}`, icon: <TrophyOutlined />
  }
 ]

 const genericStats = [
  {
   title: 'Number Of Markets',
   value: cryptoDetails.numberOfMarkets,
   icon: <FundOutlined />
  },
  {
   title: 'Number Of Exchanges',
   value: cryptoDetails.numberOfExchanges,
   icon: <MoneyCollectOutlined />
  },
  {
   title: 'Approved Supply',
   value: cryptoDetails.approvedSupply ? <CheckOutlined /> : <StopOutlined />,
   icon: <ExclamationCircleOutlined />
  },
  {
   title: 'Total Supply',
   value: `${millify(cryptoDetails.totalSupply)}`, 
   icon: <ExclamationCircleOutlined />
  },
  {
   title: 'Circulating Supply',
   value: `${millify(cryptoDetails.circulatingSupply)}`, 
   icon: <ExclamationCircleOutlined />
  }
 ]
 
 return (
  <div>

  </div>
 )
}

export default CryptoDetails
