const pool = require("../../config/db.js");

async function updateTimeToCreatePassword(accountId) {
  const { rows } = await pool.query(
    `
    SELECT id, device_id, username, created_at 
    FROM accounts 
    WHERE id=$1
    `,
    [accountId]
  );
  return rows[0];
};

async function getPassword(accountId) {
  const { rows } = await pool.query(
    `
    SELECT id, device_id, username, created_at 
    FROM accounts 
    WHERE id=$1
    `,
    [accountId]
  );
  return rows[0];
};

async function updateNumberOfLogInAttempts(accountId) {
  const { rows } = await pool.query(
    `
    SELECT id, device_id, username, created_at 
    FROM accounts 
    WHERE id=$1
    `,
    [accountId]
  );
  return rows[0];
};

async function updateTimeTakenToLogIn(accountId) {
  const { rows } = await pool.query(
    `
    SELECT id, device_id, username, created_at 
    FROM accounts 
    WHERE id=$1
    `,
    [accountId]
  );
  return rows[0];
};

async function updatePassword(accountId) {
  const { rows } = await pool.query(
    `
    SELECT id, device_id, username, created_at 
    FROM accounts 
    WHERE id=$1
    `,
    [accountId]
  );
  return rows[0];
};

async function updateUsername(accountId) {
  const { rows } = await pool.query(
    `
    SELECT id, device_id, username, created_at 
    FROM accounts 
    WHERE id=$1
    `,
    [accountId]
  );
  return rows[0];
};

module.exports = {
    updateTimeToCreatePassword,
    getPassword,
    updateNumberOfLogInAttempts,
    updateTimeTakenToLogIn,
    updatePassword,
    updateUsername
};