function initColumns() {
  jQuery(".column").sortable({connectWith: "ul"});
}

jQuery(document).ready(function(){
  initColumns();
});
