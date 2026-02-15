const pool = require("../../config/db.js");

async function checkPassword(username, password) {
  if (!username || !password) {
    throw new Error("Username and password are required");
  }

  const { rows } = await pool.query(
    `
    SELECT id, username, password, created_at
    FROM users
    WHERE username = $1
    `,
    [username]
  );

  await pool.query(
    `
    UPDATE user
    SET number_of_log_in_attempts = COALESCE(number_of_log_in_attempts, 0) + 1
    WHERE username = $1
    `,
    [accountId]
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
    checkPassword ,
    updatePassword,
    updateUsername
};