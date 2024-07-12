import { Fragment } from "react";
import Link from "next/link";

function NewsPage() {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/js-framework">NextJS Is A Great Framework</Link>
        </li>
        <li>Smth else</li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
