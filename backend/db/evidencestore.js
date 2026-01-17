// db/evidenceStore.js

// Example using in-memory or persistent DB (e.g., SQLite, MongoDB, or D1)
const { v4: uuidv4 } = require('uuid');

// Simulated in-memory database (replace with real DB later)
const evidenceDB = [];

module.exports = {
  // Add evidence
  addEvidence: async (userId, type, data, timestamp = new Date()) => {
    const record = {
      id: uuidv4(),
      userId,
      type,         // e.g., 'image', 'audio', 'text'
      data,         // could be a file path, URL, or base64 string
      timestamp
    };
    evidenceDB.push(record);
    return record;
  },

  // Get evidence by user
  getEvidenceByUser: async (userId) => {
    return evidenceDB.filter(record => record.userId === userId);
  },

  // Get all evidence (for admin/analytics)
  getAllEvidence: async () => {
    return evidenceDB;
  },

  // Delete evidence by ID
  deleteEvidence: async (id) => {
    const index = evidenceDB.findIndex(record => record.id === id);
    if (index !== -1) {
      const [deleted] = evidenceDB.splice(index, 1);
      return deleted;
    }
    return null;
  }
};