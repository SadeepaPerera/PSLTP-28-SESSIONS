/**
 * Format a number as LKR currency with comma separators.
 * Example: 1500000 -> "Rs. 1,500,000.00"
 */
export function formatCurrency(amount: number): string {
  // handle invalid input
  if (amount === null || amount === undefined || isNaN(amount)) {
    return "Rs. 0.00";
  }

  const isNegative = amount < 0;
  const value = Math.abs(amount);

  // fix to 2 decimal places
  const fixed = value.toFixed(2);

  // add comma separators
  const formatted = fixed.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return `Rs. ${isNegative ? "-" : ""}${formatted}`;
}

/**
 * Validate CDS number format: CDS-XXXX-XXXX where X is a digit.
 * Example: CDS-1234-5678 -> true, CDS-ABCD-1234 -> false
 */
export function validateCDSNumber(cds: string): boolean {
  // basic validation
  if (!cds || typeof cds !== "string") {
    return false;
  }

  const pattern = /^CDS-\d{4}-\d{4}$/;

  return pattern.test(cds);
}