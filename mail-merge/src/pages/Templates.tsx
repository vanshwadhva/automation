import React, { useState } from 'react';
import { Plus, FileText, Search, Copy, Edit3, Trash2, ArrowRight } from 'lucide-react';

export default function Templates() {
  const [templates, setTemplates] = useState([
    { id: '1', name: 'Cold Outreach - Generic', subject: 'Question regarding {{company}}', createdAt: '3 days ago' },
    { id: '2', name: 'Investor Update - Monthly', subject: 'SVASHASAN LABS // {{month}} Monthly Update', createdAt: '1 week ago' },
    { id: '3', name: 'Product Feedback', subject: 'Quick favor?', createdAt: '2 weeks ago' },
  ]);

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-1">Templates</h1>
          <p className="text-gray-500 italic serif">Craft once, send thousands of times.</p>
        </div>
        <button className="bg-[#111827] text-white px-5 py-2.5 rounded-full font-semibold flex items-center gap-2 hover:bg-black transition-all shadow-lg">
          <Plus size={20} />
          Create Template
        </button>
      </div>

      <div className="flex items-center gap-4 mb-8">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
          <input 
            type="text" 
            placeholder="Search templates..." 
            className="w-full pl-10 pr-4 py-3 bg-white border border-gray-100 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 shadow-sm"
          />
        </div>
        <div className="flex gap-2">
          {['Sales', 'Marketing', 'Investor Relations', 'Updates'].map(tag => (
            <button key={tag} className="px-4 py-2 bg-white border border-gray-100 rounded-full text-xs font-semibold text-gray-400 hover:text-gray-900 transition-colors shadow-sm">
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template) => (
          <div key={template.id} className="group bg-white rounded-3xl border border-gray-100 shadow-sm p-8 hover:shadow-xl transition-all flex flex-col h-full relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="flex gap-2">
                <button className="p-2 bg-gray-50 text-gray-400 hover:text-blue-600 rounded-lg transition-colors"><Edit3 size={16} /></button>
                <button className="p-2 bg-gray-50 text-gray-400 hover:text-red-500 rounded-lg transition-colors"><Trash2 size={16} /></button>
              </div>
            </div>

            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
              <FileText size={24} />
            </div>

            <h3 className="text-xl font-bold mb-2 pr-12">{template.name}</h3>
            <p className="text-sm font-mono text-gray-400 truncate mb-auto">{template.subject}</p>
            
            <div className="mt-8 pt-6 border-t border-gray-50 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-medium text-gray-400 italic serif">
                Last used {template.createdAt}
              </div>
              <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-600 hover:text-blue-700 transition-all group-hover:translate-x-1">
                Use Template
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        ))}

        {/* Create Card */}
        <button className="border-2 border-dashed border-gray-200 rounded-3xl p-8 flex flex-col items-center justify-center text-gray-400 hover:border-blue-300 hover:text-blue-400 transition-all min-h-[240px]">
          <div className="w-12 h-12 rounded-full border-2 border-dashed border-current flex items-center justify-center mb-4">
            <Plus size={24} />
          </div>
          <span className="font-bold">New Template</span>
          <span className="text-xs mt-1">Start from blank canvas</span>
        </button>
      </div>
    </div>
  );
}
