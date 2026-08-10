// Pagination.tsx
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { usePagination } from "./hook/usePagination";
import style from "./Pagination.module.scss";

interface PaginationProps {
  currentPage: number;
  totalPages: number; // 👈 viene directo de Laravel (last_page)
  onPageChange: (page: number) => void;
}

const DOTS = "...";

export const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  const pages = usePagination({ totalPages, currentPage });

  if (totalPages <= 1) return null;

  return (
    <nav className={style.pagination} aria-label="Paginación">
      <button
        className={style.nav_button}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Página anterior"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>

      <ul className={style.page_list}>
        {pages.map((page, index) =>
          page === DOTS ? (
            <li key={`dots-${index}`} className={style.dots}>
              {DOTS}
            </li>
          ) : (
            <li key={page}>
              <button
                className={clsx(style.page_button, page === currentPage && style.active)}
                onClick={() => onPageChange(page as number)}
                aria-current={page === currentPage ? "page" : undefined}
              >
                {page}
              </button>
            </li>
          )
        )}
      </ul>

      <button
        className={style.nav_button}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Página siguiente"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </nav>
  );
};