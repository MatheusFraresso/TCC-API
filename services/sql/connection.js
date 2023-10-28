const { Pool } = require("pg")

async function sqlConnect() {
  if (global.sql) return global.sql.connect()

  try {
    const pool = new Pool({
      connectionString: process.env.PG_CONNECTION_STRING,
      ssl: true,
    })
    const client = await pool.connect()
    client.release()

    //guardando para usar sempre o mesmo
    global.sql = pool
    return pool.connect()
  } catch (error) {
    console.error("Erro na conexão com o SQL \n" + error)
  }
}
module.exports = {
  sqlConnect,
}
