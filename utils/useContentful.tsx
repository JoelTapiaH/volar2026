import React, { useState, useEffect } from "react";
import { createClient, Entry, EntryCollection } from "contentful";

// Tipos para las props
interface UseContentfulProps<T> {
  id?: string;
  contentType?: string;
  include?: number;
  query?: Record<string, any>;
  // @ts-ignore
  parser?: (data: Entry<T> | EntryCollection<T>, props: UseContentfulProps<T>) => T;
  client?: any; // Añade esta línea
}


// Props por defecto
const defaultProps = {
  include: 10,
  query: {},
};

// Hook useContentful con genéricos
const useContentful = (props: UseContentfulProps<any>) => {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
    environment: process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT || "master",
  });

  const internalProps = { ...defaultProps, ...props, client };

  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>(null);
  const [fetched, setFetched] = useState(!!data);
  const { parser } = internalProps;

  const requestContentfulData = () => {
    setLoading(true);

    fetchData(internalProps)
      .then((response) => {
        const parsedData = parser ? parser(response, internalProps) : response;
        setData(parsedData);
        setLoading(false);
        setFetched(true);
      })
      .catch((error) => {
        setError(error);
      });
  };

  useEffect(() => {
    if (fetched) {
      setFetched(false);
    }

    requestContentfulData();
  }, []);

  return { data, error, fetched, loading };
};


// Función fetchData con genéricos
export const fetchData = async (props: UseContentfulProps<any>) => {
  const { client, contentType, id, include, query } = props;

  try {
    const request = id
      ? await client.getEntry(id, { include, ...query })
      : await client.getEntries({ content_type: contentType, include, ...query });

    return request;
  } catch (error) {
    console.error(error);
    throw new Error("Error fetching data from Contentful");
  }
};


export default useContentful;