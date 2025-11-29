import { useEffect, useState } from "react";

export function usefetchData() {
  const [post, setPost] = useState("");

  const dataFetcher = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const json = await response.json();
    setPost(json);
  };

  useEffect(() => {
    dataFetcher();
  }, []);

  return post;
}

export function useFetch(url) {
  const [finalData, setFinalData] = useState({});
  const [loading, setLoading] = useState(true);
  async function getDetails() {
    setLoading(true);
    const response = await fetch(url);
    const json = await response.json();
    setFinalData(json);
    setLoading(false);
  }

  useEffect(() => {
    getDetails();
  }, [url]);

  useEffect(() => {
    const value = setInterval(getDetails, 10 * 1000);
    return () => clearInterval(value);
  }, [url]);
  return {
    finalData,
    loading,
  };
}
