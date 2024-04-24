"use client";
import { useState } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('all');
  const tabNames = ['all', 'personal', 'home', 'business'];

  const handleTabChange = (event: any) => {
    setActiveTab(event.target.id);
  };

  return (
    <div className="flex flex-wrap text-base">
      {tabNames.map((tab) => (
        <div>
            <div key={tab}>
                <input
                    className="appearance-none"
                    type="radio"
                    name="tab"
                    id={tab}
                    checked={activeTab === tab}
                    onChange={handleTabChange}
                />
                <label
                    htmlFor={tab}
                    className={`cursor-pointer border-b-2 px-7 py-2 w-full ${activeTab === tab ? 'text-blue-400 border-b border-blue-400' : 'border-b border-b-gray-900 text-gray-900 opacity-80'}`}
                >
                    {tab.toUpperCase()}
                </label>
            </div>
            <p className={`order ${activeTab === tab ? '' : 'hidden'}`}>
                {tab.toLowerCase()} notes
            </p>
        </div>
      ))}
    </div>
  );
}

export default Tabs;
