import axios from "axios";

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get<T>(url);
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
