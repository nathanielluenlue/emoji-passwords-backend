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

async function checkPassword(username, password) {
  if (!username || !password) {
    throw new Error("Username and password are required");
  }

  const { rows } = await pool.query(
    `
    SELECT id, device_id, username, password, created_at
    FROM users
    WHERE username = $1
    `,
    [username]
  );

  const user = rows[0];

  if (!user) {
    throw new Error("User not found");
  }

  if (user.password !== password) {
    throw new Error("Incorrect password");
  }

  return user;
}

async function updateNumberOfLogInAttempts(accountId) {
  if (!accountId) {
    throw new Error("accountId is required");
  }

  const { rows } = await pool.query(
    `
    UPDATE accounts
    SET number_of_log_in_attempts = COALESCE(number_of_log_in_attempts, 0) + 1
    WHERE id = $1
    RETURNING id, device_id, username, number_of_log_in_attempts, created_at;
    `,
    [accountId]
  );

  if (!rows.length) {
    throw new Error("User not found");
  }

  return rows[0];
}

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

async function updatePassword(username, password) {
  if (!username || !password) {
    throw new Error("Missing username or password");
  }

  const { rows } = await pool.query(
    `
    UPDATE users
    SET password = $1
    WHERE username = $2
    RETURNING *;
    `,
    [password, username]
  );

  if (!rows.length) {
    throw new Error("User not found");
  }

  return rows[0]; 
}

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
    checkPassword ,
    updateNumberOfLogInAttempts,
    updateTimeTakenToLogIn,
    updatePassword,
    updateUsername
};