// backend/config.js

/**
 * Central configuration for the GuardHer backend
 * - Environment variables
 * - Thresholds for AI risk scoring
 * - Tokens for admin/user access
 * - Other global constants
 */

require('dotenv').config(); // Load .env file if present

module.exports = {
  // ================== SERVER ==================
  PORT: process.env.PORT || 3000,

  // ================== TOKENS / AUTH ==================
  ADMIN_TOKEN: process.env.ADMIN_TOKEN || 'supersecureadmintoken',
  USER_TOKEN: process.env.USER_TOKEN || 'defaultusertoken',

  // ================== AI SERVICE ==================
  AI: {
    IMAGE_RISK_THRESHOLD: parseFloat(process.env.IMAGE_RISK_THRESHOLD) || 0.3,
    AUDIO_RISK_THRESHOLD: parseFloat(process.env.AUDIO_RISK_THRESHOLD) || 0.2,
    TEXT_HIGH_RISK_KEYWORDS: (process.env.TEXT_HIGH_RISK_KEYWORDS || 'help,emergency,attack').split(',')
  },

  // ================== SOS SERVICE ==================
  SOS: {
    LIVE_LOCATION_TTL_MS: parseInt(process.env.LIVE_LOCATION_TTL_MS) || 5 * 60 * 1000, // 5 minutes
    SEVERITY_LEVELS: ['low', 'medium', 'high'],
  },

  // ================== ANALYTICS ==================
  ANALYTICS: {
    DEFAULT_PAGE_SIZE: parseInt(process.env.ANALYTICS_PAGE_SIZE) || 20
  },

  // ================== DATABASE / STORAGE ==================
  DB: {
    // Example: placeholder for D1 or Mongo URL
    D1_URL: process.env.D1_URL || '',
    MONGO_URI: process.env.MONGO_URI || '',
  },

  // ================== OTHER CONSTANTS ==================
  LOGGING_ENABLED: process.env.LOGGING_ENABLED !== 'false', // default true
};