"use client";

import { mockDataFetch } from "@/lib/datafetch";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "./ui/skeleton";

export function ClientComponent() {
  const exampleQuery = useQuery({
    queryKey: ["example-key"],
    queryFn: mockDataFetch,
  });

  return (
    <>
      {exampleQuery.data ? (
        <a>{exampleQuery.data}</a>
      ) : (
        <Skeleton className="h-16 w-64" />
      )}
    </>
  );
}
