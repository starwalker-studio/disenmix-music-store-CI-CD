// usePagination.ts
import { useMemo } from "react";

const DOTS = "...";

function range(start: number, end: number): number[] {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

interface UsePaginationProps {
  totalPages: number; // 👈 ya no se calcula aquí, viene de Laravel
  currentPage: number;
  siblingCount?: number;
}

export function usePagination({
  totalPages,
  currentPage,
  siblingCount = 1,
}: UsePaginationProps): (number | string)[] {
  return useMemo(() => {
    const totalPageNumbers = siblingCount * 2 + 5;

    if (totalPageNumbers >= totalPages) {
      return range(1, totalPages);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPages - 2;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftRange = range(1, 3 + siblingCount * 2);
      return [...leftRange, DOTS, totalPages];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightRange = range(totalPages - (3 + siblingCount * 2) + 1, totalPages);
      return [1, DOTS, ...rightRange];
    }

    const middleRange = range(leftSiblingIndex, rightSiblingIndex);
    return [1, DOTS, ...middleRange, DOTS, totalPages];
  }, [totalPages, currentPage, siblingCount]);
}