const service = require("./data.service");


async function updateTimeToCreatePassword(req, res) {
  try {
    const account = await service.updateTimeToCreatePassword();
    res.json(account);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

async function checkPassword(req, res) {
  try {
    const { username, password } = req.body;
    const account = await service.checkPassword(username, password);
    await service.updateNumberOfLogInAttempts();
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
    console.log("==== DEBUG ====");
    console.log("Headers:", req.headers["content-type"]);
    console.log("Body:", req.body);
    console.log("Password:", req.body.password);
    console.log("================");

    const { username, password } = req.body;

    const account = await service.updatePassword(username, password);

    res.json({ success: true, data: account });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      error: {
        message: err.message || "Server error",
        code: err.code || "SERVER_ERROR",
      },
    });
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
    checkPassword,
    updateNumberOfLogInAttempts,
    updateTimeTakenToLogIn,
    updatePassword,
    updateUsername
};