import type { IBreadcrumbList } from "../../pages/ts/breadcrumbList";

type HeaderProps = {
  data: IBreadcrumbList;
  style: CSSModuleClasses;
};

export const PageHeader = ({ data, style }: HeaderProps) => {
  return (
    <>
      <div className={style.page_header}>
        <h3>{data.breadcrumbs.page_header}</h3>
        <ol className={style.header_breadcrumbs}>
          {data.breadcrumbs.nav_list.map((nav) => (
            <li key={nav.id}>
              <a href={nav.url}>{nav.label}</a>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};
