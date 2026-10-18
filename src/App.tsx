import { useEffect, useState } from 'react';
import Pages from './Pages';
import './Pages.css';
import {
  ArrowUpRight,
  ArrowRight,
  Menu,
  X,
  CalendarDays,
  MapPin,
  HeartHandshake,
  UsersRound,
  Compass,
  ChevronDown,
  Mail,
  ShieldCheck,
  ExternalLink,
} from 'lucide-react';

const programs = [
  {
    num: '01',
    tag: 'BELONGING & WELLBEING',
    title: 'Men Connect',
    summary:
      'A welcoming space for immigrant men to build relationships, speak honestly and strengthen their wellbeing.',
    img: '/resources/men-connect.png',
    id: 'men-connect',
  },
  {
    num: '02',
    tag: 'FAMILY & RELATIONSHIPS',
    title: 'Family Strong',
    summary:
      'Practical conversations to help families navigate changing roles, parenting across cultures and communication.',
    img: '/resources/family-strong.png',
    id: 'family-strong',
  },
  {
    num: '03',
    tag: 'INFORMATION & REFERRALS',
    title: 'Navigate Canada',
    summary:
      'Trusted information, professional connections and warm referrals to help families find an appropriate next step.',
    img: '/resources/navigate-canada.png',
    id: 'navigate-canada',
  },
];
const questions = [
  {
    q: 'Who can participate?',
    a: 'The network primarily serves immigrant and newcomer men in Canada. Selected conversations also welcome spouses, partners and adult family members. Individual events may have more specific audiences.',
  },
  {
    q: 'Do I have to be married or a father?',
    a: 'No. Men Connect welcomes immigrant men across family structures and stages of life.',
  },
  {
    q: 'Is this therapy or legal advice?',
    a: 'No. The network provides peer connection, education, navigation and referrals. Professional clinical and legal services must be provided by appropriately qualified professionals.',
  },
  {
    q: 'What if I need urgent support?',
    a: 'If you are in immediate danger, call 9-1-1. If you are thinking about suicide or worried about someone, call or text 9-8-8, available across Canada 24/7.',
  },
];
function App() {
  const [menu, setMenu] = useState(false);
  const [route,setRoute]=useState(window.location.hash.slice(1)||'/');
  useEffect(()=>{const onRoute=()=>{setRoute(window.location.hash.slice(1)||'/');setMenu(false);window.scrollTo(0,0)};window.addEventListener('hashchange',onRoute);return()=>window.removeEventListener('hashchange',onRoute)},[]);
  const [faq, setFaq] = useState<number | null>(null);
  const [notice, setNotice] = useState('');
  const go=(id:string)=>{setMenu(false);const paths:Record<string,string>={top:'/',story:'/about',pathways:'/what-we-do',sessions:'/events',resources:'/resources',partner:'/get-involved',support:'/get-support',contact:'/contact'};const path=paths[id]||'/';window.location.hash=path;if(route===path)window.scrollTo({top:0,behavior:'smooth'});};
  return (
    <div>
      <div className="crisis">
        <div className="container crisis-inner">
          <span>
            <strong>Need urgent help?</strong> Immediate danger: call{' '}
            <a href="tel:911">9-1-1</a>. Suicide crisis: call or text{' '}
            <a href="tel:988">9-8-8</a> (24/7 across Canada).
          </span>
          <a href="https://988.ca/" target="_blank" rel="noreferrer">
            Crisis resources <ArrowUpRight size={13} />
          </a>
        </div>
      </div>
      <header className="header">
        <div className="container nav">
          <a href="#/" className="brand" onClick={() => setMenu(false)}>
            <img
              src="/resources/immigrant-men-and-families-logo.jpeg"
              alt="Immigrant Men and Families Network Canada logo"
            />

          </a>
          <nav
            className={menu ? 'nav-links open' : 'nav-links'}
            aria-label="Main navigation"
          >
            <button onClick={() => go('top')}>Home</button>
            <button onClick={() => go('story')}>About</button>
            <button onClick={() => go('pathways')}>What We Do</button>
            <button onClick={() => go('sessions')}>Events</button>
            <button onClick={() => go('resources')}>Resources</button>
            <button onClick={() => go('partner')}>Get Involved</button>
            <button className="mobile-support" onClick={() => go('support')}>
              Get Support
            </button>
          </nav>
          <div className="nav-actions">
            <button className="support-link" onClick={() => go('support')}>
              Get Support
            </button>
            <button
              className="btn btn-dark nav-cta"
              onClick={() => go('sessions')}
            >
              Join the Next Session <ArrowUpRight size={17} />
            </button>
          </div>
          <button
            className="hamburger"
            aria-label={menu ? 'Close menu' : 'Open menu'}
            aria-expanded={menu}
            onClick={() => setMenu(!menu)}
          >
            {menu ? <X /> : <Menu />}
          </button>
        </div>
      </header>
      {route==='/'?<main id="top">
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">
                <span className="eyebrow-mark" /> A CANADIAN NETWORK FOR
                IMMIGRANT MEN AND FAMILIES
              </span>
              <h1>
                You do not have to figure out <em>life in Canada</em> alone
                <span className="period">.</span>
              </h1>
              <p>
                Join honest conversations with other immigrant men, find support
                for your family, and connect with services that can help.
                Whether you are new to Canada or have been here for years, there
                is a place to start.
              </p>
              <div className="hero-buttons">
                <button className="btn btn-dark" onClick={() => go('sessions')}>
                  Join the Next Session <ArrowUpRight size={18} />
                </button>
                <button
                  className="btn btn-outline"
                  onClick={() => go('pathways')}
                >
                  Explore Our Support <ArrowRight size={18} />
                </button>
              </div>
              <div className="hero-note">
                <span className="note-icon">
                  <HeartHandshake size={23} />
                </span>
                <span>
                  <strong>Connection begins here.</strong>
                  <br />
                  Real conversations. Practical pathways. A place to belong.
                </span>
              </div>
            </div>
            <div className="hero-visual">
              <img
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1400&q=90"
                alt="Friends sharing time together outdoors"
              />
              <div className="image-ribbon">
                <span className="pulse-dot" /> STRONGER TOGETHER, EVERY STEP OF
                THE WAY
              </div>
              <div className="hero-dots"></div>
            </div>
          </div>
          <div className="vertical-caption">
            CONNECTION · BELONGING · RESILIENCE
          </div>
        </section>
        <section className="reassurance">
          <div className="container reassurance-grid">
            <span className="section-tag">01 / WHY WE EXIST</span>
            <div>
              <h2>
                You do not have to carry <span>everything alone.</span>
              </h2>
              <p>
                Many immigrant men arrive in Canada carrying hope,
                responsibility and the expectation to succeed. Behind that
                strength can be loneliness, professional loss, financial
                pressure and the challenge of holding a family together while
                everyone is adapting differently.
              </p>
              <p className="reassurance-foot">
                We begin with conversation, build trust through community and
                connect people with the support they need.{' '}
                <ArrowUpRight size={18} />
              </p>
            </div>
          </div>
        </section>
        <section className="pathways section" id="pathways">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="section-tag">02 / OUR WORK</span>
                <h2>
                  Three pathways.
                  <br />
                  <em>One connected community.</em>
                </h2>
              </div>
              <p>
                Our work supports the man, strengthens the family and improves
                access to the systems that shape life in Canada.
              </p>
            </div>
            <div className="programs">
              {programs.map((p, i) => (
                <article className="program-card" key={p.title} id={p.id}>
                  <div className="program-image">
                    <img
                      src={p.img}
                      alt={p.title + ' programme illustrative community image'}
                      loading="lazy"
                    />
                    <span className="program-number">{p.num} / 03</span>
                  </div>
                  <div className="program-body">
                    <span className="mini-label">{p.tag}</span>
                    <h3>{p.title}</h3>
                    <p>{p.summary}</p>
                    <button
                      className="circle-link"
                      onClick={() => {
                        setNotice(
                          p.title +
                            ' programme details are planned for the full website. The homepage preview shows the approved summary.'
                        );
                        window.setTimeout(() => setNotice(''), 6000);
                      }}
                      aria-label={'Explore ' + p.title}
                    >
                      <ArrowUpRight size={21} />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="journey section">
          <div className="container">
            <div className="journey-head">
              <span className="section-tag light">03 / HOW IT WORKS</span>
              <h2>
                Start where
                <br />
                <em>you are.</em>
              </h2>
              <p>
                There is no single right way to begin. Take one simple step
                toward connection and the next becomes clearer.
              </p>
            </div>
            <div className="steps">
              {[
                {
                  n: '01',
                  t: 'Join a conversation',
                  d: 'Register for an open Men Connect, Family Strong or Navigate Canada session.',
                },
                {
                  n: '02',
                  t: 'Connect with people',
                  d: 'Learn from lived experience, facilitators and trusted professionals.',
                },
                {
                  n: '03',
                  t: 'Find your next step',
                  d: 'Discover practical resources or a warm referral where available.',
                },
                {
                  n: '04',
                  t: 'Stay connected',
                  d: 'Return to future sessions and build meaningful relationships.',
                },
              ].map(s => (
                <div className="step" key={s.n}>
                  <span>{s.n}</span>
                  <div className="step-line" />
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="sessions section" id="sessions">
          <div className="container session-grid">
            <div>
              <span className="section-tag">04 / UPCOMING CONVERSATIONS</span>
              <h2>
                Good things begin
                <br />
                with <em>a conversation.</em>
              </h2>
              <p>
                Our sessions are practical, respectful and grounded in the
                realities immigrant men and families experience. Come to listen,
                share, learn or simply find community.
              </p>
              <button className="btn btn-dark" onClick={() => go('contact')}>
                Ask about upcoming sessions <ArrowUpRight size={18} />
              </button>
            </div>
            <div className="session-placeholder">
              <div className="session-top">
                <CalendarDays size={25} />
                <span>EVENTS & CONVERSATIONS</span>
              </div>
              <h3>Upcoming sessions will be announced here.</h3>
              <p>
                Dates and registration are being confirmed. We won’t display
                unverified events or accept registrations for sessions that have
                not been scheduled.
              </p>
              <div className="session-divider" />
              <span className="session-bottom">
                MEN CONNECT · FAMILY STRONG · NAVIGATE CANADA{' '}
                <ArrowUpRight size={17} />
              </span>
            </div>
          </div>
        </section>
        <section className="story section" id="story">
          <div className="container story-grid">
            <div className="story-visual">
              <img
                src="https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1100&q=85"
                alt="Family spending time together"
                loading="lazy"
              />
              <div className="story-label">
                EVERY STORY DESERVES
                <br />A PLACE TO BELONG
              </div>
            </div>
            <div className="story-copy">
              <span className="section-tag">05 / WHY IT MATTERS</span>
              <h2>
                Migration is
                <br />
                <em>a family journey.</em>
              </h2>
              <p>
                When employment changes, identity can change. When children
                adapt faster than their parents, family relationships can
                change. When financial or immigration pressure enters the home,
                everyone feels it differently.
              </p>
              <p>
                Strong settlement requires more than paperwork and employment.
                It requires belonging, communication and trusted support for the
                whole family.
              </p>
              <div className="story-rule" />
              <span className="section-tag">OUR STORY</span>
              <h3>Built from lived experience.</h3>
              <p>
                The network was created from the conviction that immigrant men
                need places to speak honestly, build meaningful relationships
                and seek support without shame.
              </p>
              <button
                className="text-button"
                onClick={() =>
                  setNotice(
                    'The full founder biography will be published once the title and founding details are verified.'
                  )
                }
              >
                Read our story <ArrowUpRight size={19} />
              </button>
            </div>
          </div>
        </section>
        <section className="resources section" id="resources">
          <div className="container resources-row">
            <div>
              <span className="section-tag">06 / TRUSTED NAVIGATION</span>
              <h2>
                Find the right
                <br />
                <em>next step.</em>
              </h2>
              <p>
                From settlement questions to family wellbeing, navigating
                unfamiliar systems is easier when you know where to begin.
              </p>
            </div>
            <div className="resource-aside">
              <Compass size={38} strokeWidth={1.4} />
              <h3>Practical guidance. Human connection.</h3>
              <p>
                Our resource directory is being prepared. For now, explore the
                three pathways and learn how navigation support is intended to
                work.
              </p>
              <button className="text-button" onClick={() => go('support')}>
                Explore support options <ArrowUpRight size={20} />
              </button>
            </div>
          </div>
        </section>
        <section className="partnership section" id="partner">
          <div className="container partnership-inner">
            <div>
              <span className="section-tag light">07 / GROW THE NETWORK</span>
              <h2>
                Stronger pathways
                <br />
                are built <em>together.</em>
              </h2>
              <p>
                Community organisations, professionals, employers, funders and
                institutions can help create stronger pathways for immigrant men
                and their families.
              </p>
              <button className="btn btn-white" onClick={() => go('contact')}>
                Explore a partnership <ArrowUpRight size={18} />
              </button>
            </div>
            <div className="partner-symbol">
              <UsersRound size={104} strokeWidth={0.75} />
              <span>
                COMMUNITY MAKES
                <br />
                PROGRESS POSSIBLE
              </span>
            </div>
          </div>
        </section>
        <section className="support section" id="support">
          <div className="container support-grid">
            <div>
              <span className="section-tag">08 / GET SUPPORT</span>
              <h2>
                Tell us what
                <br />
                <em>you are navigating.</em>
              </h2>
              <p>
                You do not need to know which program or organisation you need.
                We aim to help identify an appropriate next step within our
                capacity.
              </p>
              <p className="disclaimer">
                <ShieldCheck size={18} /> We provide peer connection, education,
                navigation and referrals—not emergency, clinical or legal
                services.
              </p>
            </div>
            <div className="support-panel">
              <h3>Looking for support?</h3>
              <p>
                The secure support request workflow is being prepared. Please do
                not send sensitive records by email or through a general contact
                form.
              </p>
              <div className="support-warning">
                <strong>Need urgent help?</strong>
                <br />
                In immediate danger, call 9-1-1. For suicide crisis support,
                call or text 9-8-8.
              </div>
              <a
                className="btn btn-dark"
                href="https://988.ca/"
                target="_blank"
                rel="noreferrer"
              >
                Canadian crisis resources <ExternalLink size={17} />
              </a>
            </div>
          </div>
        </section>
        <section className="faq section">
          <div className="container faq-grid">
            <div>
              <span className="section-tag">09 / GOOD TO KNOW</span>
              <h2>
                A few things
                <br />
                <em>you may wonder.</em>
              </h2>
            </div>
            <div className="faq-list">
              {questions.map((v, i) => (
                <div className="faq-item" key={v.q}>
                  <button
                    aria-expanded={faq === i}
                    onClick={() => setFaq(faq === i ? null : i)}
                  >
                    <span>{v.q}</span>
                    <ChevronDown
                      size={20}
                      className={faq === i ? 'rotate' : ''}
                    />
                  </button>
                  {faq === i && <p>{v.a}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="closing">
          <div className="container closing-inner">
            <span className="section-tag light">
              LET’S MOVE FORWARD, TOGETHER
            </span>
            <h2>
              A stronger future can begin with <em>one honest conversation.</em>
            </h2>
            <div className="closing-actions">
              <button className="btn btn-white" onClick={() => go('sessions')}>
                Explore upcoming sessions <ArrowUpRight size={18} />
              </button>
              <button className="btn btn-ghost" onClick={() => go('support')}>
                Explore support <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </section>
      </main>:<Pages path={route}/>}
      <footer id="contact">
        <div className="container footer-top">
          <div className="footer-about">
            <img
              src="/resources/immigrant-men-and-families-logo.jpeg"
              alt="Immigrant Men and Families Network Canada"
            />
            <p>
              Helping immigrant men and their families build healthy, connected
              and resilient lives in Canada through peer connection, family
              learning and trusted navigation.
            </p>
          </div>
          <div className="footer-col">
            <h4>Explore</h4>
            <button onClick={() => go('top')}>Home</button>
            <button onClick={() => go('story')}>About</button>
            <button onClick={() => go('pathways')}>What We Do</button>
            <button onClick={() => go('sessions')}>Events</button>
          </div>
          <div className="footer-col">
            <h4>Get connected</h4>
            <button onClick={() => go('support')}>Get Support</button>
            <button onClick={() => go('partner')}>Get Involved</button>
            <button onClick={() => go('resources')}>Resources</button>
            <a href="https://988.ca/" target="_blank" rel="noreferrer">
              Crisis resources
            </a>
          </div>
          <div className="footer-col">
            <h4>Contact & policies</h4>
            <p>
              Verified contact details and approved privacy, terms and
              accessibility policies will be published before launch.
            </p>
            <a href="#/contact">Contact</a><a href="#/privacy">Privacy</a><a href="#/terms">Terms</a><a href="#/accessibility">Accessibility</a><a href="https://988.ca/" target="_blank" rel="noreferrer"><Mail size={16}/> Urgent help resources</a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>
            © {new Date().getFullYear()} Immigrant Men and Families Network
            Canada. Website preview.
          </span>
          <span>Peer connection · Family learning · Trusted navigation</span>
        </div>
      </footer>
      {notice && (
        <div className="toast" role="status">
          <span>{notice}</span>
          <button aria-label="Close notification" onClick={() => setNotice('')}>
            <X size={17} />
          </button>
        </div>
      )}
    </div>
  );
}
export default App;
