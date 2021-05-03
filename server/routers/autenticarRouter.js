const router = require("express").Router();

const { checkToken } = require("../auth/token_validation");

const autenticar = require("../controllers/autenticarController");

const { body, validationResult } = require("express-validator");

router.post(
  "/auth",
  body("usuario").notEmpty().withMessage({
    message: "Debe espesificar el nombre de usuario",
    errorCode: 1,
  }),
  // password must be at least 5 chars long
  body("clave").isLength({ min: 3 }).withMessage({
    message: "La clave debe ser mayor a eso",
    errorCode: 1,
  }).notEmpty().withMessage("Debe espesificar la contraseña"),
  (req, res, next) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array()[0]["msg"]});
    }
    autenticar.login(req, res, next);
  }
);
router.get("/auth", checkToken, autenticar.getUsuarioAutenticado);

module.exports = router;
