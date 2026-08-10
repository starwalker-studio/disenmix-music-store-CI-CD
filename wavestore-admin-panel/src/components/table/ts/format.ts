import { formatDistanceToNow } from "date-fns";
import { es } from "date-fns/locale";

export const formatPriceParts = (value: string | number) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  return formatter.format(Number(value));
};

export const formatDateShort = (isoDate: string): string => {
  return new Intl.DateTimeFormat("es-MX").format(new Date(isoDate));
};

export const formatDateToNow = (date: string): string => {
  return formatDistanceToNow(new Date(date), { addSuffix: true, locale: es });
};

export const truncate = (text: string, maxLength: number = 30): string => {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trim()}...`;
};
