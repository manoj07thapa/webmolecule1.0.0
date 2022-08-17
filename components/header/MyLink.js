import Link from "next/link";
import { forwardRef } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const MyLink = forwardRef((props, ref) => {
  let { href, children, active, ...rest } = props;
  return (
    <Link href={href}>
      <a
        ref={ref}
        {...rest}
        className={classNames(
          active ? "bg-gray-100" : "",
          "block px-4 py-2 text-sm text-gray-700"
        )}
      >
        {children}
      </a>
    </Link>
  );
});

MyLink.displayName = "MyLink";

export default MyLink;
