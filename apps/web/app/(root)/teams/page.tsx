'use client';
import Combobox from '@/components/common/ComboBox';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { priorityOptions } from '@/constants';
import { Building, User, UserRoundPlus, UsersRound } from 'lucide-react';
import { useState } from 'react';

const Team = () => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');

  const teamStats = [
    { title: 'Total Members', value: '20', icon: <UsersRound size={24} /> },
    { title: 'Active Now', value: '18', icon: <UsersRound size={24} /> },
    { title: 'Departments', value: '5', icon: <Building size={24} /> },
  ];

  // Sample Members Data
  const members = [
    { name: 'Sarah Chen', role: 'Product Designer', online: true },
    { name: 'Alex Morgan', role: 'Senior Developer', online: true },
    { name: 'James Wilson', role: 'Marketing Lead', online: false },
  ];

  // Filtered Members
  const filteredMembers = members.filter(
    (member) =>
      member.name.toLowerCase().includes(search.toLowerCase()) &&
      (filter === 'All' || member.role.includes(filter)),
  );

  return (
    <div className="p-6 space-y-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold">Team</h1>
        <Button className="bg-success hover:bg-success-100 font-medium text-dark-100">
          <UserRoundPlus size={16} />
          Invite Member
        </Button>
      </div>
      {/* Team Stats Section */}
      <div className="grid grid-cols-3 gap-4">
        {teamStats.map((stat, idx) => (
          <TeamCard
            key={idx}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
          />
        ))}
      </div>

      {/* Team Members Section */}
      <div className="space-y-6 bg-dark-600 p-12 rounded-xl">
        <div className="flex justify-between items-center">
          <h1 className="font-semibold text-lg"> Team Members</h1>
          <div className="flex items-center justify-between space-x-4">
            <Input
              placeholder="Search Task"
              className="border border-slate-600  bg-dark-100 focus:outline-none focus:ring-1 focus:ring-slate-500"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Combobox options={priorityOptions} />
          </div>
        </div>
        <div className="w-full h-[1px] bg-slate-500" />
        <div className="grid grid-cols-3 gap-4">
          {filteredMembers.map((member, idx) => (
            <Card
              key={idx}
              className="flex flex-col items-center text-center space-y-2 p-4 bg-dark-200 gap-4"
            >
              <div className="flex justify-between w-full items-center">
                <div className="flex items-center gap-4">
                  <User size={24} color="white" />
                  <div className="flex flex-col items-start space-y-1">
                    <span className="text-lg font-bold text-white">
                      {member.name}
                    </span>
                    <span className="text-sm text-slate-400">
                      {member.role}
                    </span>
                  </div>
                </div>
                <span
                  className={`w-3 h-3 rounded-full ${
                    member.online ? 'bg-green-500' : 'bg-gray-400'
                  }`}
                />
              </div>
              <div className="flex space-x-2 justify-around w-full">
                <button className="text-green-600">Message</button>
                <button className="text-slate-400">Profile</button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

const TeamCard = ({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
}) => {
  return (
    <Card className="flex items-center justify-between p-4 bg-dark-600 text-slate-200">
      <div className="flex flex-col items-start space-y-2">
        <span>{title}</span>
        <span className="text-2xl font-bold">{value}</span>
      </div>
      <div className="bg-blue-300 rounded-lg w-10 h-10 flex justify-center  items-center">
        {icon}
      </div>
    </Card>
  );
};

export default Team;
