function parseColumns(entries) {
  let query = ""
  for (const [i, column] of entries.entries()) {
    if (i === entries.length - 1) query += `${column}`
    else query += `${column}` + ", "
  }
  return query
}
function parseData(entries) {
  let query = ""
  for (const [i, column] of entries.entries()) {
    if (i === entries.length - 1) query += `'${column}'`
    else query += `'${column}'` + ", "
  }
  return query
}
function update(data) {
  let query = ""
  for (const [i, column] of Object.keys(data).entries()) {
    if (i === Object.keys(data).length - 1)
      query += `${column} = '${data[column]}'`
    else query += `${column} = '${data[column]}'` + ", "
  }
  return query
}

module.exports = {
  /**
   * Returns INSERT INTO {table} query string
   *
   * @param {String} table
   * @param {Array} values
   * @return {String}
   */
  insertQuery(table, data) {
    try {
      let query = ""
      if (data instanceof Array) {
        for (const item of data) {
          query += `INSERT INTO ${table} (${parseColumns(
            Object.keys(item)
          )}) VALUES(${parseData(Object.values(item))});`
        }
      } else {
        query += `INSERT INTO ${table} (${parseColumns(
          Object.keys(data)
        )}) VALUES(${parseData(Object.values(data))});`
      }
      return query
    } catch (error) {
      throw error
    }
  },
  updateQuery(table, id, data) {
    try {
      let query = ""

      query += `UPDATE ${table} SET ${update(data)} where id = ${id};`
      return query
    } catch (error) {
      throw error
    }
  },
  selectQuery(table, id) {
    try {
      let query = `Select * from  ${table} where id = ${id}`
      return query
    } catch (error) {
      throw error
    }
  },
  deleteQuery(table, id) {
    try {
      let query = `DELETE from  ${table} where id = ${id}`
      return query
    } catch (error) {
      throw error
    }
  },
}
