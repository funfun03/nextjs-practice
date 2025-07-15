// import { fetchTasks } from "../lib/fetchTasks";
import TaskList from "../components/TaskList";
import { apiBaseUrl } from "../constants/constants";

export const dynamic = "force-dynamic";

export default async function SSGPage() {
  const tasks = await fetch(`${apiBaseUrl}/workspaces/tasks`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${
        (typeof window !== "undefined" && localStorage.getItem("token")) ||
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ0dW5nbnRAc29mdGVjaC52biIsImVtYWlsIjoidHVuZ250QHNvZnRlY2gudm4iLCJzdWIiOjEsImFwcGxpY2F0aW9uIjoiT25saW5lIFNob3AgLSBBUEkiLCJyb2xlcyI6W3siaWQiOjEsIm5hbWUiOiJBZG1pbmlzdHJhdG9ycyJ9LHsiaWQiOjIsIm5hbWUiOiJNYW5hZ2VycyJ9XSwiaWF0IjoxNzUyMDkxMjkyLCJleHAiOjE3ODM2NDg4OTJ9.doBBWgZoVTfG5OlE--3ARLGDHYO73XrC0A7VeZIG1pk"
      }`,
    },
  });
  const data = await tasks.json();
  console.log("Fetched tasks:", data);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 text-black">
        Static Site Generation (SSG)
      </h1>
      <TaskList tasks={data} />
    </div>
  );
}
