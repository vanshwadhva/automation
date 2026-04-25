import { Link, useLocation } from 'react-router-dom';
import { Mail, LayoutDashboard, Users, FileText, Send, LogOut } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { cn } from '../../lib/utils';

export default function Navbar() {
  const { logout, user } = useAuth();
  const location = useLocation();

  const navItems = [
    { label: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
    { label: 'Campaigns', icon: Send, path: '/campaigns' },
    { label: 'Contacts', icon: Users, path: '/contacts' },
    { label: 'Templates', icon: FileText, path: '/templates' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-[#0f172a] z-50 px-6 border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link to="/dashboard" className="flex items-center gap-2 text-white">
            <span className="text-xl">◈</span>
            <span className="font-bold text-lg tracking-tight">MailFlow</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "px-4 py-1.5 rounded-md text-sm font-medium transition-all duration-200",
                  location.pathname.startsWith(item.path)
                    ? "bg-white/10 text-white"
                    : "text-[#94a3b8] hover:text-white"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden sm:flex items-center gap-3">
            <div className="security-banner text-[10px] text-slate-400 py-1 px-3 bg-white/5 border-white/10">
              <span className="text-emerald-500">🔒</span> OAuth 2.0 Secure
            </div>
          </div>
          <div className="flex items-center gap-3 border-l border-white/10 pl-6 h-8">
            <span className="text-xs text-slate-400 font-medium hidden md:inline">{user?.displayName}</span>
            <img 
              src={user?.photoURL || ''} 
              alt="Profile" 
              className="w-7 h-7 rounded-full ring-1 ring-white/20"
              referrerPolicy="no-referrer"
            />
            <button
              onClick={logout}
              className="p-1.5 text-[#94a3b8] hover:text-white transition-colors"
              title="Logout"
            >
              <LogOut size={16} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

