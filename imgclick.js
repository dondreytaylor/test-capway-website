jQuery(document).ready(function($){

$('.black-button').on({
     'click': function(){
         $('#change-image').attr('src','/https://capway-storage.s3.us-west-1.amazonaws.com/any/0aedc93bb761042906f315197d6b97bc/0aedc93bb761042906f315197d6b97bc.png');
     }
 });
 
$('.red-button').on({
     'click': function(){
         $('#change-image').attr('src','/wp-content/uploads/2018/09/red.jpg');
     }
 });
 
$('.blue-button').on({
     'click': function(){
         $('#change-image').attr('src','/wp-content/uploads/2018/09/blue.jpg');
     }
 });
 
$('.yellow-button').on({
     'click': function(){
         $('#change-image').attr('src','/wp-content/uploads/2018/09/yellow.jpg');
     }
 });

 $('.yellow-button').on({
    'click': function(){
        $('#change-image').attr('src','/wp-content/uploads/2018/09/yellow.jpg');
    }
});
});

