import React from 'react';
import { Github, Linkedin, Mail, Sparkles, Terminal, Code2 } from 'lucide-react';

export default function Team() {
  const members = [
    {
      name: "Co-Founder (You)",
      role: "Lead UI Developer & Product Designer",
      bio: "Fascinated by sleek micro-interactions and clean interfaces. Specializes in crafting React layouts, Tailwind animations, and front-end architectures.",
      avatarBg: "bg-indigo-600",
      icon: Code2,
      skills: [
        { name: "React / React Native", value: 95 },
        { name: "Tailwind CSS & Styling", value: 98 },
        { name: "UI/UX & Prototyping", value: 92 }
      ],
      socials: { github: "#", linkedin: "#", email: "mailto:you@hmi.digital" }
    },
    {
      name: "Co-Founder (Your Friend)",
      role: "Full-Stack Engineer & Cloud Architect",
      bio: "Obsessed with databases, high-speed API performance, and secure cloud clusters. Specializes in building core services, SQL/NoSQL setups, and scale deployments.",
      avatarBg: "bg-purple-600",
      icon: Terminal,
      skills: [
        { name: "NodeJS / API Design", value: 96 },
        { name: "Database & Security", value: 94 },
        { name: "Cloud Infra (AWS/Docker)", value: 90 }
      ],
      socials: { github: "#", linkedin: "#", email: "mailto:friend@hmi.digital" }
    }
  ];

  return (
    <section id="team" className="py-24 relative bg-white/20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Meet the <span className="text-gradient font-black">Co-Founders</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm md:text-base font-light">
            We are the engineers and designers behind HMI. Together, we manage your project from the initial wireframes to server launch.
          </p>
        </div>

        {/* Founders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto items-stretch">
          {members.map((member, idx) => {
            const MemberIcon = member.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200/50 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-left relative overflow-hidden"
              >
                {/* Visual glow indicator */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50/20 rounded-full blur-xl -z-0"></div>

                <div className="space-y-6 relative z-10">
                  {/* Portrait Avatar Placeholder using solid colors & initials */}
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 rounded-2xl ${member.avatarBg} flex items-center justify-center text-white shadow-md shadow-indigo-100`}>
                      <MemberIcon className="w-8 h-8 animate-pulse" style={{ animationDuration: '4s' }} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-800 tracking-tight">
                        {member.name}
                      </h3>
                      <span className="text-xs font-semibold text-indigo-600 block mt-0.5">
                        {member.role}
                      </span>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-slate-500 text-xs md:text-sm font-light leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Skills Section */}
                  <div className="space-y-3 pt-4 border-t border-slate-100/60">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                      Core Skill Levels
                    </span>
                    <div className="space-y-3">
                      {member.skills.map((skill, sIdx) => (
                        <div key={sIdx} className="space-y-1">
                          <div className="flex justify-between text-[11px] font-medium text-slate-700">
                            <span>{skill.name}</span>
                            <span className="font-mono">{skill.value}%</span>
                          </div>
                          {/* Visual progress bar */}
                          <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                            <div 
                              className={`h-full rounded-full ${member.avatarBg}`}
                              style={{ width: `${skill.value}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Social links Footer */}
                <div className="flex items-center justify-between pt-6 mt-8 border-t border-slate-100/60 relative z-10">
                  <div className="flex items-center gap-3">
                    <a 
                      href={member.socials.github} 
                      className="p-2 rounded-xl bg-slate-50 text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a 
                      href={member.socials.linkedin} 
                      className="p-2 rounded-xl bg-slate-50 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a 
                      href={member.socials.email} 
                      className="p-2 rounded-xl bg-slate-50 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-500 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-md">
                    <Sparkles className="w-3 h-3" />
                    <span>Active Developer</span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
