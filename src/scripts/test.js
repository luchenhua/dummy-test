// 头部JS
function testJson() {
    var obj=window.location;
    var path = obj.protocol + '//' + obj.host;

    /* 通过Mock生成Dummy数据, 拦截ajax请求, 并模拟返回Json数据 */
    Mock.mock(
        path + '/user/get',
        'get',
        {
            'name': '@name',
            'age|1-100': 100,
            'color': '@color'
        }
    );

    var url = path + '/user/get';
    var param = '';
    var success = function (result) {
        $('.dummy').append('<br/>' + result.name);
        $('.dummy').append('<br/>' + result.age);
        $('.dummy').append('<br/>' + result.color);
    };
    $.get(url, param, success, 'json');
}
