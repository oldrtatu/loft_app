import URL from "../../config/urls";

const DatatableEvents = {
  newForm: function(e, formName, windowName) {
    e.preventDefault();
    electronRenderer.send("create_new_window", {
      url: `${URL.FORM_WINDOW}/${formName}`,
      name: `${windowName}FormWindow`
    });
  },

  editForm: function(formName, windowName, id) {
    electronRenderer.send("create_new_window", {
      url: `${URL.FORM_WINDOW}/${formName}/${id}`,
      name: `${windowName}FormWindow${id}`
    });
  }
};

export default DatatableEvents;
