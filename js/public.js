// 热点图模块
$(function () {
    // 一周热门排行
    $.ajax({
        url: 'http://47.111.184.55:8888/api/v1/index/rank',
        success: function (data) {
            var html = template('contentTpl', { data: data.data })
            $('#constent').html(html)
            $('#constent').children('li:eq(0)').children('span').prop('className', 'first')
            $('#constent').children('li:eq(1)').children('span').prop('className', 'second')
            $('#constent').children('li:eq(2)').children('span').prop('className', 'third')
        }
    })

    // 全部分类
    $.ajax({
        url: 'http://47.111.184.55:8888/api/v1/index/category',
        success: function (data) {
            var index = 0;
            data.data.index = index;
            var html = template('levelTpl', { data: data.data })
            $('#leveler').html(html)
            $('#lefter').html(html)
        }
    })

    // 搜索框

    // $('.search_btn').on('click',function(){
    //   var key = $('.search_txt').val();
    //   $.ajax({
    //     url:'http://47.111.184.55:8888/api/v1/index/search',
    //     type: 'get',
    //     data: {
    //       key:key
    //     },
    //     success: function (data) {
    //       location.href = 'list.html'
    //     }
    //   })
    //   return false
    // })


    // 获取到搜索表单 并为其添加表单提交事件

    $('.search_btn').on('click', function () {
        // 获取到用户在表单中输入的搜索关键字
        var keys = $(".search_form").find('.search_txt').val();
        // 跳转到搜索结果页面 并且将用户输入的搜索关键字传递到搜索结果页面
        location.href = "list.html?key=" + keys
        // 阻止表单默认提交行为
        return false;
    });



    // 业务逻辑代码  搜索文章

    // $('.search_form').on('click', '#icon-search', function () {
    //   //获取用户在表单的内容
    //   var keys = $('.search_form').find('#keys').val()
    //   //跳转到搜索结果页面 并将用户搜索的关键字转替到搜索页面
    //   // location.href = `list.html?key=${keys}`
    //   // return false
    //   $.ajax({
    //     url: 'http://47.111.184.55:8888/api/v1/index/search',
    //     type: 'get',
    //     data: {
    //       key: keys
    //     },
    //     success: function (data) {
    //       location.href = 'list.html?key=${key}'
    //     }
    //   })
    // })

})