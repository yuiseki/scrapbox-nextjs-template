import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <p>Hi.</p>
      <p>
        Visit: <Link href="/test">/test</Link>
      </p>
    </div>
  );
};

export default Home;
