# SECURITY AUDIT SERVICES AGREEMENT

**This Agreement ("Agreement") is entered into as of [DATE] ("Effective Date")**

**BETWEEN:**

**PromptGuard** (hereinafter "Service Provider")

**AND:**

**[CLIENT NAME]** (hereinafter "Client")

---

## 1. SCOPE OF WORK

The Service Provider agrees to conduct a comprehensive security audit of the Client's AI system(s) as described in Schedule A ("System"). The audit will include testing for vulnerabilities across the following categories:

- Prompt injection and instruction manipulation attacks
- Data exfiltration and information disclosure
- Behavioral bypass and jailbreak techniques
- Function call and API exploitation
- Input validation flaws
- Authentication and authorization weaknesses
- Logging and monitoring gaps
- System architecture and configuration review

The specific audit tier selected determines the depth and duration of testing (see Section 2).

---

## 2. AUDIT TIERS AND DELIVERABLES

### Quick Assessment ($500)
- **Duration:** Up to 20 hours
- **Test Vectors:** 10+ specialized attack patterns
- **Deliverables:** Basic findings report with severity levels
- **Timeline:** Typically 24 hours
- **Follow-up:** Email support

### Standard Audit ($2,500) ⭐ Recommended
- **Duration:** 40 hours
- **Test Vectors:** 30+ specialized attack patterns
- **Deliverables:** 
  - Comprehensive technical report
  - CVSS scoring for all findings
  - Proof-of-concept exploits
  - Detailed remediation roadmap
  - Re-testing after remediation (included)
- **Timeline:** Typically 40 hours
- **Follow-up:** Priority email and chat support

### Comprehensive Review ($7,500)
- **Duration:** 60+ hours
- **Test Vectors:** 50+ specialized attack patterns
- **Deliverables:**
  - Everything in Standard Audit
  - Multi-model testing (if applicable)
  - Architecture recommendations
  - Deep-dive integration testing
  - Full proof-of-concept development
  - Post-remediation re-assessment
- **Timeline:** Typically 60 hours
- **Follow-up:** Dedicated point of contact

---

## 3. PAYMENT TERMS

- **Payment Amount:** $[AMOUNT] for [AUDIT TIER] Audit
- **Payment Method:** Credit card via Stripe (paid upfront via online form)
- **Payment Due:** Before audit commences
- **Late Payment:** If payment is not received within 7 days of invoice, Service Provider may suspend work

---

## 4. TIMELINE AND DELIVERABLES

**Assessment Timeline:**
1. Payment received → Audit begins same business day
2. Testing phase: [DURATION] hours over [DAYS] days
3. Report generation and compilation
4. Final report delivery: [TURNAROUND TIME]

**Deliverables:**
- Final Security Audit Report (PDF)
- Findings prioritized by CVSS score
- Executive summary (non-technical)
- Detailed technical findings with proof-of-concepts
- Remediation roadmap with implementation priorities
- Follow-up testing schedule (if applicable)

All deliverables will be provided to Client within the timeframe specified for their audit tier.

---

## 5. CONFIDENTIALITY AND NON-DISCLOSURE

**5.1 Mutual Confidentiality**
Both parties agree to maintain the confidentiality of information exchanged during this engagement, including:
- All findings and vulnerabilities discovered
- System architecture and implementation details
- Security controls and procedures
- Any proprietary information shared

**5.2 Report Confidentiality**
The final audit report is proprietary to the Client and contains sensitive security information. The Client agrees to:
- Restrict distribution to personnel with legitimate need-to-know
- Not publish or disclose findings without Service Provider consent (except as required by law)
- Maintain the report as confidential

**5.3 Service Provider Confidentiality**
The Service Provider agrees to:
- Not disclose Client identity or system details without written consent
- Not use Client information for marketing or case studies without explicit permission
- Store all Client data securely and delete after 90 days of report delivery
- Sign additional NDA if requested by Client

**5.4 Exceptions to Confidentiality**
Either party may disclose confidential information if required by law or court order, provided the disclosing party provides prompt notice to allow the other party to seek protective measures.

---

## 6. LIMITATIONS AND DISCLAIMERS

**6.1 Scope Limitations**
- This audit tests for vulnerabilities in the specified System only
- Testing is conducted at a point in time; new vulnerabilities may emerge after report delivery
- The Service Provider does not have access to the Client's internal development environment (unless explicitly provided)
- Third-party services/dependencies used by the System are tested at their public API boundary only

**6.2 No Guarantee of Discovery**
The Service Provider makes no warranty that all vulnerabilities will be discovered. Security assessments are best-effort and may not identify all possible weaknesses. The Service Provider is not responsible for vulnerabilities discovered after the audit period.

**6.3 No Warranty**
The report and recommendations are provided "as-is" without warranty of any kind, express or implied. The Service Provider does not guarantee that implementing all recommendations will eliminate all security risks.

**6.4 Not a Substitute for Development**
This audit does not replace secure development practices, code review, or ongoing security monitoring. Client is responsible for:
- Implementing remediation recommendations
- Conducting ongoing security testing
- Monitoring for new vulnerabilities
- Maintaining secure development practices

---

## 7. LIABILITY AND INDEMNIFICATION

**7.1 Limitation of Liability**
In no event shall the Service Provider be liable for any indirect, incidental, special, or consequential damages, including loss of revenue, profits, or data, even if advised of the possibility of such damages. Service Provider's total liability under this Agreement shall not exceed the amount paid by Client for this audit.

**7.2 Indemnification**
Client agrees to indemnify and hold harmless the Service Provider from any claims, damages, or costs arising from:
- Client's use of the audit report
- Client's failure to implement recommended remediations
- Client's disclosure of the report to unauthorized parties
- Any damages resulting from the System itself

---

## 8. INTELLECTUAL PROPERTY

**8.1 Report Ownership**
The final audit report is owned by the Client upon payment. The Client may use it for internal purposes and may engage other vendors to assist with remediation.

**8.2 Methodology**
The Service Provider's testing methodology, tools, and processes remain the property of the Service Provider and may not be disclosed or reverse-engineered.

**8.3 Data**
All data collected during the audit (logs, screenshots, findings) will be deleted 90 days after report delivery unless the Client requests secure archival for future reference.

---

## 9. FOLLOW-UP TESTING (For Standard Audit and Above)

**9.1 Remediation Testing**
The Service Provider includes one round of follow-up testing after Client implements remediation:
- Client notifies Service Provider of completed fixes
- Service Provider re-tests the same vectors that were vulnerable
- Results reported in follow-up assessment
- Timeline: Within 14 days of remediation notification

**9.2 Additional Testing**
Additional follow-up testing beyond the included assessment is available at $[RATE]/hour.

---

## 10. COMMUNICATION AND CONTACT

**Primary Contact:**
- Email: promptguardsupport@gmail.com
- Response Time: Typically within 24 hours

**Confidential Communications:**
For sensitive findings or security-related questions, all communication should be sent to the email above with "CONFIDENTIAL" in the subject line.

---

## 11. TERMINATION

**11.1 Early Termination**
If the Client requests to terminate the audit before completion:
- Client is responsible for payment in full
- Service Provider will provide findings to date
- Final report will not be delivered

**11.2 Suspension**
Service Provider may suspend work if payment is not received within 7 days of the due date.

---

## 12. GENERAL TERMS

**12.1 Entire Agreement**
This Agreement, including any schedules, constitutes the entire agreement between the parties and supersedes all prior negotiations and agreements.

**12.2 Amendments**
Amendments to this Agreement must be made in writing and signed by both parties.

**12.3 Governing Law**
This Agreement shall be governed by and construed in accordance with the laws of [STATE/COUNTRY], without regard to conflict of law principles.

**12.4 Severability**
If any provision of this Agreement is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.

**12.5 Relationship**
Nothing in this Agreement creates a partnership, joint venture, or employment relationship between the parties. Each party is an independent contractor.

---

## 13. SCHEDULE A: SYSTEM DESCRIPTION

**System Name:** [CLIENT SYSTEM NAME]

**System Type:** 
☐ Chatbot / Conversational AI
☐ Autonomous Agent  
☐ RAG System
☐ Custom LLM Implementation
☐ Other: [SPECIFY]

**System Description:**
[CLIENT TO PROVIDE DESCRIPTION OF SYSTEM, ARCHITECTURE, MODELS USED, INTEGRATIONS, DATA ACCESS]

**Data Accessed:**
[CLIENT TO DESCRIBE DATA CLASSIFICATIONS, SENSITIVE INFORMATION, BACKENDS ACCESSED]

**Key Integrations:**
[CLIENT TO LIST CONNECTED SYSTEMS, APIS, DATABASES]

**Access Requirements:**
☐ Read-only API access
☐ Test account creation
☐ Authentication credentials provided
☐ Other: [SPECIFY]

**Out of Scope:**
[CLIENT TO SPECIFY ANY SYSTEMS/AREAS EXCLUDED FROM TESTING]

---

## ACCEPTANCE AND SIGNATURES

By submitting payment and the System Description above, both parties accept the terms of this Agreement.

**Service Provider:**
PromptGuard  
By: Brady M.  
Date: [AUTO-FILLED]

**Client:**
[CLIENT NAME]  
By: [AUTHORIZED REPRESENTATIVE]  
Title: [TITLE]  
Date: [DATE]

---

## APPENDIX A: COMMUNICATION DURING AUDIT

During the audit period:
- Service Provider may request clarification on System functionality or architecture
- Client should provide reasonable access and responses within 24 hours
- Client should not modify the System during the audit period (notify Service Provider if changes occur)
- Critical issues may be reported to Client as discovered; final report contains all findings

---

**End of Contract**

---

### NOTES FOR CUSTOMIZATION:

1. **[DATE]** - Fill in the date the contract is signed
2. **[CLIENT NAME]** - Company/individual name
3. **[AMOUNT]** - Total payment ($500, $2,500, or $7,500)
4. **[AUDIT TIER]** - Quick Assessment, Standard Audit, or Comprehensive Review
5. **[DURATION]** - Hours for the tier (20, 40, or 60+)
6. **[DAYS]** - Approximate calendar days (1-2 for quick, 2-3 for standard, 3-5 for comprehensive)
7. **[TURNAROUND TIME]** - "24 hours", "40 hours", etc.
8. **[RATE]/hour** - Hourly rate for additional testing (recommend $150-250/hr)
9. **[STATE/COUNTRY]** - Your jurisdiction
10. **[AUTO-FILLED]** - Will be the date of payment/signature
11. **Client to fill in Section 13** with their system details
