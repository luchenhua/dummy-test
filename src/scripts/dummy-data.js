var obj = window.location;
var path = obj.protocol + '//' + obj.host;

/* 通过Mock生成Dummy数据, 拦截ajax请求, 并模拟返回Json数据 */
var random = Mock.Random;

Mock.mock(
    path + '/user/get',
    'get',
    {
        'name': '@name',
        'age|1-100': 100,
        'color': '@color'
    }
);

Mock.mock(
    path + '/user/post',
    'post',
    {
        'sentence': random.csentence(),
        'paragraph': '@cparagraph',
        'image': random.image('200x100', '#50B347', '#FFF', 'Mock.js')
    }
);
