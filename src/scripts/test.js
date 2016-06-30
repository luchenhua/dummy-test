var obj = window.location;
var path = obj.protocol + '//' + obj.host;

function testJsonGet() {

    var url = path + '/user/get';
    var param = '';

    var success = function (result) {
        $('.dummy').append('<br/>姓名: ' + result.name);
        $('.dummy').append('<br/>年龄: ' + result.age);
        $('.dummy').append('<br/>颜色: <font color=\"' + result.color + '\">随机颜色</font>');
    };

    $.get(url, param, success, 'json');
}

function testJsonPost() {

    var url = path + '/user/post';
    var param = '';

    var success = function (result) {
        $('.dummy').append('<br/>语句: ' + result.sentence);
        $('.dummy').append('<br/>段落: ' + result.paragraph);
        $('.dummy').append('<br/>图片: <img src=\"' + result.image + '\" />');
    };

    $.post(url, param, success, 'json');
}
