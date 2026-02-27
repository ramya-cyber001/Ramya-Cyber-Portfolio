export const profile = {
  name: "Ramya Arumugam",
  title: "Cybersecurity Specialist | Ethical Hacker",
  tagline: "Securing systems, defending networks, preventing threats.",
  location: "United States",
  phone: "312-731-2368",
  email: "a.ramya0507@gmail.com",
  linkedin: "https://www.linkedin.com/in/arumugam-ramya",
  github: "https://github.com/ramya-cyber001",
  yearsExperience: 3, // adjustable
  certifications: [
    { code: "GSEC", name: "GIAC Security Essentials", date: "Aug 2025", status: "Earned" },
    { code: "GFACT", name: "GIAC Foundational Cybersecurity Technologies", date: "Mar 2025", status: "Earned" },
    { code: "Security+", name: "CompTIA Security+", date: "Mar 2025", status: "Earned" },
    { code: "AIS247", name: "AI Security Essentials for Business Leaders", date: "Feb 2025", status: "Earned" },
    { code: "CC", name: "ISC2 Certified in Cybersecurity", date: "Jul 2024", status: "Earned" },
    { code: "AZ-IAM", name: "Microsoft Azure: Identity and Access Management", date: "Jul 2024", status: "Earned" },
    { code: "GCIH", name: "GIAC Incident Handler", date: "Dec 2025", status: "Earned" }
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
        "Led the design and implementation of the company’s first SOC for containerized AI data center nodes.",
       
        "Performed threat modeling using STRIDE and PASTA for applications and infrastructure, identifying attack scenarios and defining mitigation strategies for cloud-hosted and containerized workloads.",
"Integrated SIEM-based monitoring with threat intelligence and CVE analysis for AWS and Microsoft 365 environments, improving visibility into threats and vulnerabilities.",
"Investigated AWS security events using GuardDuty, mapped findings to MITRE ATT&CK, and coordinated remediation with stakeholders.",
"Used Wiz for CSPM to identify cloud misconfigurations, analyze attack paths, and prioritize remediation across AWS environments.",
"Reviewed API authentication and authorization controls to support secure SDLC practices and reduce application-layer security risk.",
"Established the organization’s first Security Operations Center (SOC), defining monitoring architecture, escalation paths, incident response workflows, and reporting practices.",
 "Authored SRD, SRS, SAD, STAR, and Risk Management Plan; coordinated with teams via JIRA."
      ]
    },
    {
      role: "Cybersecurity Analyst",
      org: "EcoCAR EV Challenge",
      date: "Sep 2024 – May 2025",
      bullets: [
        "Validated secure vehicle messaging via MATLAB/Simulink with CI/CD-aligned auth and encryption.",
        "Implemented encryption for tamper-resistant component communications.",
        "Optimized message authentication to improve startup reliability and safety.",
        "Supported secure design reviews, threat analysis, and encryption validation for connected-system workflows.",
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
      role: "Cybersecurity Specialist",
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
    offensive: ["Penetration Testing", "Red Teaming", "Exploit Development"],
    defensive: ["SIEM", "IDS/IPS", "Threat Hunting", "SOC Monitoring"],
    securityEngineering: [
      "Threat Modeling (STRIDE, PASTA)",
      "MITRE ATT&CK",
      "Incident Response",
      "Risk Assessments",
      "Vulnerability Management",
      "Penetration Testing Support"
    ],
     cloudAndPlatformSecurity: [
      "AWS",
      "Microsoft Azure",
      "IAM",
      "Entra ID",
      "Wiz CSPM",
      "Amazon GuardDuty",
      "SIEM",
      "Splunk",
      "Terraform",
      "Docker",
      "EDR",
      "System Hardening"
    ],
    applicationSecurityAndAutomation: [
      "OWASP Top 10",
      "API Security",
      "DAST",
      "Secure SDLC",
      "Static Code Analysis",
      "Python",
      "Bash",
      "PowerShell",
      "Burp Suite",
      "Nessus",
      "Wireshark",
      "Metasploit",
      "WAF"
    ],
    governanceAndCompliance: [
      "NIST SP 800-53",
      "ISO 27001/270xx",
      "SOC 2",
      "CIS",
      "PCI",
      "GDPR",
      "Audit Evidence Support",
      "Policy and Technical Documentation"
    ]
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
    //twitter: "https://twitter.com/",
    //medium: "https://medium.com/",
  },
  pgp: "", // add your public key URL here if available
};
