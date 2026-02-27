export const profile = {
  name: "Ramya Arumugam",
  title: "Cybersecurity Specialist | Ethical Hacker",
  tagline: "Securing systems, defending networks, preventing threats.",
  summary:
    "Information Security Engineer with 3+ years of hands-on experience securing cloud and enterprise environments across AWS and Microsoft Azure. Strong background in strengthening internal security controls, supporting internal and external audits, and contributing to NIST and ISO 270xx aligned security programs. Proven experience in SOC buildout, SIEM monitoring, threat modeling, risk assessments, incident response, and vulnerability management, with hands-on familiarity in CSPM/CIEM and DAST workflows to reduce cloud security risk at scale.",
  location: "United States",
  phone: "312-731-2368",
  email: "a.ramya0507@gmail.com",
  github: "https://github.com/ramya-cyber001",
  linkedin: "https://www.linkedin.com/in/arumugam-ramya",
  yearsExperience: 3, // adjustable
  certifications: [
    { code: "GCIH", name: "GIAC Incident Handler", date: "Dec 2025", status: "Earned" },
    { code: "GSEC", name: "GIAC Security Essentials", date: "Aug 2025", status: "Earned" },
    { code: "GFACT", name: "GIAC Foundational Cybersecurity Technologies", date: "Mar 2025", status: "Earned" },
    { code: "Security+", name: "CompTIA Security+", date: "Mar 2025", status: "Earned" },
    { code: "AIS247", name: "AI Security Essentials for Business Leaders", date: "Feb 2025", status: "Earned" },
    { code: "CC", name: "ISC2 Certified in Cybersecurity", date: "Jul 2024", status: "Earned" },
    { code: "AZ-IAM", name: "Microsoft Azure: Identity and Access Management", date: "Jul 2024", status: "Earned" }
  ],
  quickStats: [
    { label: "Years in Cybersecurity", value: "3+" },
    { label: "Certifications", value: "6+" },
    { label: "Domains", value: "SOC, Red/Blue, Cloud" }
  ],
  education: [
    {
      degree: "Master of Cybersecurity",
      school: "Illinois Institute of Technology, Chicago, IL",
      date: "May 2025",
      notes: ["Ethical Hacking & Pen Testing", "System & Network Security", "Cryptography", "AI & Security"]
    },
    {
      degree: "Bachelor of Information Technology",
      school: "Coimbatore Institute of Technology",
      date: "Jun 2021",
      notes: []
    }
  ],
  experience: [
    {
      role: "Lead Cybersecurity Analyst",
      org: "Lumena Energy",
      date: "May 2025 – Present",
      bullets: [
        "Implemented NIST SP 800-53 and ISO 27001 security controls across cloud and enterprise environments, improving control maturity and audit readiness.",
        "Performed threat modeling using STRIDE and PASTA for applications and infrastructure, identifying attack scenarios and defining mitigation strategies.",
        "Integrated SIEM-based monitoring with threat intelligence and CVE analysis for AWS and Microsoft 365 environments.",
        "Investigated AWS security events using GuardDuty, mapped findings to MITRE ATT&CK, and coordinated remediation with stakeholders.",
        "Used Wiz for CSPM to identify cloud misconfigurations, analyze attack paths, and prioritize remediation across AWS environments.",
        "Reviewed API authentication and authorization controls to support secure SDLC practices and reduce application-layer security risk.",
        "Established the organization’s first Security Operations Center (SOC), defining monitoring architecture, escalation paths, incident response workflows, and reporting practices.",
        "Led the design and implementation of the company’s first SOC for containerized AI data center nodes.",
        "Authored SRD, SRS, SAD, STAR, and Risk Management Plan; coordinated with teams via JIRA."
      ]
    },
    {
      role: "Cybersecurity Analyst",
      org: "EcoCAR EV Challenge",
      date: "Sep 2024 – May 2025",
      bullets: [
        "Implemented encryption for tamper-resistant component communications.",
        "Optimized message authentication to improve startup reliability and safety.",
        "Supported secure design reviews, threat analysis, and encryption validation for connected-system workflows.",
        "Simulated and validated secure vehicle messaging in MATLAB/Simulink to improve communication integrity.",
        "Collaborated with cross-functional teams to strengthen authentication and resilience across system components."
      
      ]
    },
    {
      role: "Teaching Assistant — Ethical Hacking / System & Network Security",
      org: "Illinois Institute of Technology",
      date: "Aug 2024 – May 2025",
      bullets: [
        "Facilitated hands-on labs in ethical hacking, intrusion detection, and access control, guiding students in system hardening, firewall configuration, and log analysis.",
        "Conducted DAST-style testing, vulnerability analysis, and OWASP-aligned penetration testing exercises.",
        "Encouraged initiative in developing new lab challenges and guided collaborative problem-solving sessions."
      ]
    },
    {
      role: "Cybersecurity Educator",
      org: "BrightChamps Tech Private Limited",
      date: "Sep 2021 – Aug 2023",
      bullets: [
       "Delivered training on secure coding and vulnerability remediation, improving security awareness and risk ownership.",
        "Improved course material and technical documentation, increasing learner engagement and completion outcomes.",
        "Mentored applied security projects emphasizing risk identification and mitigation."
     ]
    },
    {
      role: "Software Engineer",
      org: "EClouds Energy LLP",
      date: "Aug 2021 – Nov 2021",
      bullets: [
        "Led software design improving stability and performance by 15%; streamlined feature delivery by 25%.",
        "Managed user access/permissions and code reviews."
      ]
    }
  ],
  skills: {
    offensive: ["Penetration Testing", 
      "Red Teaming", 
      "Exploit Development",
      "Threat Modeling (STRIDE, PASTA)",
      "OWASP Top 10",
      "DAST",
      "API Security"],
    defensive: ["SIEM", "IDS/IPS",
      "Threat Hunting", "Splunk",
      "SOC Monitoring",
      "Incident Response",
      "Threat Intelligence",
      "Vulnerability Management",
      "MITRE ATT&CK"],
    cloud: ["AWS", "Azure", "GCP Hardening", "Entra ID",
      "Wiz CSPM",
      "Amazon GuardDuty",
      "CIEM"],

    tools: ["Kali Linux",  
      "Burp Suite",
      "Nessus",
      "Wireshark",
      "Metasploit",
      "Terraform",
      "Docker",
      "EDR",
      "WAF"],
    languages: ["Python", "Bash", "Powershell","Shell Script", "C++", "C", "SQL"],
    compliance: [
      "NIST SP 800-53",
      "ISO 27001 / ISO 270xx",
      "SOC 2",
      "CIS",
      "PCI",
      "GDPR"]
  },
  training: [
    "Hamilton’s Solutions, Inc (May 2025 – Present) — Audit contracts, compliance & risk, client solutions.",
    "WiCyS Vulnerability Disclosure Program (Jun 2025 – Present) — Real-world vuln triage and disclosure.",
    "HSOC Cybersecurity Fellowship (Apr 2025 – Present) — SOC analysis & vulnerability assessments.",
    "WiCyS Security Training (Aug 2024 – Present) — CTFs, TryHackMe labs, CyberGen IQ.",
    "TCS Forage IAM Simulation (Jul 2024) — Identity management and security documentation."
  ],
  competitions: [
    "National Cyber League — Identified attacker IP in Splunk logs.",
    "TryHackMe — Hacker: hands-on defensive security labs.",
    "CyberTruck Challenge 2024 — Exploited vulnerability in learning platform via ethernet.",
    "CyberForce Competition 2024 — Assessed AWS-hosted targets; found critical vulns."
  ],
  volunteering: [
    "ISSA Chicago Chapter — Active volunteer & member (since 2024).",
    "GCSI & Chicago Cybersecurity Conference — Community involvement (since 2024)."
  ],
  social: {
    github: "https://github.com/ramya-cyber001",
    linkedin: "https://www.linkedin.com/in/arumugam-ramya",
    twitter: "https://x.com/artycyber001",
    medium: "https://medium.com/@a.ramya0507",
  },
  pgp: "", // add your public key URL here if available
};
