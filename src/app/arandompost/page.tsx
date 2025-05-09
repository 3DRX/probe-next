import { ClientComponent } from "@/components/example-client-component";

export default async function Post() {
  return (
    <>
      <h1 className="text-4xl font-extrabold">Hello From a Post</h1>
      <ClientComponent />
    </>
  );
}
