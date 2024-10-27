import React from "react";
import { Link, Outlet } from "react-router-dom";
import { LuBaggageClaim } from "react-icons/lu";
import {
  FLEX_BETWEEN,
  TYPOGRAPHY_3XL,
  TYPOGRAPHY_LG,
  TYPOGRAPHY_SM,
} from "constants/tailwindConstants";
import useReduxData from "hooks/useReduxData";
import { CATEGORIES } from "constants/constants";
import { BiSolidCategory } from "react-icons/bi";

const Admin = () => {
  const { products } = useReduxData();
  return (
    <div className="h-full overflow-scroll">
      <div className="flex [&>*]:flex-1 [&>*]:min-w-[200px] [&>*]:max-w-[400px] flex-wrap gap-3 h-36">
        <Link
          to={"products"}
          className={` ${FLEX_BETWEEN} p-3 rounded-lg`}
          style={{ background: "var(--primary-bg-gradient)" }}
        >
          <p className={TYPOGRAPHY_SM}>
            products <b className={TYPOGRAPHY_LG}>{products.length}</b>
          </p>
          <LuBaggageClaim className={TYPOGRAPHY_3XL} />
        </Link>
        <Link
          to={"categories"}
          className={` ${FLEX_BETWEEN} p-3 rounded-lg`}
          style={{ background: "var(--primary-bg-gradient)" }}
        >
          <p className={TYPOGRAPHY_SM}>
            categories <b className={TYPOGRAPHY_LG}>{CATEGORIES.length - 1}</b>
          </p>
          <BiSolidCategory className={TYPOGRAPHY_3XL} />
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Admin;
