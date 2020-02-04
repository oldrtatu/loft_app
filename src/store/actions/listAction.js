const Action = require("../actions");
const Database = require("../../utils/@loftsdk/database");

const fetchList = async dispatch => {
  try {
    let data = await new Database().getArchive();
    console.log("fetched");
    dispatch({ type: Action.FETCH_LIST, payload: data });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { fetchList };
