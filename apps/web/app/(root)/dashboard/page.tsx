import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Bell, Calendar, Clipboard, FileText, UsersRound } from 'lucide-react';
import React from 'react';

const stats = [
  {
    id: 1,
    title: 'Active Tasks',
    value: '24',
    description: '12% from last week',
    icon: <Clipboard className="h-6 w-6 text-blue-500" />,
  },
  {
    id: 2,
    title: 'Team Members',
    value: '12',
    description: '+2 new this month',
    icon: <UsersRound className="h-6 w-6 text-purple-500" />,
  },
  {
    id: 3,
    title: 'Documents',
    value: '85',
    description: '8% from last month',
    icon: <FileText className="h-6 w-6 text-yellow-500" />,
  },
  {
    id: 4,
    title: 'Meetings Today',
    value: '3',
    description: 'Next meeting in 45m',
    icon: <Calendar className="h-6 w-6 text-red-500" />,
  },
];

// Recent activities for dynamic rendering
const activities = [
  {
    id: 1,
    user: 'Sarah Chen',
    action: 'completed task',
    detail: 'Update homepage design',
    time: '2 hours ago',
  },
  {
    id: 2,
    user: 'Mike Wilson',
    action: 'created a new document',
    detail: 'Q4 Planning',
    time: '4 hours ago',
  },
];

// Upcoming tasks for dynamic rendering
const tasks = [
  { id: 1, task: 'Finalize project proposal', due: 'Due today' },
  { id: 2, task: 'Review team submissions', due: 'Due tomorrow' },
];

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-4 ">
      <div className="flex justify-between items-center mb-8 ">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <div className="flex gap-4 items-center">
          <Input
            placeholder="Search ..."
            type="text"
            className="border border-slate-600  bg-dark-100 focus:outline-none focus:ring-1 focus:ring-slate-500 w-60"
          />
          <Bell className="h-8 w-8 text-slate-400" />
        </div>
      </div>
      <div className="flex gap-8">
        {stats.map((stat) => (
          <StatCard
            key={stat.id}
            label={stat.title}
            value={stat.value}
            description={stat.description}
            icon={stat.icon}
          />
        ))}
      </div>
      <div className="flex justify-between gap-8">
        <div className="mt-6 bg-dark-600 p-8 rounded-xl border border-dark-200 flex-1">
          <h1 className="text-lg font-semibold mb-4">Recent Activity</h1>
          {activities.map((activity) => (
            <ActivityItem
              key={activity.id}
              user={activity.user}
              action={activity.action}
              detail={activity.detail}
              time={activity.time}
            />
          ))}
        </div>
        <div className="mt-6 bg-dark-600 p-8 rounded-xl border border-dark-200 flex-1">
          <h1 className="text-lg font-semibold mb-4">Upcoming Tasks</h1>
          {tasks.map((task) => (
            <TaskItem key={task.id} task={task.task} due={task.due} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

function StatCard({
  icon,
  label,
  description,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  description: string;
  value: string;
}) {
  return (
    <Card className="p-4 w-80 bg-dark-600 text-slate-100">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-sm text-muted-foreground">{label}</h2>
        {icon}
      </div>
      <h1 className="font-bold text-2xl my-4">{value}</h1>
      <p className="text-sm text-slate-400">{description}</p>
    </Card>
  );
}

const ActivityItem = ({
  user,
  action,
  detail,
  time,
}: {
  user: string;
  action: string;
  detail: string;
  time: string;
}) => (
  <div className="flex items-center mb-4">
    <div className="w-8 h-8 rounded-full bg-gray-300 mr-4"></div>
    <div>
      <p className="text-sm">
        <span className="font-semibold">{user}</span> {action}{' '}
        <span className="text-blue-500">{detail}</span>
      </p>
      <p className="text-xs text-gray-400">{time}</p>
    </div>
  </div>
);

const TaskItem = ({ task, due }: { task: string; due: string }) => (
  <div className="flex justify-between items-center mb-4 bg-dark-100 px-4 py-2 rounded-lg">
    <div className="flex gap-2 items-center">
      <div className="w-3 h-3 rounded-full border-slate-400 border-2" />
      <p className="text-sm">{task}</p>
    </div>
    <span className="text-xs text-red-500">{due}</span>
  </div>
);
