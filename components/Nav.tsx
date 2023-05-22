/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

export default function Nav() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-center">
        <Link href="/">
          <a className="btn btn-ghost normal-case text-xl">&apos;imageing&apos;</a>
        </Link>
      </div>
    </div>
  );
}
