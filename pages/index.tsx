import type { NextPage } from "next";
import Link from "next/link";
import Container from "../components/Container";

const Home: NextPage = () => {
  return (
    <Container title="Dashboard">
      <button>
        <Link href="/sign-in">Sign In</Link>
      </button>
      <div>Dashboard</div>
    </Container>
  );
};

export default Home;
