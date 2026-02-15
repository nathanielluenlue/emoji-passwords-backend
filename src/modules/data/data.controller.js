const service = require("./data.service");


async function updateTimeToCreatePassword(req, res) {
  try {
    const account = await service.updateTimeToCreatePassword();
    res.json(account);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

async function getPassword(req, res) {
  try {
    const account = await service.getPassword();
    res.json(account);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

async function updateNumberOfLogInAttempts(req, res) {
  try {
    const account = await service.updateNumberOfLogInAttempts();
    res.json(account);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

async function updateTimeTakenToLogIn(req, res) {
  try {
    const account = await service.updateTimeTakenToLogIn();
    res.json(account);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

async function updatePassword(req, res) {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ error: "Missing username or password" });
    }

    const { rows } = await pool.query(
      `UPDATE users
       SET password = $1
       WHERE username = $2
       RETURNING *;`,
      [password, username]
    );

    if (!rows.length) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({ success: true, data: rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message || "Server error" });
  }
}


async function updateUsername(req, res) {
  try {
    console.log("update username");
    const { username } = req.body;
    const account = await service.updateUsername(username);
    res.json(account);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
    updateTimeToCreatePassword,
    getPassword,
    updateNumberOfLogInAttempts,
    updateTimeTakenToLogIn,
    updatePassword,
    updateUsername
};