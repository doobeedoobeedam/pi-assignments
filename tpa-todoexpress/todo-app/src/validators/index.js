const { body, validationResult } = require("express-validator");
exports.userValidator = (method) => {
  if (method == "register") {
    return [
      body("name", "Nama tidak boleh kosong!").not().isEmpty(),
      body("email", "Email tidak boleh kosong!").not().isEmpty(),
      body("email", "Format email tidak di ketahui!").isEmail(),
      body("password", "password tidak boleh kosong!").not().isEmpty(),
      body("password", "Password minimal 6 karakter!").isLength({
        min: 6,
      }),
    ];
  }
  if (method == "login") {
    return [
      body("email", "Email tidak boleh kosong!").not().isEmpty(),
      body("email", "Format email tidak di ketahui!").isEmail(),
      body("password", "password tidak boleh kosong!").not().isEmpty(),
      body("password", "Password minimal 6 karakter!").isLength({
        min: 6,
      }),
    ];
  }
};
exports.todoValidator = (method) => {
  if (method == "create-new-todo") {
    return [body("task", "Task tidak boleh kosong!").not().isEmpty()];
  }
};
// exports.results = (req, res) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res
//       .status(422)
//       .json({ success: false, message: { errors: errors.array() } });
//   }
// };
