"use client";

import { useState, useEffect } from "react";

/**
 * ClientCurrencyFormatter component to handle currency formatting
 * on the client-side only to avoid hydration errors
 */
const ClientCurrencyFormatter = ({ amount }) => {
  const [formattedAmount, setFormattedAmount] = useState("");

  useEffect(() => {
    // Format the currency on the client side only
    if (typeof amount !== "number") amount = parseFloat(amount);
    const formatted = `$${amount.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
    setFormattedAmount(formatted);
  }, [amount]);

  // Initially render a placeholder based on the amount prop
  return <span>{formattedAmount || (typeof amount === 'number' ? '$' + amount.toFixed(2) : '')}</span>;
};

export default ClientCurrencyFormatter;