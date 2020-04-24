  
function main() {

  */ 
      
      // Submit and create new list item
      $('#js-shopping-list-form').submit(event => {
          // Prevent default behavior or submit button
          event.preventDefault();
  
          // Get text from text box
          let userText = $(event.currentTarget).find('#shopping-list-entry');
          
          // Declare structure
          let structure = [
              '<li>', 
                  '<span class="shopping-item">', userText.val(), '</span>',
                  '<div class="shopping-item-controls">',
                      '<button class="shopping-item-toggle">',
                          '<span class="button-label">check</span>',
                      '</button>',
                      '<button class="shopping-item-delete">',
                          '<span class="button-label">delete</span>',
                      '</button>',
                  '</div>',
              '</li>',
          ];
  
          // Clear input label field
          userText.val('');
  
          // Append shopping list with structure
          $('.shopping-list').append(structure.join(''));
      });
  
      // On click of 'delete' button,
      // delete closest list item
      $('.shopping-item-controls').on('click', '.shopping-item-delete', event => {
          
          // Target and remove closest list item
          $(event.currentTarget).closest('li').remove();
          
      });
  
      // On click of 'check' button, change
      // text-decoration to line-through
      $('.shopping-item-controls').on('click', '.shopping-item-toggle', event => {
  
          // Only target the closest child of the 
          // containing list item and toggle class
          // of that item (the span)
          $(event.currentTarget)
              .closest('li')
              .children()
              .first()
              .toggleClass('shopping-item__checked');
  
      });
  }
  
  $(main);