export const formatPriceParts = (value: string | number) => {
    const formatter = new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    return formatter.formatToParts(Number(value));
  };