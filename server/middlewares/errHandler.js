async function errHandler(err, req, res, next) {
  let message;
  let status_code;

  switch (err.name) {
    case "Bad Request":
      message = "Your name is already used";
      status_code = 400;
      break;
  }
  res.status(status_code).json({ message });
}

module.exports = { errHandler };
