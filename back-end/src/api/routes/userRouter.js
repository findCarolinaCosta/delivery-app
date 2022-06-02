const { login } = require("../controllers/userController");

router.post("/login", login);

module.exports = router;