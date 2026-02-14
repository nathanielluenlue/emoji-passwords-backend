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

async function updatePassword(newPassword, newUsername) {
  const { rows } = await pool.query(
    `
    UPDATE users
    SET password = $1
    WHERE username = $2
    RETURNING *;
    `,
    [newUsername, newPassword]
  );
  return rows[0];
};

async function updateUsername(newUsername) {
  const { rows } = await pool.query(
    `
    INSERT INTO users (username)
    VALUES ($1)
    RETURNING *;
    `,
    [newUsername]
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