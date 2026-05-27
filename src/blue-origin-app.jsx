import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ComposedChart, Area, Line } from 'recharts';

export default function BlueOriginProgram() {
  const [activeTab, setActiveTab] = useState('gap');
  const [boosters, setBooters] = useState(3);
  const [turnaroundDays, setTurnaroundDays] = useState(21);

  const currentCapacity = boosters * (365 / turnaroundDays);
  
  const capacityScenarios = [
    { boosters: 1, launches: Math.round(365/21) },
    { boosters: 2, launches: Math.round(2 * (365/21)) },
    { boosters: 3, launches: Math.round(3 * (365/21)) },
    { boosters: 4, launches: Math.round(4 * (365/21)) },
  ];

  const roadmapData = [
    { month: 'M1-3', cum: 12, target: 20 },
    { month: 'M4-6', cum: 35, target: 50 },
    { month: 'M7-9', cum: 65, target: 75 },
    { month: 'M10-12', cum: 110, target: 100 },
    { month: 'M13-15', cum: 165, target: 150 },
    { month: 'M16-18', cum: 215, target: 200 },
    { month: 'M19-24', cum: 276, target: 216 }
  ];

  const daysPlan = [
    {
      phase: 'Assess',
      days: '1-30',
      items: ['Baseline metrics', 'Critical path', 'Fleet inventory', 'Stakeholder alignment']
    },
    {
      phase: 'Pilot',
      days: '30-60',
      items: ['Refurb optimization', 'Supply chain', 'Production schedule', 'Dashboard setup']
    },
    {
      phase: 'Scale',
      days: '60-100',
      items: ['Scale improvements', 'Commission B#2', 'SLA tracking', 'Ops handoff']
    }
  ];

  return (
    <div style={{
      background: 'linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%)',
      color: '#2a2a2a',
      minHeight: '100vh',
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', sans-serif",
      padding: '1.5rem',
      margin: 0
    }}>
      
      {/* Header - Compact */}
      <div style={{ marginBottom: '1.5rem' }}>
        <h1 style={{ margin: '0 0 0.25rem', fontSize: '1.1rem', fontWeight: 600, letterSpacing: '0.5px' }}>
          Project Kuiper
        </h1>
        <p style={{ margin: 0, fontSize: '0.7rem', opacity: 0.6, letterSpacing: '0.3px' }}>
          Launch Cadence Optimization
        </p>
      </div>

      {/* Tab Navigation - Subtle */}
      <div style={{
        display: 'flex',
        gap: '0.5rem',
        marginBottom: '1.5rem',
        borderBottom: '1px solid #ddd',
        paddingBottom: '0.75rem'
      }}>
        {[
          { id: 'gap', label: 'Gap' },
          { id: 'roadmap', label: 'Roadmap' },
          { id: 'days', label: '100-Day' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: '0.4rem 0.8rem',
              border: 'none',
              background: 'transparent',
              color: activeTab === tab.id ? '#0066CC' : '#999',
              fontSize: '0.75rem',
              fontWeight: activeTab === tab.id ? 600 : 400,
              cursor: 'pointer',
              borderBottom: activeTab === tab.id ? '2px solid #0066CC' : 'none',
              marginBottom: '-0.75rem',
              transition: 'all 0.2s',
              letterSpacing: '0.3px',
              textTransform: 'uppercase'
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Container */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem', maxHeight: 'calc(100vh - 200px)', overflow: 'auto' }}>

        {activeTab === 'gap' && (
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 1.2fr', gap: '1rem' }}>
            
            {/* Scenario Controls */}
            <div style={{ background: '#fff', padding: '1rem', borderRadius: '3px', border: '1px solid #ddd', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
              <h3 style={{ margin: '0 0 0.75rem', fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.4px', opacity: 0.7 }}>
                Scenario
              </h3>
              
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', marginBottom: '0.4rem', opacity: 0.8 }}>
                  <span>Boosters</span>
                  <strong>{boosters}</strong>
                </div>
                <input
                  type="range"
                  min="1"
                  max="5"
                  value={boosters}
                  onChange={(e) => setBooters(parseInt(e.target.value))}
                  style={{ width: '100%', height: '2px', cursor: 'pointer' }}
                />
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', marginBottom: '0.4rem', opacity: 0.8 }}>
                  <span>Turnaround</span>
                  <strong>{turnaroundDays}d</strong>
                </div>
                <input
                  type="range"
                  min="21"
                  max="150"
                  step="7"
                  value={turnaroundDays}
                  onChange={(e) => setTurnaroundDays(parseInt(e.target.value))}
                  style={{ width: '100%', height: '2px', cursor: 'pointer' }}
                />
              </div>
            </div>

            {/* Metrics - Compact */}
            <div style={{ display: 'grid', gridTemplateRows: 'repeat(3, 1fr)', gap: '0.75rem' }}>
              <div style={{ background: '#fff', padding: '0.8rem', borderRadius: '3px', border: '1px solid #ddd', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                <div style={{ fontSize: '0.65rem', opacity: 0.6, marginBottom: '0.3rem', textTransform: 'uppercase', letterSpacing: '0.2px' }}>Current</div>
                <div style={{ fontSize: '1.4rem', fontWeight: 300, color: currentCapacity >= 216 ? '#00AA44' : '#CC6633' }}>
                  {Math.round(currentCapacity)}
                </div>
                <div style={{ fontSize: '0.65rem', opacity: 0.5 }}>launches/yr</div>
              </div>

              <div style={{ background: '#fff', padding: '0.8rem', borderRadius: '3px', border: '1px solid #ddd', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                <div style={{ fontSize: '0.65rem', opacity: 0.6, marginBottom: '0.3rem', textTransform: 'uppercase', letterSpacing: '0.2px' }}>Required</div>
                <div style={{ fontSize: '1.4rem', fontWeight: 300, color: '#0066CC' }}>216</div>
                <div style={{ fontSize: '0.65rem', opacity: 0.5 }}>launches/yr</div>
              </div>

              <div style={{ background: Math.round(currentCapacity) >= 216 ? 'rgba(0, 170, 68, 0.08)' : 'rgba(204, 102, 51, 0.08)', padding: '0.8rem', borderRadius: '3px', border: `1px solid ${Math.round(currentCapacity) >= 216 ? '#ddd' : '#ddd'}`, boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                <div style={{ fontSize: '0.65rem', opacity: 0.6, marginBottom: '0.3rem', textTransform: 'uppercase', letterSpacing: '0.2px' }}>Gap</div>
                <div style={{ fontSize: '1.4rem', fontWeight: 300, color: Math.round(currentCapacity) >= 216 ? '#00AA44' : '#CC6633' }}>
                  {Math.max(0, 216 - Math.round(currentCapacity))}
                </div>
                <div style={{ fontSize: '0.65rem', opacity: 0.5 }}>{Math.round(currentCapacity) >= 216 ? '✓ Met' : 'Shortfall'}</div>
              </div>
            </div>

            {/* Chart - Compact */}
            <div style={{ background: '#fff', padding: '1rem', borderRadius: '3px', border: '1px solid #ddd', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
              <div style={{ fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.4px', opacity: 0.7, marginBottom: '0.75rem' }}>
                Capacity @ 21d
              </div>
              <ResponsiveContainer width="100%" height={180}>
                <BarChart data={capacityScenarios} margin={{ top: 10, right: 10, left: -25, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="2 2" stroke="#f0f0f0" vertical={false} />
                  <XAxis dataKey="boosters" tick={{ fontSize: 11 }} />
                  <YAxis tick={{ fontSize: 10 }} />
                  <Tooltip cursor={false} contentStyle={{ fontSize: '11px', border: '1px solid #ddd', borderRadius: '2px' }} />
                  <Bar dataKey="launches" fill="#0066CC" radius={[1, 1, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {activeTab === 'roadmap' && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
            <div style={{ background: '#fff', padding: '1rem', borderRadius: '3px', border: '1px solid #ddd', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
              <div style={{ fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.4px', opacity: 0.7, marginBottom: '0.75rem' }}>
                24-Month Timeline
              </div>
              <ResponsiveContainer width="100%" height={200}>
                <ComposedChart data={roadmapData} margin={{ top: 10, right: 20, left: -25, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="2 2" stroke="#f0f0f0" vertical={false} />
                  <XAxis dataKey="month" tick={{ fontSize: 10 }} />
                  <YAxis tick={{ fontSize: 10 }} />
                  <Tooltip cursor={false} contentStyle={{ fontSize: '11px', border: '1px solid #ddd', borderRadius: '2px' }} />
                  <Area type="monotone" dataKey="cum" fill="#0066CC" stroke="#0066CC" strokeWidth={1.5} name="Actual" opacity={0.3} />
                  <Line type="monotone" dataKey="target" stroke="#00AA44" strokeWidth={1} strokeDasharray="3 3" name="Target" />
                </ComposedChart>
              </ResponsiveContainer>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }}>
              {[
                { m: 'M6', l: '50', s: 'Gate' },
                { m: 'M12', l: '100', s: 'Go' },
                { m: 'M24', l: '216', s: 'Target' }
              ].map((item, idx) => (
                <div key={idx} style={{ background: '#fff', padding: '0.8rem', borderRadius: '3px', border: '1px solid #ddd', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                  <div style={{ fontSize: '0.65rem', opacity: 0.6, marginBottom: '0.2rem' }}>{item.m}</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 300, color: '#0066CC' }}>{item.l}</div>
                  <div style={{ fontSize: '0.65rem', opacity: 0.5 }}>{item.s}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'days' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
            {daysPlan.map((phase, idx) => (
              <div key={idx} style={{ background: '#fff', padding: '1rem', borderRadius: '3px', border: '1px solid #ddd', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.4px', marginBottom: '0.5rem', color: '#0066CC' }}>
                  {phase.phase} <span style={{ opacity: 0.5, fontSize: '0.7rem' }}>({phase.days})</span>
                </div>
                <div style={{ display: 'grid', gap: '0.5rem' }}>
                  {phase.items.map((item, itemIdx) => (
                    <div key={itemIdx} style={{ fontSize: '0.7rem', paddingLeft: '0.75rem', borderLeft: '2px solid #0066CC', opacity: 0.8 }}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Footer */}
      <div style={{ fontSize: '0.65rem', opacity: 0.5, textAlign: 'center', marginTop: '1rem', letterSpacing: '0.3px' }}>
        Blue Origin | Program Analysis
      </div>
    </div>
  );
}
