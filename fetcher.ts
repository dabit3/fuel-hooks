const endpoint = 'https://node-beta-2.fuel.network/graphql'

export const fetchData = <TData, TVariables>(
  query: string,
  variables?: TVariables,
  options?: RequestInit["headers"]
): (() => Promise<TData>) => {
  return async () => {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(options ?? {}),
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0] || "Error..";
      console.log({ message })
    }

    return json.data;
  };
}