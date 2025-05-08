import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {
  return (
    <>
      <h1 className="text-4xl font-extrabold">Hello World</h1>
      <Button variant="link">
        <Link href={"/arandompost"} prefetch={false}>
          arandompost
        </Link>
      </Button>
    </>
  );
}
