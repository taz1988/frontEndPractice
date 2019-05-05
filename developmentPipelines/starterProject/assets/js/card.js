function createNewCard(column)
{
  jQuery(column).parent().append('<li class="card">' + jQuery("#card-text").val() + '</li>');
}

function createNewCardDialog(event)
{
  jQuery("#card-text").val("");
  $("#create-card").dialog();
  $("#add-card-button").click(function(){
    createNewCard(event.toElement);
    $("#create-card").dialog('close');
    $("#add-card-button").off("click");
  });
}

jQuery(document).ready(function(){
  jQuery(".column").dblclick(createNewCardDialog);
});
