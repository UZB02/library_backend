import admins from "../data/admins.js";

async function getAdmins(req, res) {
  res.send(admins);
}

async function getAdmin(req, res) {
  const { token } = req.params;
  const admin = admins.find((a) => a.token === token);
  if (admin) {
    res.send(admin);
  } else {
    res.status(401).json({ message: "Token not found" });
  }
}

async function adminLogin(req, res) {
  const { username, password } = req.body;
  const admin = admins.find(
    (a) => a.username === username && a.password === password
  );
  if (admin) {
    const token = Math.random().toString(36).substr(2, 10);
    admin.token = token;
    res.json({ admin, token });
  } else {
    res.status(401).json({ message: "Foydalanuvchi topilmadi" });
  }
}

export { getAdmins, getAdmin, adminLogin };
