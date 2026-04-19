import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, Send, CheckCircle2, Layout, Type, Users, Sparkles, Clock, Zap } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const steps = [
  { id: 'setup', title: 'Mission Setup', icon: Layout },
  { id: 'content', title: 'Content Editor', icon: Type },
  { id: 'review', title: 'Review & Launch', icon: Send },
];

export default function CampaignEditor() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    templateId: '',
    listId: '',
    subject: '',
    body: '',
    scheduled: false,
    abTest: false
  });
  const navigate = useNavigate();

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, steps.length - 1));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 0));

  return (
    <div className="max-w-5xl mx-auto px-6">
      <div className="flex items-center justify-between mb-12">
        <Link to="/campaigns" className="p-2 -ml-2 text-gray-400 hover:text-gray-900 transition-colors flex items-center gap-2 text-sm font-medium">
          <ArrowLeft size={16} />
          Back to Missions
        </Link>
        <div className="flex items-center gap-8">
          {steps.map((step, i) => (
            <div key={step.id} className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                i <= currentStep ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'bg-gray-100 text-gray-400'
              }`}>
                {i < currentStep ? <CheckCircle2 size={16} /> : i + 1}
              </div>
              <span className={`text-sm font-semibold tracking-tight ${i <= currentStep ? 'text-gray-900' : 'text-gray-400'}`}>
                {step.title}
              </span>
              {i < steps.length - 1 && <div className="w-8 h-px bg-gray-200 ml-2" />}
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden"
        >
          {currentStep === 0 && (
            <div className="p-12">
              <h2 className="text-2xl font-bold mb-8">Define your objective</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 italic serif">Mission Name</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Q2 Investor Outreach" 
                    className="w-full px-5 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-500/20 text-lg font-medium"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 italic serif">Target Contact List</label>
                    <select className="w-full px-5 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-500/20 appearance-none">
                      <option>Select a list...</option>
                      <option>Investors - Seed Round</option>
                      <option>Tech Leads - LinkedIn Scrap</option>
                    </select>
                  </div>
                  <div className="flex flex-col justify-end">
                    <div className="bg-blue-50 p-4 rounded-2xl flex items-center gap-3">
                      <Users className="text-blue-600" size={20} />
                      <span className="text-sm font-semibold text-blue-900">142 total contacts in selection</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentStep === 1 && (
            <div className="p-12">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold">Craft your message</h2>
                <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-4 py-2 rounded-full hover:bg-blue-100 transition-colors">
                  <Sparkles size={14} />
                  AI Writing Assistant
                </button>
              </div>
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 italic serif">Subject Line</label>
                  <input 
                    type="text" 
                    placeholder="Re: Quick question about SVASHASAN LABS" 
                    className="w-full px-5 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-500/20 text-lg font-medium"
                    value={formData.subject}
                    onChange={e => setFormData({...formData, subject: e.target.value})}
                  />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 italic serif">Message Body</label>
                    <div className="flex gap-2">
                      {['first_name', 'company', 'position'].map(v => (
                        <button key={v} className="text-[10px] font-mono bg-gray-100 px-2 py-1 rounded text-gray-500 hover:bg-gray-200 transition-colors">
                          &#123;&#123;{v}&#125;&#125;
                        </button>
                      ))}
                    </div>
                  </div>
                  <textarea 
                    rows={12}
                    className="w-full px-5 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-500/20 font-sans leading-relaxed"
                    placeholder="Hi {{first_name}}, I saw what you're doing at {{company}} and..."
                    value={formData.body}
                    onChange={e => setFormData({...formData, body: e.target.value})}
                  />
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="p-12">
              <h2 className="text-2xl font-bold mb-8">Final pre-flight check</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div className="p-6 bg-emerald-50 rounded-3xl border border-emerald-100">
                    <h4 className="text-emerald-900 font-bold mb-2 flex items-center gap-2">
                      <CheckCircle2 size={18} />
                      Ready for Takeoff
                    </h4>
                    <ul className="text-sm text-emerald-800 space-y-2 opacity-80">
                      <li>• 142 valid email addresses detected</li>
                      <li>• Dynamic variables correctly mapped</li>
                      <li>• Unsubscribe link included</li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                      <div className="flex items-center gap-3">
                        <Clock size={20} className="text-gray-400" />
                        <span className="font-semibold text-gray-700">Schedule mission?</span>
                      </div>
                      <input type="checkbox" className="w-5 h-5 accent-blue-600" />
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                      <div className="flex items-center gap-3">
                        <Zap size={20} className="text-gray-400" />
                        <span className="font-semibold text-gray-700">Enable A/B Testing?</span>
                      </div>
                      <input type="checkbox" className="w-5 h-5 accent-blue-600" />
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900 p-8 rounded-3xl text-white shadow-2xl">
                  <h4 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-6 italic serif">Preview Rendering</h4>
                  <div className="space-y-4">
                    <div className="border-b border-gray-800 pb-4">
                      <span className="text-gray-500 text-xs">Subject:</span>
                      <p className="font-semibold mt-1">Re: Quick question about SVASHASAN LABS</p>
                    </div>
                    <div className="text-sm leading-relaxed text-gray-300">
                      Hi <span className="text-blue-400 font-mono">John</span>,<br /><br />
                      I saw what you're doing at <span className="text-blue-400 font-mono">Tesla</span> and was impressed by your recent growth...
                    </div>
                  </div>
                  <div className="mt-8 pt-6 border-t border-gray-800 flex items-center gap-3">
                    <img src="https://picsum.photos/seed/sender/100" className="w-10 h-10 rounded-full" referrerPolicy="no-referrer" />
                    <div>
                      <p className="text-xs font-bold">Vansh Wadhwa</p>
                      <p className="text-[10px] text-gray-500">vanshwadhvayt@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="p-6 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
            <button 
              onClick={prevStep}
              className={`flex items-center gap-2 px-6 py-3 font-bold text-gray-500 hover:text-gray-900 transition-colors ${currentStep === 0 ? 'invisible' : ''}`}
            >
              <ArrowLeft size={18} />
              Previous Phase
            </button>
            
            {currentStep < steps.length - 1 ? (
              <button 
                onClick={nextStep}
                className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg flex items-center gap-2"
              >
                Continue Mission
                <ArrowRight size={18} />
              </button>
            ) : (
              <button 
                onClick={() => navigate('/campaigns')}
                className="bg-emerald-600 text-white px-10 py-3 rounded-xl font-bold hover:bg-emerald-700 transition-all shadow-lg flex items-center gap-2"
              >
                Launch Campaign
                <Send size={18} />
              </button>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
