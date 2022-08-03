import Link from "next/link";
import React from "react";

const MyLink = React.forwardRef((props, ref) => {
  let { href, children, ...rest } = props;
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

export default MyLink;
