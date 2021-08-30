$(document).ready(function() {
    $.ajax({
        url: "https://gateway.dev.cpwys.co/api/v1/content/fetch/learnmoney"
    }).then(function(data) {
       $('.know-id').append(data.id);
       $('.know-content').append(data.content);
    });
});