<ant_artifact identifier="unique_id_001" title="Business Guide Integration">
import React, { useState } from 'react';
import { Clock, Users, Cpu, BarChart3, Battery, ArrowRight, Star, CheckCircle } from 'lucide-react';

export default function BusinessGuide() {
  const [showModal, setShowModal] = useState(false);

  const sections = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "4-Hour Business Management Framework",
      points: [
        "15 Minutes per Business, Daily: Laser-focused check-ins",
        "Strict reporting templates",
        "Automated dashboards tracking key metrics"
      ]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Architecture",
      points: [
        "One Exceptional Leader per Business: Handpicked, equity-motivated",
        "Clear KPIs and quarterly performance reviews",
        "Profit-sharing model to align incentives"
      ]
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Technology Stack",
      points: [
        "Unified management platform",
        "Real-time financial integration",
        "AI-powered anomaly detection"
      ]
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Decision Matrix",
      points: [
        "80/20 Rule on Steroids:",
        "Identify critical 20% of activities generating 80% results",
        "Ruthlessly eliminate or delegate everything else",
        "Weekly strategy recalibration"
      ]
    },
    {
      icon: <Battery className="w-6 h-6