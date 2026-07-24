import AuditHeader from "./AuditHeader";
import AuditReportCard from "./AuditReportCard";
import AuditMetrics from "./AuditMetrics";
import ScorecardSlider from "./ScorecardSlider";
import PresenceGrid from "./PresenceGrid";

export default function AuditPage() {
  return (
    <div className="bg-white min-h-screen">
      <AuditHeader />
      
      <main className="max-w-7xl mx-auto px-6">
        {/* Row 1 */}
        <AuditReportCard 
          title="100% Simpliance compliance - 2024"
          subtitle="DSP 1.0 Periodic compliance-Mar 2024"
          image="./audit1.png"
        />

        {/* New Metrics Row */}
        <AuditMetrics />
        
        {/* Row 2 (Reverse) */}
        <AuditReportCard 
          reverse
          title="Performance Summary"
          subtitle="Overall Quality & Safety Review"
          image="./audit2.png"
        />

        {/* Dark Mode Scorecard Section */}
        <ScorecardSlider />

        {/* Business Presence Section */}
        <PresenceGrid />
      </main>
    </div>
  );
}