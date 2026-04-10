import { useQuery } from '@tanstack/react-query';

interface StockData {
  symbol: string;
  price: number;
  timestamp: string;
}

/**
 * Custom hook to fetch stock price from API.
 * Fetches from /api/v1/stocks/{symbol} with 5s refetch interval.
 *
 * @param symbol - Stock symbol to fetch (e.g., 'JKH.N0000')
 * @returns Object with data, isLoading, error
 */

export function useStockPrice(symbol: string) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['stock', symbol],

    queryFn: async (): Promise<StockData> => {
      const response = await fetch(`/api/v1/stocks/${symbol}`);

      if (!response.ok) {
        throw new Error('Failed to fetch stock data');
      }

      const data = await response.json();
      return data;
    },

    refetchInterval: 5000,

    enabled: symbol ? true : false
  });

  return { data, isLoading, error };
}