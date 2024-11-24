import React from "react";
import {
  Clock,
  Users,
  Cpu,
  BarChart3,
  Battery,
  ArrowRight,
  CheckCircle,
  Search,
  TrendingUp,
  Star,
  Instagram,
} from "lucide-react";

import "./App.css";

function App() {
  const sections = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "4-Hour Business Management Framework",
      points: [
        "15 Minutes per Business, Daily: Laser-focused check-ins",
        "Strict reporting templates",
        "Automated dashboards tracking key metrics",
      ],
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Architecture",
      points: [
        "One Exceptional Leader per Business: Handpicked, equity-motivated",
        "Clear KPIs and quarterly performance reviews",
        "Profit-sharing model to align incentives",
      ],
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Technology Stack",
      points: [
        "Unified management platform",
        "Real-time financial integration",
        "AI-powered anomaly detection",
      ],
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Decision Matrix",
      points: [
        "80/20 Rule on Steroids:",
        "Identify critical 20% of activities generating 80% results",
        "Ruthlessly eliminate or delegate everything else",
        "Weekly strategy recalibration",
      ],
    },
    {
      icon: <Battery className="w-6 h-6" />,
      title: "Personal Energy Management",
      points: [
        "Non-Negotiable Weekly Rituals:",
        "6 AM strategy sessions",
        "Meditation and performance tracking",
        "Physical fitness as business performance catalyst",
      ],
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO",
      content:
        "The accounting system transformed our financial operations. We've saved countless hours and gained invaluable insights.",
      rating: 5,
    },
    {
      name: "Mohammed Al-Rashid",
      role: "Founder",
      content:
        "Their expertise in handling multiple businesses is unmatched. The systematic approach has been a game-changer.",
      rating: 5,
    },
    {
      name: "Abdullah Al-Mansouri",
      role: "CFO",
      content:
        "The unlimited reconciliation feature alone has paid for itself many times over. Highly recommended!",
      rating: 5,
    },
  ];
  return (
    <div className="min-h-screen bg-black text-gray-100 font-inter relative">
      {/* Instagram Floating Button */}
      <a
        href="https://www.instagram.com/datainsightaccounting?igsh=MW5oMDNyenQ3ZDZvMQ=="
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-gradient-to-br from-purple-600 to-pink-500 p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
      >
        <Instagram className="w-6 h-6 text-white" />
      </a>

      {/* First Component */}
      <div className="p-8 md:p-16">
        <div className="max-w-4xl mx-auto">
          <header className="mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              🔑 The Secret Formula
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300 font-light">
              Managing Multiple Businesses Like a Pro
            </h2>
            <p className="mt-4 text-gray-400 text-lg">
              My Personal Playbook for Entrepreneurial Mastery
            </p>
          </header>

          <div className="space-y-12">
            {sections.map((section, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-xl p-8 hover:bg-gray-800 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                    {section.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-100">
                    {section.title}
                  </h3>
                </div>
                <ul className="space-y-3 text-gray-300">
                  {section.points.map((point, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 p-6 bg-red-500/10 rounded-xl border border-red-500/20">
            <p className="text-red-400 font-medium text-lg">
              🚨 Warning: This system isn't for everyone. It requires
              discipline, systems thinking, and relentless optimization.
            </p>
          </div>
        </div>
      </div>

      {/* Second Component */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          The Accounting System That Works (Proven Formula based on 1000 failed
          Businesses)
        </h1>
        <p className="text-xl text-center text-gray-300 mb-8">
          Our 5 Years of Research to Simplify Your Finances and Free You from
          Daily Tasks. Our package includes:
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3">
              Big 4 Accounting Expertise
            </h3>
            <p className="text-gray-400">
              Professional expertise from industry leaders
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3">Big 3 Data Analytics</h3>
            <p className="text-gray-400">Your Unfair Business Advantage</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3">Guaranteed Results</h3>
            <p className="text-gray-400">Punctual Reports or 100% Money Back</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-2xl p-8 mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Your Transformation Starts Now
              </h2>
              <div className="flex items-center gap-2 mb-4">
                <Clock className="text-blue-400" />
                <span>10/30 Businesses Already Onboarded</span>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="text-blue-400" />
                <span>1,000 AED/Month Unlimited Reconciliation</span>
              </div>
              <div className="flex items-center gap-2">
                <Search className="text-blue-400" />
                <span>Insights from 1,000+ Business Analyses</span>
              </div>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">
                FREE Business Accounting Health Score
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-green-400" size={20} />
                  <span>
                    Personalized diagnostic based on 5 years of research
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-green-400" size={20} />
                  <span>Reveals hidden financial blind spots</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-green-400" size={20} />
                  <span>Identifies immediate growth opportunities</span>
                </li>
              </ul>
              <a
                href="https://www.datainsightaccounting.com/team"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                GET MY FREE ACCOUNTING SCORE NOW
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 p-8 rounded-xl text-center mb-16">
          <h2 className="text-2xl font-bold mb-4">Unlimited Reconciliation</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Say goodbye to hours of manual work. Our system offers unlimited
            reconciliation, helping you maintain accurate, up-to-date records
            with ease.
          </p>
        </div>

        {/* Testimonials Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-xl">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">{testimonial.content}</p>
                <div className="text-sm">
                  <p className="font-semibold text-gray-200">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 py-6 text-center text-gray-400 text-sm">
        <p>DataInsightAccounting © All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;
