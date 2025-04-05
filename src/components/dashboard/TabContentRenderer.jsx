
import React from 'react';
import CaseStatusDashboard from '@/components/dashboard/CaseStatusDashboard';
import NotificationsPanel from '@/components/dashboard/NotificationsPanel';
import MatchesPanel from '@/components/dashboard/MatchesPanel';
import ReportMissingForm from '@/components/dashboard/ReportMissingForm';

const TabContentRenderer = ({ activeTab }) => {
  switch (activeTab) {
    case 'dashboard':
      return <CaseStatusDashboard />;
    case 'notifications':
      return <NotificationsPanel />;
    case 'matches':
      return <MatchesPanel />;
    case 'report':
      return <ReportMissingForm />;
    default:
      return <CaseStatusDashboard />;
  }
};

export default TabContentRenderer;
