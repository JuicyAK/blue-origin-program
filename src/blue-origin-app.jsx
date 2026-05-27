import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ComposedChart, Area, Line } from 'recharts';

export default function BlueOriginProgram() {
  const [activeTab, setActiveTab] = useState('gap');
  const [boosters, setBooters] = useState(3);
  const [turnaroundDays, setTurnaroundDays] = useState(21);

  const currentCapacity = boosters * (365 / turnaroundDays);
  
  const capacityScenarios = [
    { boosters: 1, turnaround: 21, launches: Math.round(365/21) },
    { boosters: 2, turnaround: 21, launches: Math.round(2 * (365/21)) },
    { boosters: 3, turnaround: 21, launches: Math.round(3 * (365/21)) },
    { boosters: 4, turnaround: 21, launches: Math.round(4 * (365/21)) },
  ];

  const roadmapData = [
    { month: 'M1-3', booster1Refurb: 45, booster2Build: 0, booster3Build: 0, cumulativeLaunches: 12, targetLaunches: 20 },
    { month: 'M4-6', booster1Refurb: 40, booster2Build: 30, booster3Build: 0, cumulativeLaunches: 35, targetLaunches: 50 },
    { month: 'M7-9', booster1Refurb: 35, booster2Build: 40, booster3Build: 20, cumulativeLaunches: 65, targetLaunches: 75 },
    { month: 'M10-12', booster1Refurb: 30, booster2Build: 40, booster3Build: 40, cumulativeLaunches: 110, targetLaunches: 100 },
    { month: 'M13-15', booster1Refurb: 25, booster2Build: 40, booster3Build: 40, cumulativeLaunches: 165, targetLaunches: 150 },
    { month: 'M16-18', booster1Refurb: 21, booster2Build: 35, booster3Build: 40, cumulativeLaunches: 215, targetLaunches: 200 },
    { month: 'M19-24', booster1Refurb: 21, booster2Build: 21, booster3Build: 21, cumulativeLaunches: 276, targetLaunches: 216 }
  ];

  const daysPlan = [
    {
      phase: 'Assess & Plan',
      days: '1-30',
      actions: [
        { action: 'Establish booster refurbishment baseline', owner: 'Manufacturing' },
        { action: 'Map critical path dependencies', owner: 'Program Manager' },
        { action: 'Inventory booster fleet status', owner: 'Operations' },
        { action: 'Stakeholder alignment', owner: 'Program Manager' }
      ],
      color: '#0066CC'
    },
    {
      phase: 'Pilot & Build',
      days: '30-60',
      actions: [
        { action: 'Launch refurbishment optimization pilot', owner: 'Manufacturing' },
        { action: 'Secure supply chain commitments', owner: 'Procurement' },
        { action: 'Design booster production schedule', owner: 'Program Manager' },
        { action: 'Establish launch readiness dashboard', owner: 'Program Manager' }
      ],
      color: '#0052A3'
    },
    {
      phase: 'Scale & Handoff',
      days: '60-100',
      actions: [
        { action: 'Scale process improvements', owner: 'Manufacturing' },
        { action: 'Commission booster #2', owner: 'Engineering' },
        { action: 'Implement SLA tracking', owner: 'Program Manager' },
        { action: 'Transition to operations', owner: 'Program Manager' }
      ],
      color: '#003D7A'
    }
  ];

  return (
    <div style={{ backgroundColor: '#ffffff', color: '#1a1a1a', minHeight: '100vh', fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", lineHeight: '1.6' }}>
      {/* Header */}
      <div style={{ background: '#ffffff', padding: '2rem 4rem', borderBottom: '1px solid #e0e0e0', position: 'sticky', top: 0, zIndex: 100 }}>
        <h1 style={{ margin: '0 0 0.5rem', fontSize: '1.4rem', fontWeight: 400, letterSpacing: '0.5px' }}>Project Kuiper</h1>
        <p style={{ margin: 0, fontSize: '0.85rem', opacity: 0.6, fontWeight: 300, letterSpacing: '0.3px' }}>Launch Cadence Optimization</p>
      </div>

      {/* Tab Navigation */}
      <div style={{ display: 'flex', gap: 0, backgroundColor: '#ffffff', borderBottom: '1px solid #e0e0e0', padding: '0 4rem' }}>
        {[
          { id: 'gap', label: 'Gap Analysis' },
          { id: 'roadmap', label: 'Program Roadmap' },
          { id: 'days', label: '100-Day Plan' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: '1.5rem 2rem',
              border: 'none',
              backgroundColor: 'transparent',
              color: activeTab === tab.id ? '#0066CC' : '#666',
              fontSize: '0.95rem',
              fontWeight: activeTab === tab.id ? 500 : 400,
              cursor: 'pointer',
              borderBottom: activeTab === tab.id ? '2px solid #0066CC' : '2px solid transparent',
              transition: 'all 0.2s',
              letterSpacing: '0.3px'
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div style={{ padding: '4rem', maxWidth: '1400px', margin: '0 auto' }}>
        
        {activeTab === 'gap' && (
          <div>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', color: '#1a1a1a', fontWeight: 300, letterSpacing: '0.5px' }}>The Capacity Gap</h2>
            <p style={{ fontSize: '0.95rem', opacity: 0.7, marginBottom: '3rem', fontWeight: 300 }}>Amazon requires 216 annual launches. Blue Origin's current capacity falls short. Adjust parameters to explore solutions.</p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', marginBottom: '3rem' }}>
              
              <div style={{ backgroundColor: '#f9f9f9', padding: '2rem', borderRadius: '2px', border: '1px solid #e0e0e0' }}>
                <h3 style={{ marginTop: 0, color: '#1a1a1a', fontSize: '0.95rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '2rem' }}>Scenario Builder</h3>
                
                <div style={{ marginBottom: '2rem' }}>
                  <label style={{ display: 'block', marginBottom: '1rem', fontSize: '0.85rem', fontWeight: 500, opacity: 0.8 }}>
                    Operational Boosters: <strong style={{ fontSize: '1.2rem', opacity: 1 }}>{boosters}</strong>
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    value={boosters}
                    onChange={(e) => setBooters(parseInt(e.target.value))}
                    style={{ width: '100%', height: '3px', borderRadius: '2px', backgroundColor: '#e0e0e0', cursor: 'pointer' }}
                  />
                  <div style={{ fontSize: '0.75rem', opacity: 0.6, marginTop: '0.5rem' }}>Range: 1–5 boosters</div>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <label style={{ display: 'block', marginBottom: '1rem', fontSize: '0.85rem', fontWeight: 500, opacity: 0.8 }}>
                    Turnaround Time: <strong style={{ fontSize: '1.2rem', opacity: 1 }}>{turnaroundDays}d</strong>
                  </label>
                  <input
                    type="range"
                    min="21"
                    max="150"
                    step="7"
                    value={turnaroundDays}
                    onChange={(e) => setTurnaroundDays(parseInt(e.target.value))}
                    style={{ width: '100%', height: '3px', borderRadius: '2px', backgroundColor: '#e0e0e0', cursor: 'pointer' }}
                  />
                  <div style={{ fontSize: '0.75rem', opacity: 0.6, marginTop: '0.5rem' }}>Target: 21 days | Current: 150 days</div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateRows: 'repeat(3, 1fr)', gap: '1.5rem' }}>
                <div style={{ backgroundColor: '#f9f9f9', padding: '2rem', borderRadius: '2px', border: '1px solid #e0e0e0' }}>
                  <div style={{ fontSize: '0.75rem', opacity: 0.6, marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.3px' }}>Current Capacity</div>
                  <div style={{ fontSize: '2rem', fontWeight: 300, color: currentCapacity >= 216 ? '#00AA44' : '#CC6633' }}>
                    {Math.round(currentCapacity)}
                  </div>
                  <div style={{ fontSize: '0.8rem', opacity: 0.6, marginTop: '0.5rem' }}>launches/year</div>
                </div>

                <div style={{ backgroundColor: '#f9f9f9', padding: '2rem', borderRadius: '2px', border: '1px solid #e0e0e0' }}>
                  <div style={{ fontSize: '0.75rem', opacity: 0.6, marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.3px' }}>Required</div>
                  <div style={{ fontSize: '2rem', fontWeight: 300, color: '#0066CC' }}>216</div>
                  <div style={{ fontSize: '0.8rem', opacity: 0.6, marginTop: '0.5rem' }}>launches/year</div>
                </div>

                <div style={{ backgroundColor: Math.round(currentCapacity) >= 216 ? 'rgba(0, 170, 68, 0.05)' : 'rgba(204, 102, 51, 0.05)', padding: '2rem', borderRadius: '2px', border: `1px solid ${Math.round(currentCapacity) >= 216 ? '#e0e0e0' : '#e0e0e0'}` }}>
                  <div style={{ fontSize: '0.75rem', opacity: 0.6, marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.3px' }}>Gap</div>
                  <div style={{ fontSize: '2rem', fontWeight: 300, color: Math.round(currentCapacity) >= 216 ? '#00AA44' : '#CC6633' }}>
                    {Math.max(0, 216 - Math.round(currentCapacity))}
                  </div>
                  <div style={{ fontSize: '0.8rem', opacity: 0.6, marginTop: '0.5rem' }}>{Math.round(currentCapacity) >= 216 ? 'Target met' : 'Shortfall'}</div>
                </div>
              </div>
            </div>

            <div style={{ backgroundColor: '#f9f9f9', padding: '2rem', borderRadius: '2px', border: '1px solid #e0e0e0', marginBottom: '2rem' }}>
              <h3 style={{ marginTop: 0, color: '#1a1a1a', fontSize: '0.95rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '2rem' }}>Capacity by Booster Count (21-day turnaround)</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={capacityScenarios} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" vertical={false} />
                  <XAxis dataKey="boosters" stroke="#999" style={{ fontSize: '0.85rem' }} label={{ value: 'Number of Boosters', position: 'bottom', offset: 10, style: { fontSize: '0.8rem', opacity: 0.6 } }} />
                  <YAxis stroke="#999" style={{ fontSize: '0.85rem' }} label={{ value: 'Annual Launches', angle: -90, position: 'insideLeft', style: { fontSize: '0.8rem', opacity: 0.6 } }} />
                  <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #e0e0e0', borderRadius: '2px' }} />
                  <Bar dataKey="launches" fill="#0066CC" radius={[2, 2, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {activeTab === 'roadmap' && (
          <div>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', color: '#1a1a1a', fontWeight: 300, letterSpacing: '0.5px' }}>24-Month Roadmap</h2>
            <p style={{ fontSize: '0.95rem', opacity: 0.7, marginBottom: '3rem', fontWeight: 300 }}>Parallel execution: refurbish existing fleet while building new capacity.</p>

            <div style={{ backgroundColor: '#f9f9f9', padding: '2rem', borderRadius: '2px', border: '1px solid #e0e0e0', marginBottom: '2rem' }}>
              <h3 style={{ marginTop: 0, color: '#1a1a1a', fontSize: '0.95rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '2rem' }}>Cumulative Launch Capacity</h3>
              <ResponsiveContainer width="100%" height={400}>
                <ComposedChart data={roadmapData} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" vertical={false} />
                  <XAxis dataKey="month" stroke="#999" style={{ fontSize: '0.85rem' }} />
                  <YAxis stroke="#999" style={{ fontSize: '0.85rem' }} />
                  <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #e0e0e0', borderRadius: '2px' }} />
                  <Legend wrapperStyle={{ fontSize: '0.85rem' }} />
                  <Area type="monotone" dataKey="cumulativeLaunches" fill="#0066CC" stroke="#0066CC" strokeWidth={2} name="Actual Capacity" opacity={0.3} />
                  <Line type="monotone" dataKey="targetLaunches" stroke="#00AA44" strokeWidth={2} strokeDasharray="5 5" name="Target" />
                </ComposedChart>
              </ResponsiveContainer>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
              {[
                { month: 'Month 6', launches: '50', status: 'Gate Review' },
                { month: 'Month 12', launches: '100', status: 'Full Optimization' },
                { month: 'Month 24', launches: '216', status: 'Target Met' }
              ].map((item, idx) => (
                <div key={idx} style={{ backgroundColor: '#f9f9f9', padding: '2rem', borderRadius: '2px', border: '1px solid #e0e0e0' }}>
                  <div style={{ fontSize: '0.75rem', opacity: 0.6, textTransform: 'uppercase', letterSpacing: '0.3px', marginBottom: '0.5rem' }}>{item.month}</div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 300, color: '#0066CC', marginBottom: '0.5rem' }}>{item.launches}</div>
                  <div style={{ fontSize: '0.8rem', opacity: 0.6 }}>{item.status}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'days' && (
          <div>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', color: '#1a1a1a', fontWeight: 300, letterSpacing: '0.5px' }}>100-Day Execution Plan</h2>
            <p style={{ fontSize: '0.95rem', opacity: 0.7, marginBottom: '3rem', fontWeight: 300 }}>Three phases: assess, pilot, scale.</p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
              {daysPlan.map((phase, phaseIdx) => (
                <div key={phaseIdx} style={{ backgroundColor: '#f9f9f9', padding: '2rem', borderRadius: '2px', border: `1px solid #e0e0e0` }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                    <div>
                      <h3 style={{ margin: '0 0 0.5rem', color: '#1a1a1a', fontSize: '1.1rem', fontWeight: 400 }}>{phase.phase}</h3>
                      <div style={{ fontSize: '0.8rem', opacity: 0.6 }}>Days {phase.days}</div>
                    </div>
                    <div style={{ fontSize: '2.5rem', fontWeight: 300, color: phase.color, opacity: 0.2 }}>
                      {phaseIdx + 1}
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
                    {phase.actions.map((item, actionIdx) => (
                      <div key={actionIdx} style={{ paddingLeft: '1.5rem', borderLeft: `2px solid ${phase.color}`, opacity: 0.9 }}>
                        <div style={{ fontSize: '0.9rem', fontWeight: 500, color: '#1a1a1a', marginBottom: '0.3rem' }}>
                          {item.action}
                        </div>
                        <div style={{ fontSize: '0.8rem', opacity: 0.6 }}>
                          {item.owner}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div style={{ backgroundColor: '#f9f9f9', padding: '2rem 4rem', borderTop: '1px solid #e0e0e0', marginTop: '4rem', textAlign: 'center' }}>
        <p style={{ margin: 0, fontSize: '0.8rem', opacity: 0.6, letterSpacing: '0.3px' }}>
          Blue Origin Program Management | Data-Driven Analysis
        </p>
      </div>
    </div>
  );
}
