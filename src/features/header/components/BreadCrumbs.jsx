import { Link, useLocation } from "react-router-dom";

const BreadCrumbs = () => {
  const location = useLocation();
  let paths = location.pathname.split("/");
  paths = paths.filter(Boolean);

  if (!paths.length) return;

  return (
    <nav className="mt-5 px-3">
      <ul className="flex flex-wrap gap-2">
        <li>
          <Link to={"/"}>home</Link>
        </li>
        {paths.map((path, i) => (
          <li key={i}>
            <Link to={"/" + paths.slice(0, i + 1).join("/")}>
              &nbsp;{" > " + decodeURI(path).replaceAll("-", " ")}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default BreadCrumbs;
