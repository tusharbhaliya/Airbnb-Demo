import EmptyState from "@/components/EmptyState";
import { useEffect } from "react";

type Props = {
  error: Error;
};

function ErrorState({ error }: Props) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return <EmptyState title="Uhoh" subtitle="Something went wrong!" />;
}

export default ErrorState;
