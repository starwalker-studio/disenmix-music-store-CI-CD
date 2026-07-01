import type { PaginatorProps } from "../../ts/layout-props";
import style from "./Paginator.module.scss";

export const Paginator = ({
  goToPage,
  currentPage,
  lastPage,
}: PaginatorProps) => {
  return (
    <>
      <div className={style.paginator}>
        <div className={style.paginator_nav}>
          <button
            className={`${currentPage === 1 ? style.inactive : ""}`}
            onClick={() => goToPage(currentPage - 1)}
          >
            Prev
          </button>

          {Array.from({ length: lastPage }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => goToPage(page)}
              className={`${page === currentPage ? style.page_active : ""}`}
            >
              {page}
            </button>
          ))}

          <button
            className={`${currentPage === lastPage ? style.inactive : ""}`}
            onClick={() => goToPage(currentPage + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};
