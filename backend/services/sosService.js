import { saveEvidence } from "../db/evidenceStore.js";

const SOS_STATES = {
  TRIGGERED: "Triggered",
  ACTIVE: "Active",
  RESOLVED: "Resolved"
};

export class SOSWorkflow {
  constructor() {
    this.sessions = []; // live SOS sessions
  }

  createSession(userId, severity, incidentDetails) {
    const session = {
      id: Date.now(),
      userId,
      state: SOS_STATES.TRIGGERED,
      severity,        // LOW / MEDIUM / HIGH
      incidentDetails,
      timestamp: new Date()
    };

    this.sessions.push(session);
    this.routeBySeverity(session);
    return session;
  }

  routeBySeverity(session) {
    switch (session.severity) {
      case "LOW":
        console.log(`LOW severity → notify contacts for user ${session.userId}`);
        break;
      case "MEDIUM":
        console.log(`MEDIUM severity → start live tracking simulation for user ${session.userId}`);
        break;
      case "HIGH":
        console.log(`HIGH severity → activate siren + helpline (simulated)`);
        break;
    }
  }

  resolveSession(sessionId) {
    const session = this.sessions.find(s => s.id === sessionId);
    if (session) {
      session.state = SOS_STATES.RESOLVED;
      console.log(`SOS session ${sessionId} resolved`);
    }
    return session;
  }

  storeEvidence(sessionId, evidence) {
    saveEvidence(sessionId, evidence);
  }

  getActiveSessions() {
    return this.sessions.filter(s => s.state !== SOS_STATES.RESOLVED);
  }
}

export const sosEngine = new SOSWorkflow();