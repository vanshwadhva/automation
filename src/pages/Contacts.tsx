import React, { useState } from 'react';
import { Plus, Users, Search, Download, Trash2, Mail, ExternalLink, Filter } from 'lucide-react';
import Papa from 'papaparse';

export default function Contacts() {
  const [lists, setLists] = useState([
    { id: '1', name: 'Leads - Tech Founders', count: 1240, createdAt: '2024-03-24' },
    { id: '2', name: 'Seed Investors Q1', count: 85, createdAt: '2024-03-20' },
    { id: '3', name: 'Product Feedback Group', count: 242, createdAt: '2024-03-15' },
  ]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      Papa.parse(file, {
        header: true,
        complete: (results) => {
          console.log('Parsed CSV:', results.data);
          // In a real app, this would be uploaded to Firestore
          const newList = {
            id: Date.now().toString(),
            name: file.name.replace('.csv', ''),
            count: results.data.length,
            createdAt: new Date().toISOString().split('T')[0]
          };
          setLists([newList, ...lists]);
        }
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-1">Contacts</h1>
          <p className="text-gray-500 italic serif">The fuel for your outreach engine.</p>
        </div>
        <div className="flex gap-4">
          <label className="bg-white border border-gray-200 text-gray-700 px-5 py-2.5 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-50 transition-all cursor-pointer">
            <Download size={20} className="rotate-180" />
            Import CSV
            <input type="file" className="hidden" accept=".csv" onChange={handleFileUpload} />
          </label>
          <button className="bg-[#111827] text-white px-5 py-2.5 rounded-full font-semibold flex items-center gap-2 hover:bg-black transition-all shadow-lg">
            <Plus size={20} />
            Create List
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="p-4 border-b border-gray-50 flex items-center justify-between bg-gray-50/50">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                <input 
                  type="text" 
                  placeholder="Search lead lists..." 
                  className="pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 w-64"
                />
              </div>
              <div className="flex gap-2">
                <button className="p-2 text-gray-400 hover:text-gray-900"><Filter size={18} /></button>
              </div>
            </div>

            <div className="data-grid">
              <div className="data-row grid-cols-[1fr_100px_140px_100px] bg-gray-50/50 py-3">
                <span className="col-header uppercase">List Name</span>
                <span className="col-header uppercase">Size</span>
                <span className="col-header uppercase">Created</span>
                <span className="col-header uppercase text-right">Actions</span>
              </div>
              {lists.map((list) => (
                <div key={list.id} className="data-row grid-cols-[1fr_100px_140px_100px] items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                      <Users size={20} />
                    </div>
                    <span className="font-bold text-gray-900">{list.name}</span>
                  </div>
                  <span className="text-sm font-mono text-gray-500">{list.count.toLocaleString()}</span>
                  <span className="text-sm text-gray-400 font-medium">{list.createdAt}</span>
                  <div className="flex justify-end gap-1">
                    <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors" title="View"><ExternalLink size={16} /></button>
                    <button className="p-2 text-gray-400 hover:text-red-500 transition-colors" title="Delete"><Trash2 size={16} /></button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gray-900 p-8 rounded-3xl text-white shadow-xl relative overflow-hidden">
            <Mail className="absolute -right-4 -bottom-4 text-white/5 w-32 h-32" />
            <h3 className="text-xl font-bold mb-4">Sync CRM Data</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Seamlessly connect Hubspot, Salesforce, or Pipedrive to sync your leads directly into SendSync.
            </p>
            <button className="w-full bg-white/10 hover:bg-white/20 text-white font-bold py-3 rounded-2xl transition-all border border-white/5">
              Explore Integrations
            </button>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-bold mb-6">Import Guidelines</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <div className="w-5 h-5 bg-blue-50 text-blue-600 rounded flex-shrink-0 flex items-center justify-center text-[10px] font-bold">1</div>
                <p className="text-gray-600">CSV file must include a <span className="font-bold text-gray-900 underline">email</span> header.</p>
              </li>
              <li className="flex gap-3">
                <div className="w-5 h-5 bg-blue-50 text-blue-600 rounded flex-shrink-0 flex items-center justify-center text-[10px] font-bold">2</div>
                <p className="text-gray-600">Variables like <span className="font-mono text-blue-600">first_name</span> are auto-mapped.</p>
              </li>
              <li className="flex gap-3">
                <div className="w-5 h-5 bg-blue-50 text-blue-600 rounded flex-shrink-0 flex items-center justify-center text-[10px] font-bold">3</div>
                <p className="text-gray-600">Max file size for MVP is <span className="font-bold text-gray-900">10MB</span>.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
