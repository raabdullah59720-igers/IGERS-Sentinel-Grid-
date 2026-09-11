import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Activity, BatteryCharging, Boxes, Cpu, Gauge, Layers3, Menu, Network, Play, ShieldCheck, Sparkles, Sun, X, Zap } from 'lucide-react';
import './styles.css';

const models = [
  { key:'hydro', name:'Hydro Recovery', note:'Flow-gradient energy recovery concept', icon:Activity, metric:'Adaptive flow', value:'Variable' },
  { key:'road', name:'Roadside Harvesting', note:'Distributed micro-generation layer', icon:Network, metric:'Deployment', value:'Scalable' },
  { key:'utility', name:'Utility Infrastructure', note:'Pole and tower energy-harvesting concept', icon:Layers3, metric:'Network', value:'Distributed' },
  { key:'hybrid', name:'Hybrid IGERS Node', note:'Recovery + storage + control in one node', icon:Boxes, metric:'Architecture', value:'Modular' }
];

function App(){
  const [active, setActive] = useState('hydro');
  const [menu, setMenu] = useState(false);
  const [demo, setDemo] = useState(false);
  const selected = useMemo(()=>models.find(m=>m.key===active) || models[0],[active]);

  return <div className="app">
    <header className="topbar">
      <div className="brand" onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}>
        <div className="brandMark"><Zap size={19}/></div>
        <div><strong>IGERS</strong><span>BD-01</span></div>
      </div>
      <nav className={menu ? 'nav open':'nav'}>
        <a href="#overview" onClick={()=>setMenu(false)}>Overview</a>
        <a href="#models" onClick={()=>setMenu(false)}>Models</a>
        <a href="#system" onClick={()=>setMenu(false)}>System</a>
        <a href="#inventor" onClick={()=>setMenu(false)}>Inventor</a>
      </nav>
      <button className="menuBtn" onClick={()=>setMenu(v=>!v)} aria-label="Toggle menu">{menu?<X/>:<Menu/>}</button>
    </header>

    <main>
      <section className="hero" id="overview">
        <div className="heroGlow glow1"/><div className="heroGlow glow2"/>
        <div className="heroCopy">
          <div className="eyebrow"><span className="dot"/> Integrated Energy Intelligence</div>
          <h1>IGERS<span>-BD-01</span></h1>
          <p className="subtitle">Integrated Gradient-Based Energy Recovery and Storage System</p>
          <p className="lead">A conceptual engineering platform for capturing usable energy from distributed gradients, converting it through controllable modules, and routing the output into storage and intelligent power-management layers.</p>
          <div className="actions">
            <button className="primary" onClick={()=>setDemo(true)}><Play size={18} fill="currentColor"/> Run concept demo</button>
            <a className="secondary" href="#models">Explore models <span>↗</span></a>
          </div>
          <div className="identityStrip">
            <div><span>Inventor &amp; Author</span><strong>Abdullah Al Rafi [BD]</strong></div>
            <div><span>Concept / Invention Date</span><strong>14 August 2026</strong></div>
          </div>
        </div>
        <div className="heroVisual" aria-label="Conceptual system graphic">
          <div className="orbital orbitA"/><div className="orbital orbitB"/>
          <div className="core"><div className="coreRing"><Zap size={42}/></div><span>IGERS</span><small>CORE NODE</small></div>
          {[['N1',12,8],['N2',-8,68],['N3',58,78],['N4',80,25]].map(([n,x,y])=><div className="node" style={{left:x+'%',top:y+'%'}} key={n}><span>{n}</span></div>)}
          <div className="energyLine l1"/><div className="energyLine l2"/><div className="energyLine l3"/>
          <div className="visualLabel labelTop"><Cpu size={15}/> CONTROL LAYER</div>
          <div className="visualLabel labelBottom"><BatteryCharging size={15}/> STORAGE LAYER</div>
        </div>
      </section>

      <section className="statsGrid">
        <Stat icon={Gauge} label="System state" value="CONCEPTUAL" />
        <Stat icon={Zap} label="Architecture" value="MODULAR" />
        <Stat icon={BatteryCharging} label="Energy path" value="RECOVER → STORE" />
        <Stat icon={ShieldCheck} label="Design intent" value="SCALABLE" />
      </section>

      <section className="section" id="models">
        <div className="sectionHead"><div><p className="kicker">CONCEPT LIBRARY</p><h2>One platform, multiple deployment models.</h2></div><p className="sectionNote">Select a module to preview its role in the IGERS architecture.</p></div>
        <div className="modelGrid">
          {models.map(m=>{const I=m.icon; return <button className={active===m.key?'modelCard active':'modelCard'} key={m.key} onClick={()=>setActive(m.key)}>
            <div className="cardIcon"><I size={22}/></div><div className="cardText"><h3>{m.name}</h3><p>{m.note}</p></div><span className="arrow">↗</span>
          </button>})}
        </div>
        <div className="modulePanel">
          <div className="panelVisual"><div className="pulse"/><div className="moduleCore"><selected.icon size={34}/></div><div className="modulePath"><span/><span/><span/><span/></div></div>
          <div className="panelCopy"><div className="miniTag">ACTIVE MODULE</div><h3>{selected.name}</h3><p>{selected.note}. The interface is intentionally conceptual, giving future prototypes, engineering calculations, simulation results, and field imagery a clean place to live without locking the project into a single physical implementation.</p><div className="metricRow"><div><span>{selected.metric}</span><strong>{selected.value}</strong></div><div><span>Control</span><strong>Adaptive</strong></div><div><span>Storage</span><strong>Ready</strong></div></div></div>
        </div>
      </section>

      <section className="section darkSection" id="system">
        <div className="sectionHead"><div><p className="kicker">SYSTEM ARCHITECTURE</p><h2>Recover. Convert. Store. Orchestrate.</h2></div><p className="sectionNote">A clean conceptual pipeline for future engineering validation.</p></div>
        <div className="pipeline">
          {['Energy Source','Recovery Module','Power Conditioning','Storage','Intelligent Control'].map((x,i)=><React.Fragment key={x}><div className="step"><span>0{i+1}</span><h3>{x}</h3><p>{['Available gradient or distributed source','Mechanical or electro-mechanical capture','Voltage regulation and protection','Battery or other storage interface','Monitoring, routing and optimization'][i]}</p></div>{i<4&&<div className="connector">→</div>}</React.Fragment>)}
        </div>
      </section>

      <section className="section inventor" id="inventor">
        <div className="inventorCard"><div className="seal"><Sparkles size={25}/><span>IGERS</span><small>BD-01</small></div><div><p className="kicker">PROJECT IDENTITY</p><h2>Abdullah Al Rafi <span>[BD]</span></h2><p>Inventor &amp; Author of the IGERS-BD-01 concept. This digital platform is designed as a professional front end for research documentation, conceptual prototypes, engineering studies, simulations, and future validated deployment data.</p><div className="tags"><span>Engineering Concept</span><span>Energy Recovery</span><span>Storage</span><span>Bangladesh</span></div></div></div>
      </section>
    </main>

    <footer><div><strong>IGERS-BD-01</strong><span> Integrated Gradient-Based Energy Recovery and Storage System</span></div><div>Concept / Invention Date: 14 August 2026</div></footer>

    {demo && <div className="modal" onClick={()=>setDemo(false)}><div className="modalCard" onClick={e=>e.stopPropagation()}><button className="close" onClick={()=>setDemo(false)}><X/></button><div className="demoIcon"><Activity size={28}/></div><p className="kicker">CONCEPT DEMO</p><h2>Energy path online</h2><p>This demo is visual only. Replace these placeholders later with measured values, CFD/FEA outputs, sensor data, efficiency curves, and storage performance.</p><div className="demoReadouts"><div><span>Recovery</span><strong>ACTIVE</strong></div><div><span>Conditioning</span><strong>STABLE</strong></div><div><span>Storage</span><strong>READY</strong></div></div></div></div>}
  </div>
}

function Stat({icon:Icon,label,value}){return <div className="stat"><div className="statIcon"><Icon size={18}/></div><div><span>{label}</span><strong>{value}</strong></div></div>}

createRoot(document.getElementById('root')).render(<App/>);
