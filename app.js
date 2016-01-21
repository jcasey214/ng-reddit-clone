var app = angular.module('reddit-clone', []);
var today = new Date();



var redditPosts = [{
  title:'Can\'t decide which is more adorable...the smile or the big puppy paws' ,
  author:'bullz29' ,
  image:'http://i.imgur.com/m8YJ2ho.jpg?2' ,
  description: 'adorable puppies do adorable things' ,
   date: today - 10000 ,
   upvotes:0,
   comments: ['fuck yeah', 'nooooooo']
 },{
   title:'All done with his puppy vaccinations!' ,
   author:'Le7els' ,
   image:'https://i.imgur.com/WBdUBl0.jpg?1' ,
   description: 'adorable puppies do adorable things' ,
   date: today - 500 ,
   upvotes:0,
   comments: ['i like turtles']
 }, {
   title:'I get woken up every morning by this cute girl' ,
   author:'Charlottee19' ,
   image:'http://i.imgur.com/RmbnbOLh.jpg' ,
   description: 'adorable ferrets do adorable things' ,
    date: today - 100000000000 ,
    upvotes:0,
   comments: ['best dog ever', 'not a dog, genius']
  }, {
    title:'When giving your dog a bath turns into a Sarah McLachlan commercial' ,
    author:'bjl0924' ,
    image:'http://i.imgur.com/4tFrA4w.jpg' ,
    description: 'sad wet dog' ,
     date: today - 30000 ,
     upvotes:0,
     comments: [] }];


app.controller('reddit', function($scope){
  $scope.posts = redditPosts;
  $scope.inputHidden = true;
  $scope.commentsHidden = true;
  $scope.addPost = function(){
    if($scope.newPost.title.$valid && $scope.newPost.author.$valid && $scope.newPost.description.$valid && $scope.newPost.image.$valid){
      redditPosts.push({title: $scope.newPost.title.$modelValue, author: $scope.newPost.author.$modelValue,
            image: $scope.newPost.image.$modelValue,
            description: $scope.newPost.description.$modelValue,
            date: new Date(),
            upvotes: 0});
            $scope.title = '';
            $scope.author = '';
            $scope.image = '';
            $scope.description = '';
        }
    };
      $scope.toggleInput = function(){
    $scope.inputHidden = !$scope.inputHidden;
  };
  $scope.toggleComments = function(post){
    $scope.commentsHidden = !$scope.commentsHidden;
  }
});
