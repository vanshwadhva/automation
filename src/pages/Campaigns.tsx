import { Routes, Route, Link } from 'react-router-dom';
import { Plus, Send, Search, Filter, MoreVertical } from 'lucide-react';
import CampaignEditor from './CampaignEditor';

const CampaignList = () => (
  <div className="main-content">
    <div className="flex items-center justify-between mb-8">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">Campaigns</h1>
        <p className="text-sm text-slate-500">Manage and monitor your outreach missions.</p>
      </div>
      <Link 
        to="/campaigns/new" 
        className="btn btn-primary flex items-center gap-2"
      >
        <Plus size={18} />
        New Campaign
      </Link>
    </div>

    <div className="card">
      <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/30">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
          <input 
            type="text" 
            placeholder="Search campaigns..." 
            className="pl-9 pr-4 py-1.5 bg-white border border-slate-200 rounded-md text-xs focus:outline-none focus:ring-2 focus:ring-blue-500/10 w-64"
          />
        </div>
        <button className="flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-slate-900 px-3 py-1.5 border border-slate-200 rounded-md bg-white">
          <Filter size={14} />
          Filters
        </button>
      </div>

      <div className="overflow-auto">
        <table className="data-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Recipients</th>
              <th>Performance</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: 'Investor Update Q2', ab: false, status: 'Completed', count: 124, opens: '82%', date: '2 days ago' },
              { name: 'Cold Outreach - SaaS Founders', ab: true, status: 'Sending', count: 540, opens: '24%', date: 'Active' },
              { name: 'Product Feedback Loop', ab: false, status: 'Draft', count: 42, opens: '-', date: 'Draft' },
              { name: 'Newsletter #42', ab: false, status: 'Scheduled', count: 1205, opens: '-', date: 'April 20' },
            ].map((c, i) => (
              <tr key={i}>
                <td>
                  <div className="flex flex-col">
                    <span className="font-semibold text-slate-900">
                      {c.name} {c.ab && <span className="ab-badge ml-1">A/B</span>}
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium">{c.date}</span>
                  </div>
                </td>
                <td>
                  <span className={`status-pill ${
                    c.status === 'Completed' ? 'bg-emerald-50 text-emerald-600' :
                    c.status === 'Sending' ? 'status-sending' :
                    c.status === 'Draft' ? 'bg-slate-100 text-slate-500' : 'status-scheduled'
                  }`}>
                    {c.status}
                  </span>
                </td>
                <td className="font-medium text-slate-600">{c.count}</td>
                <td className="font-semibold text-emerald-600">{c.opens}</td>
                <td className="text-right">
                  <button className="p-1.5 text-slate-400 hover:text-slate-900 border border-transparent hover:border-slate-200 rounded">
                    <MoreVertical size={14} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);


export default function Campaigns() {
  return (
    <Routes>
      <Route path="/" element={<CampaignList />} />
      <Route path="/new" element={<CampaignEditor />} />
      <Route path="/:id" element={<CampaignEditor />} />
    </Routes>
  );
}
