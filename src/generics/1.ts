import axios from "axios";

async function fetchData(url: string): Promise<string> {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}

console.log(
  "generics 1:",
  fetchData("https://662cb63d0547cdcde9def55e.mockapi.io/contacts").then(
    (res) => console.log(res)
  )
);
