import { fetchTaskById, fetchTasks } from "../../lib/fetchTasks";
import { Task } from "../../types/types";
import TaskTitle from "../../components/TaskTitle";
import TaskStatus from "../../components/TaskStatus";
import TaskPriority from "../../components/TaskPriority";
import TaskDate from "../../components/TaskDate";

export const revalidate = 60;

export async function generateStaticParams() {
  try {
    const tasks = await fetchTasks();
    return tasks.map((task: Task) => ({
      id: task.id?.toString() || "",
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  try {
    const task: Task = await fetchTaskById(id);

    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6 text-black">Task Details</h1>

        {/* Task Detail Row - styled like TaskList table row */}
        <div className="overflow-x-auto">
          <div className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
            {/* Header */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-4 border-b border-gray-200">
              <div className="grid grid-cols-7 gap-4">
                <div className="text-xs font-bold text-gray-600 uppercase tracking-wider">
                  Task
                </div>
                <div className="text-xs font-bold text-gray-600 uppercase tracking-wider text-center">
                  Status
                </div>
                <div className="text-xs font-bold text-gray-600 uppercase tracking-wider text-center">
                  Priority
                </div>
                <div className="text-xs font-bold text-gray-600 uppercase tracking-wider">
                  Start Date
                </div>
                <div className="text-xs font-bold text-gray-600 uppercase tracking-wider">
                  Due Date
                </div>
                <div className="text-xs font-bold text-gray-600 uppercase tracking-wider">
                  Completed
                </div>
                <div className="text-xs font-bold text-gray-600 uppercase tracking-wider">
                  Assignee
                </div>
              </div>
            </div>

            {/* Task Data Row */}
            <div className="px-6 py-4 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-200">
              <div className="grid grid-cols-7 gap-4 items-center">
                <div>
                  <TaskTitle
                    task={{ title: task.title, description: task.description }}
                  />
                </div>

                <div className="text-center">
                  <TaskStatus task={task} />
                </div>

                <div className="text-center">
                  <TaskPriority priority={task.priority} />
                </div>

                <div className="text-sm text-gray-700">
                  <TaskDate date={task.start_date} />
                </div>

                <div className="text-sm text-gray-700">
                  <TaskDate date={task.due_date} />
                </div>

                <div className="text-sm text-gray-700">
                  <TaskDate date={task.completed_date} />
                </div>

                <div className="text-sm text-gray-700">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm font-semibold">
                        {task.assignee_id
                          ? task.assignee_id.toString().charAt(0)
                          : "U"}
                      </span>
                    </div>
                    <span className="font-medium">
                      {task.assignee_id
                        ? `User ${task.assignee_id}`
                        : "Unassigned"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-black">Task Not Found</h1>
        <p className="text-black">The task with ID {id} could not be found.</p>
      </div>
    );
  }
}
