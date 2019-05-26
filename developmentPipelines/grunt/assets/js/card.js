function createNewCard(column)
{
  jQuery(column).parent().append('<li class="card">' + jQuery("#card-text").val() + '</li>');
}

function createNewCardDialog(event)
{
  jQuery("#card-text").val("");
  jQuery("#create-card").dialog();
  jQuery("#add-card-button").click(function(){
    createNewCard(event.toElement);
    jQuery("#create-card").dialog('close');
    jQuery("#add-card-button").off("click");
  });
}

jQuery(document).ready(function(){
  jQuery(".column").dblclick(createNewCardDialog);
});
