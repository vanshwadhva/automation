import { motion } from 'motion/react';
import { Mail, Zap, BarChart3, ShieldCheck } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Landing() {
  const { signInWithGoogle } = useAuth();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-7xl md:text-9xl brand-text leading-none mb-8 tracking-tighter">
              SEND<br /><span className="text-blue-600 italic">SYNC</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-12 font-medium">
              The professional mail merge engine built for high-stakes outreach. 
              Personalization at scale, delivered with precision.
            </p>
            <button
              onClick={signInWithGoogle}
              className="bg-[#111827] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-black transition-all flex items-center gap-3 mx-auto shadow-2xl hover:scale-105 active:scale-95"
            >
              Get Started for Free
              <Zap size={20} className="fill-current" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
              <Zap size={24} />
            </div>
            <h3 className="text-2xl font-bold tracking-tight">Campaign Engine</h3>
            <p className="text-gray-600 leading-relaxed">
              Power through thousands of personalized emails in seconds. Our engine handles rate limits and delivery optimization automatically.
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center">
              <BarChart3 size={24} />
            </div>
            <h3 className="text-2xl font-bold tracking-tight">Deep Analytics</h3>
            <p className="text-gray-600 leading-relaxed">
              Track opens, clicks, and bounce rates in real-time. Understand exactly how your audience is engaging with your messages.
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-2xl font-bold tracking-tight">Security First</h3>
            <p className="text-gray-600 leading-relaxed">
              Enterprise-grade encryption for your contact data and mailbox tokens. Your data never leaves our secure environment.
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof / Footer */}
      <footer className="py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Mail className="text-blue-600" />
            <span className="brand-text text-xl">SENDSYNC</span>
          </div>
          <p className="text-gray-400 text-sm italic serif">Trust the engine. Deliver the message.</p>
        </div>
      </footer>
    </div>
  );
}
