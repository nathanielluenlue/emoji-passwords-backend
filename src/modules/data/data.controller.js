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

    const { password, username } = req.body;
    const account = await service.updatePassword(password, username);
    res.json(account);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

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