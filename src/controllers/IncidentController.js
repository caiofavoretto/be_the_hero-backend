const connection = require('../database/connection');

module.exports = {
  async index(req, res) {
    const incidents = await connection('incidents').select('*');

    return res.json(incidents);
  },

  async store(req, res) {
    const { title, description, value } = req.body;
    const { authorization: ong_id } = req.headers;

    const [id] = await connection('incidents').insert({
      title,
      description,
      value,
      ong_id
    });

    return res.json({ id });
  },

  async destroy(req, res) {
    const { id } = req.params;
    const { authorization: ong_id } = req.headers;

    const incident = await connection('incidents')
      .where('id', id)
      .select('ong_id')
      .first();

    if (incident.ong_id !== ong_id) {
      return res.status(401).json({ error: 'Operation not permitted.' });
    }

    await connection('incidents')
      .where('id', id)
      .delete();

    return res.status(204).send();
  }
};