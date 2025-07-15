import { fetchTasks } from "../lib/fetchTasks";
import TaskList from "../components/TaskList";

export const dynamic = "force-dynamic";

export default async function SSRPage() {
  const tasks = await fetchTasks();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 text-black">Server-Side Rendering (SSR)</h1>
      <TaskList tasks={tasks} />
    </div>
  );
}
