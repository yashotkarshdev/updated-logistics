import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTeams } from "../../features/team/teamThunk";
import TeamSection from "./TeamSection";
import { Loader2, Users } from "lucide-react";

export default function TeamMain() {
  const dispatch = useDispatch();
  const { teams, loading, error } = useSelector((state) => state.team);

  useEffect(() => {
    dispatch(getTeams());
  }, [dispatch]);

  // Grouping logic: Convert flat array into Category-based structure
  const groupedTeams = useMemo(() => {
    if (!teams || !Array.isArray(teams)) return [];

    const groups = teams.reduce((acc, member) => {
      // Accessing category name from the nested object
      const categoryName = member.category?.name || "Other";
      
      if (!acc[categoryName]) {
        acc[categoryName] = {
          name: categoryName,
          members: []
        };
      }
      acc[categoryName].members.push(member);
      return acc;
    }, {});

    return Object.values(groups);
  }, [teams]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-950">
        <Loader2 className="w-10 h-10 text-orange-500 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 p-6 lg:p-10 space-y-24">
      <div className="relative max-w-2xl mx-auto text-center">
        <h1 className="text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          Our <span className="text-orange-500">Logistics</span> Team
        </h1>
        <div className="mt-4 h-1.5 w-24 bg-orange-500 mx-auto rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto space-y-20">
        {groupedTeams.length > 0 ? (
          groupedTeams.map((group, index) => (
            // Pass the grouped object { name: "Developer", members: [...] }
            <TeamSection key={index} category={group} />
          ))
        ) : (
          <div className="text-center py-20 text-slate-400">
            <Users size={48} className="mx-auto mb-4 opacity-10" />
            <p className="font-bold uppercase tracking-widest text-xs">No Team Members Found</p>
          </div>
        )}
      </div>
    </div>
  );
}