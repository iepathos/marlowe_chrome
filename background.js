function getObjectivity(info, tab) {
  var scores = [];
  var urls = ['https://morning-harbor-96808.herokuapp.com', 'https://desolate-bastion-86556.herokuapp.com']
  $(urls).each(function() {
    $.ajax({
      type: 'POST', 
      url: this, 
      dataType: 'json',
      data: {"text": info.selectionText},
      success: function (data) {
        scores.push(Math.round(data.objectivity * 100));
        if (scores.length == urls.length) {
          sum = 0;
          for(var i = 0, len = scores.length; i < len; i++) {
              sum += scores[i];
          }
          alert(sum/2 + "% objective");
        }
      }
    });
  });
}
chrome.contextMenus.create({
  title: "Objectivity: %s", 
  contexts:["selection"], 
  onclick: getObjectivity,
});