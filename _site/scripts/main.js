$(document).ready(function()) {

  var flik = $('.myTimeline').flikTimeline({
 style: 'style1',
 showDate: true,
 showTitle: true,

 requestData: {
     type: 'GET',
     url: 'http://cidcode.net/timelineapi/timeline_1',
     data: '',
     onRequestDone: function (data) {
         console.log('onRequestDone');
      },
      onRequestFail: function (e) {
         console.log('onRequestFail');
     }
  },
  loadingMessage: "<center style='color:white'>loading</center>",
  delay: 500,effect:'basic'
  });

});
