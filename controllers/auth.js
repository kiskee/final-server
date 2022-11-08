function register(req, res) {
  console.log("registro ejecutado");

  res.status(200).send({ msg: "All Good" });
}

module.exports = {
  register,
};
