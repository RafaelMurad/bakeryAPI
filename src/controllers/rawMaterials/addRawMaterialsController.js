async function addRawMaterials(req, res) {
  try {
    const { name, quantity, user } = req.body;
    return res.json({
      name,
      quantity,
      user,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

module.exports = addRawMaterials;
