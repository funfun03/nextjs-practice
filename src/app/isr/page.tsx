import { fetchTasks } from "../lib/fetchTasks";
import TaskList from "../components/TaskList";

export const revalidate = 60;

export default async function ISRPage() {
  const tasks = await fetchTasks();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 text-black">
        Incremental Static Regeneration (ISR)
      </h1>
      <TaskList tasks={tasks} showViewDetails={true} />
    </div>
  );
}
