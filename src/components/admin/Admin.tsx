import { Loader2 } from 'lucide-react';
import { useAuth } from '../../lib/auth';
import AdminLogin from './AdminLogin';
import AdminDashboard from './AdminDashboard';

interface Props {
  onExit: () => void;
}

const Admin = ({ onExit }: Props) => {
  const { loading, isAdmin } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-ink-900 flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-primary-light animate-spin" />
      </div>
    );
  }

  return isAdmin ? (
    <AdminDashboard onLogout={onExit} onBack={onExit} />
  ) : (
    <AdminLogin onSuccess={onExit} onBack={onExit} />
  );
};

export default Admin;
