import { motion } from 'motion/react';
import { Send, Users, MousePointer2, MailOpen, Plus } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Link } from 'react-router-dom';

const data = [
  { name: 'Mon', sent: 400, opens: 240 },
  { name: 'Tue', sent: 300, opens: 198 },
  { name: 'Wed', sent: 200, opens: 980 },
  { name: 'Thu', sent: 278, opens: 390 },
  { name: 'Fri', sent: 189, opens: 480 },
  { name: 'Sat', sent: 239, opens: 380 },
  { name: 'Sun', sent: 349, opens: 430 },
];

const StatCard = ({ label, value, trend, colorClass }: any) => (
  <div className="stat-card">
    <div className="stat-label">{label}</div>
    <div className="stat-value">{value}</div>
    <div className={`stat-change ${trend.includes('↑') ? 'pos' : ''}`}>
      {trend}
    </div>
  </div>
);

export default function Dashboard() {
  return (
    <div className="main-content">
      <header className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">Campaign Overview</h1>
          <p className="text-sm text-slate-500">Welcome back. Your mailboxes are synced.</p>
        </div>
        <Link 
          to="/campaigns/new" 
          className="btn btn-primary flex items-center gap-2"
        >
          <Plus size={18} />
          New Campaign
        </Link>
      </header>

      <div className="stats-row">
        <StatCard label="Emails Sent" value="42,891" trend="↑ 12% vs last month" />
        <StatCard label="Avg. Open Rate" value="38.4%" trend="↑ 2.1% improvement" />
        <StatCard label="Click-Through" value="12.7%" trend="Within target range" />
        <StatCard label="Active Tests" value="04" trend="A/B experiments live" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-grow min-h-0">
        <div className="lg:col-span-2 card">
          <div className="card-header">
            <div className="card-title">Active Campaigns</div>
            <Link to="/campaigns" className="text-xs font-semibold text-blue-600 hover:underline">View all</Link>
          </div>
          <div className="overflow-auto flex-grow">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Status</th>
                  <th>Performance</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Q3 Product Update <span className="ab-badge">A/B</span></td>
                  <td><span className="status-pill status-sending">Sending</span></td>
                  <td>42% Open</td>
                  <td className="text-blue-600 cursor-pointer font-medium">Pause</td>
                </tr>
                <tr>
                  <td>Customer Reactivation</td>
                  <td><span className="status-pill status-scheduled">Scheduled</span></td>
                  <td>--</td>
                  <td className="text-blue-600 cursor-pointer font-medium">Edit</td>
                </tr>
                <tr>
                  <td>Webinar Invitation</td>
                  <td><span className="status-pill status-sending">Sending</span></td>
                  <td>28% Open</td>
                  <td className="text-blue-600 cursor-pointer font-medium">Pause</td>
                </tr>
                <tr>
                  <td>New User Onboarding</td>
                  <td><span className="status-pill bg-slate-100 text-slate-700">Active</span></td>
                  <td>51% Open</td>
                  <td className="text-blue-600 cursor-pointer font-medium">Edit</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <div className="card-title">Quick Actions</div>
          </div>
          <div className="p-5 overflow-auto">
            <div className="mb-6">
              <div className="text-sm font-semibold mb-1">Connect Mailbox</div>
              <p className="text-xs text-slate-500">Google Workspace, Outlook 365 connected.</p>
            </div>
            
            <div className="mb-6">
              <div className="text-sm font-semibold mb-2">CRM Sync Status</div>
              <div className="integration-badge">
                <span className="w-5 h-5 flex items-center justify-center bg-blue-100 text-blue-700 rounded text-[10px] font-bold">S</span>
                Salesforce: Synced (5m ago)
              </div>
              <div className="integration-badge">
                <span className="w-5 h-5 flex items-center justify-center bg-emerald-100 text-emerald-700 rounded text-[10px] font-bold">H</span>
                HubSpot: Active
              </div>
            </div>

            <div className="border-t border-slate-100 pt-5">
              <div className="text-sm font-semibold mb-3">Upcoming Schedules</div>
              <div className="border-l-2 border-blue-600 pl-3">
                <div className="text-xs font-bold">Enterprise Outreach</div>
                <div className="text-[10px] text-slate-500 mt-0.5">April 18, 2026 at 10:00 AM</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

