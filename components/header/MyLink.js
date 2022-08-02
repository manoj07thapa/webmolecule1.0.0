import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

export const MyLink = React.forwardRef((props, ref) => {
  let { href, children, ...rest } = props;
  const router = useRouter();
  return (
    <Link href={href}>
      <a
        ref={ref}
        {...rest}
        className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-100"
      >
        {children}
      </a>
    </Link>
  );
});
