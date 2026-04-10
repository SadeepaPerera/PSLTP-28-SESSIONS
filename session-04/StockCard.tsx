import React from 'react';
import { formatCurrency } from './utils';

interface StockCardProps {
  symbol: string;
  price: number;
  change: number; // percentage change
}

/**
 * Display a stock price card with symbol, price, and change percentage.
 * Change should be green if positive, red if negative.
 */

export const StockCard: React.FC<StockCardProps> = ({ symbol, price, change }) => {
  const isPositive = change >= 0;
  const changeColor = isPositive ? 'green' : 'red';

  const handleBuy = () => {
    console.log(`Buying ${symbol}`);
  };

  return (
    <div
      style={{
        border: '1px solid #ccc',
        padding: '16px',
        borderRadius: '8px',
        maxWidth: '250px'
      }}
    >
      <h2 style={{ fontWeight: 'bold', fontSize: '20px' }}>
        {symbol}
      </h2>

      <p>
        {formatCurrency(price)}
      </p>

      <p style={{ color: changeColor }}>
        {isPositive ? '+' : ''}{change}%
      </p>

      <button onClick={handleBuy} aria-label={`Buy ${symbol}`}>
        Buy
      </button>
    </div>
  );
};