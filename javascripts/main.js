var app = angular.module("LaurensFavAnimals", []);

app.controller("FavAnimals", ($scope) => {
  $scope.animals = [
        {
          name: "Bear",
          bio: "Roar Imma bear! Grrrrr",
          url: "http://weknowyourdreams.com/images/bear/bear-05.jpg",
        },
        {
          name: "Octopus",
          bio: "I'm the smartest being in the ocean and I have 8 legs",
          url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=&url=http%3A%2F%2Fkids.nationalgeographic.com%2Fcontent%2Fdam%2Fkids%2Fphotos%2Fanimals%2FInvertebrates%2FH-P%2Foctopus.ngsversion.1396531103222.jpg&psig=AFQjCNH7WY-dccoIESQ9LpZzVFUie8Y6hw&ust=1494641994749056",
        },
        {
          name: "Turtle",
          bio: "Live slow, die whenever",
          url: "http://ichef.bbci.co.uk/wwfeatures/wm/live/1280_720/images/live/p0/2g/hc/p02ghcq8.jpg",
        },
        {
          name: "Bearded Dragon",
          bio: "Am I even real?",
          url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=0ahUKEwiV9d_CpOnTAhXMx4MKHXXlAXQQjBwIBA&url=http%3A%2F%2Fvignette4.wikia.nocookie.net%2Fgameofthrones%2Fimages%2F1%2F16%2FDrogonHD.jpg%2Frevision%2Flatest%3Fcb%3D20140404211220&psig=AFQjCNH7g1nrwBOqZcfEi_DyYEWExmcnQg&ust=1494641640065639",
        },
        {
          name: "Monkey",
          bio: "Apparenly we're related",
          url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=0ahUKEwjuiaTqpOnTAhUGxYMKHVQSBCQQjBwIBA&url=http%3A%2F%2Fimages.tritondigitalcms.com%2F6616%2Fsites%2F395%2F2017%2F04%2F04103227%2FMONKEY.jpg&psig=AFQjCNFQjOP37c7EYvNA9k0NaydYPB93IQ&ust=1494641807139064",
        },
        {
          name: "Crab",
          bio: "Taste like crab, talk like people",
          url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=0ahUKEwjpguuFpenTAhUs5YMKHZYWD_kQjBwIBA&url=https%3A%2F%2Fstatic1.squarespace.com%2Fstatic%2F569fdd6d69a91ae72f885f23%2Ft%2F58cfe6e815d5db925b8f5994%2F1490020074713%2Fblues.jpg%3Fformat%3D1500w&psig=AFQjCNGp9svrC9E6_H4WXZgieJ26L861Bg&ust=1494641860867843",
        }
    ];


});