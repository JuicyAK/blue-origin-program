import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ComposedChart, Area, Line } from 'recharts';

export default function BlueOriginProgram() {
  const [activeTab, setActiveTab] = useState('gap');
  const [boosters, setBooters] = useState(3);
  const [turnaroundDays, setTurnaroundDays] = useState(21);

  const currentCapacity = boosters * (365 / turnaroundDays);
  const launchesPerBooster = Math.round(365 / turnaroundDays);
  
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
      phase: 'Phase 1: Assess & Plan',
      days: '1-30',
      actions: [
        { action: 'Establish booster refurbishment baseline', owner: 'Manufacturing Lead', status: 'Define metrics' },
        { action: 'Map critical path dependencies', owner: 'Program Manager', status: 'Identify bottlenecks' },
        { action: 'Inventory current booster fleet status', owner: 'Operations', status: 'Count operational' },
        { action: 'Stakeholder interviews (Amazon, FAA)', owner: 'Program Manager', status: 'Align on deadlines' }
      ],
      color: '#0066CC'
    },
    {
      phase: 'Phase 2: Pilot & Build',
      days: '30-60',
      actions: [
        { action: 'Launch refurbishment optimization pilot', owner: 'Manufacturing', status: 'Test parallel inspection' },
        { action: 'Secure supply chain commitments', owner: 'Procurement', status: 'Pre-position spares' },
        { action: 'Design booster production schedule', owner: 'Program Manager', status: 'Timeline for builds' },
        { action: 'Establish launch readiness dashboard', owner: 'Program Manager', status: 'Real-time tracking' }
      ],
      color: '#0052A3'
    },
    {
      phase: 'Phase 3: Scale & Handoff',
      days: '60-100',
      actions: [
        { action: 'Scale refurbishment process improvements', owner: 'Manufacturing', status: 'Roll out to all' },
        { action: 'Commission booster #2', owner: 'Engineering', status: 'First launch' },
        { action: 'Implement SLA tracking vs. Amazon targets', owner: 'Program Manager', status: 'Weekly reviews' },
        { action: 'Transition to operations', owner: 'Program Manager', status: 'Hand off' }
      ],
      color: '#003D7A'
    }
  ];

  return (
    <div style={{ backgroundColor: '#0a0e27', color: '#ffffff', minHeight: '100vh', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      <div style={{ background: 'linear-gradient(135deg, #0066CC 0%, #003D7A 100%)', padding: '2rem', textAlign: 'center', borderBottom: '2px solid #FFB81C' }}>
        <h1 style={{ margin: '0 0 0.5rem', fontSize: '2.5rem', fontWeight: 600 }}>Project Kuiper Launch Cadence Program</h1>
        <p style={{ margin: 0, fontSize: '1rem', opacity: 0.9 }}>Blue Origin Booster Refurbishment & Production Optimization</p>
      </div>

      <div style={{ display: 'flex', gap: 0, backgroundColor: '#1a1f3a', borderBottom: '1px solid #0066CC', padding: '0 2rem' }}>
        {[
          { id: 'gap', label: '1. The Gap Analysis' },
          { id: 'roadmap', label: '2. Program Roadmap' },
          { id: 'days', label: '3. 100-Day Plan' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: '1rem 1.5rem',
              border: 'none',
              backgroundColor: activeTab === tab.id ? '#0066CC' : 'transparent',
              color: '#ffffff',
              fontSize: '1rem',
              fontWeight: 500,
              cursor: 'pointer',
              borderBottom: activeTab === tab.id ? '3px solid #FFB81C' : '3px solid transparent',
              transition: 'all 0.3s'
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div style={{ padding: '2rem', maxWidth: '1400px', margin: '0 auto' }}>
        
        {activeTab === 'gap' && (
          <div>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', color: '#FFB81C' }}>The Gap: Amazon's Need vs. Blue Origin's Capacity</h2>
            <p style={{ fontSize: '0.95rem', opacity: 0.8, marginBottom: '2rem' }}>Interactive scenario: adjust boosters and turnaround time to see capacity impact</p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
              <div style={{ backgroundColor: '#1a1f3a', padding: '1.5rem', borderRadius: '8px', border: '1px solid #0066CC' }}>
                <h3 style={{ marginTop: 0, color: '#FFB81C' }}>Scenario Controls</h3>
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                    Number of Operational Boosters: <strong>{boosters}</strong>
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    value={boosters}
                    onChange={(e) => setBooters(parseInt(e.target.value))}
                    style={{ width: '100%', height: '6px', borderRadius: '3px' }}
                  />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                    Booster Turnaround Time: <strong>{turnaroundDays} days</strong>
                  </label>
                  <input
                    type="range"
                    min="21"
                    max="150"
                    step="7"
                    value={turnaroundDays}
                    onChange={(e) => setTurnaroundDays(parseInt(e.target.value))}
                    style={{ width: '100%', height: '6px', borderRadius: '3px' }}
                  />
                </div>

                <div style={{ backgroundColor: '#0a0e27', padding: '1rem', borderRadius: '6px', borderLeft: '3px solid #FFB81C' }}>
                  <div style={{ fontSize: '0.85rem', opacity: 0.8, marginBottom: '0.5rem' }}>Launches per Booster per Year</div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 600, color: '#FFB81C' }}>{launchesPerBooster}</div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateRows: 'repeat(3, 1fr)', gap: '1rem' }}>
                <div style={{ backgroundColor: '#1a1f3a', padding: '1rem', borderRadius: '8px', border: '1px solid #0066CC' }}>
                  <div style={{ fontSize: '0.85rem', opacity: 0.8, marginBottom: '0.5rem' }}>Current Total Capacity</div>
                  <div style={{ fontSize: '2rem', fontWeight: 600, color: currentCapacity >= 216 ? '#00CC44' : '#FF6B35' }}>
                    {Math.round(currentCapacity)} launches/year
                  </div>
                </div>

                <div style={{ backgroundColor: '#1a1f3a', padding: '1rem', borderRadius: '8px', border: '1px solid #FFB81C' }}>
                  <div style={{ fontSize: '0.85rem', opacity: 0.8, marginBottom: '0.5rem' }}>Amazon Requirement</div>
                  <div style={{ fontSize: '2rem', fontWeight: 600, color: '#FFB81C' }}>216 launches</div>
                </div>

                <div style={{ backgroundColor: Math.round(currentCapacity) >= 216 ? 'rgba(0, 204, 68, 0.1)' : 'rgba(255, 107, 53, 0.1)', padding: '1rem', borderRadius: '8px', border: `1px solid ${Math.round(currentCapacity) >= 216 ? '#00CC44' : '#FF6B35'}` }}>
                  <div style={{ fontSize: '0.85rem', opacity: 0.8, marginBottom: '0.5rem' }}>Gap</div>
                  <div style={{ fontSize: '2rem', fontWeight: 600, color: Math.round(currentCapacity) >= 216 ? '#00CC44' : '#FF6B35' }}>
                    {Math.max(0, 216 - Math.round(currentCapacity))} launches
                  </div>
                </div>
              </div>
            </div>

            <div style={{ backgroundColor: '#1a1f3a', padding: '1.5rem', borderRadius: '8px', border: '1px solid #0066CC', marginBottom: '2rem' }}>
              <h3 style={{ marginTop: 0, color: '#FFB81C' }}>Capacity Scenarios @ 21-Day Turnaround</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={capacityScenarios}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#0066CC" />
                  <XAxis dataKey="boosters" stroke="#ffffff" />
                  <YAxis stroke="#ffffff" />
                  <Tooltip contentStyle={{ backgroundColor: '#0a0e27', border: '1px solid #0066CC', borderRadius: '4px' }} />
                  <Bar dataKey="launches" fill="#FFB81C" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {activeTab === 'roadmap' && (
          <div>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', color: '#FFB81C' }}>24-Month Program Roadmap</h2>
            <p style={{ fontSize: '0.95rem', opacity: 0.8, marginBottom: '2rem' }}>Parallel streams: refurbish existing boosters + build new fleet</p>

            <div style={{ backgroundColor: '#1a1f3a', padding: '1.5rem', borderRadius: '8px', border: '1px solid #0066CC', marginBottom: '2rem' }}>
              <h3 style={{ marginTop: 0, color: '#FFB81C' }}>Cumulative Launch Capacity Over Time</h3>
              <ResponsiveContainer width="100%" height={400}>
                <ComposedChart data={roadmapData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#0066CC" />
                  <XAxis dataKey="month" stroke="#ffffff" />
                  <YAxis stroke="#ffffff" />
                  <Tooltip contentStyle={{ backgroundColor: '#0a0e27', border: '1px solid #0066CC', borderRadius: '4px' }} />
                  <Legend />
                  <Area type="monotone" dataKey="cumulativeLaunches" fill="#0066CC" stroke="#FFB81C" strokeWidth={3} name="Actual Capacity" />
                  <Line type="monotone" dataKey="targetLaunches" stroke="#00CC44" strokeWidth={2} strokeDasharray="5 5" name="Target" />
                </ComposedChart>
              </ResponsiveContainer>
            </div>

            <div style={{ backgroundColor: '#1a1f3a', padding: '1.5rem', borderRadius: '8px', border: '1px solid #0066CC' }}>
              <h3 style={{ marginTop: 0, color: '#FFB81C' }}>Key Milestones</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                {[
                  { phase: 'Month 6', milestone: '50 Launches', color: '#0066CC' },
                  { phase: 'Month 12', milestone: '100 Launches', color: '#00CC44' },
                  { phase: 'Month 24', milestone: '216 Launches', color: '#FFB81C' }
                ].map((item, idx) => (
                  <div key={idx} style={{ backgroundColor: '#0a0e27', padding: '1rem', borderRadius: '6px', borderLeft: `3px solid ${item.color}` }}>
                    <div style={{ fontSize: '0.85rem', opacity: 0.8, marginBottom: '0.5rem' }}>{item.phase}</div>
                    <div style={{ fontSize: '1.3rem', fontWeight: 600, color: item.color }}>{item.milestone}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'days' && (
          <div>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', color: '#FFB81C' }}>100-Day Launch Plan</h2>
            <p style={{ fontSize: '0.95rem', opacity: 0.8, marginBottom: '2rem' }}>First 100 days: establish baseline, pilot, scale</p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
              {daysPlan.map((phase, phaseIdx) => (
                <div key={phaseIdx} style={{ backgroundColor: '#1a1f3a', padding: '1.5rem', borderRadius: '8px', border: `1px solid ${phase.color}` }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <div>
                      <h3 style={{ margin: 0, color: phase.color, fontSize: '1.3rem' }}>{phase.phase}</h3>
                      <div style={{ fontSize: '0.9rem', opacity: 0.7, marginTop: '0.3rem' }}>Days {phase.days}</div>
                    </div>
                    <div style={{ fontSize: '2.5rem', fontWeight: 600, color: phase.color, opacity: 0.3 }}>
                      {phaseIdx + 1}
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.8rem' }}>
                    {phase.actions.map((item, actionIdx) => (
                      <div key={actionIdx} style={{ backgroundColor: '#0a0e27', padding: '1rem', borderRadius: '6px', borderLeft: `3px solid ${phase.color}` }}>
                        <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#ffffff', marginBottom: '0.5rem' }}>
                          {actionIdx + 1}. {item.action}
                        </div>
                        <div style={{ fontSize: '0.85rem', opacity: 0.7, marginBottom: '0.3rem' }}>
                          <strong>Owner:</strong> {item.owner}
                        </div>
                        <div style={{ fontSize: '0.85rem', opacity: 0.6, color: phase.color }}>
                          {item.status}
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

      <div style={{ backgroundColor: '#1a1f3a', padding: '2rem', textAlign: 'center', borderTop: '1px solid #0066CC', marginTop: '2rem' }}>
        <p style={{ margin: 0, fontSize: '0.9rem', opacity: 0.7 }}>
          Blue Origin Program Management | Data-Driven Operations
        </p>
      </div>
    </div>
  );
}
