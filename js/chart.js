$(function(){
    //热点图
    $.ajax({
        url: 'http://47.111.184.55:8888/api/v1/index/hotpic',
        success: function (data) {
          // console.log(data)
          var html = template('focuschTpl', { data: data.data })
          $('#focusch').html(html)
          $("#focusch").children(":first").prop('className', 'first')
        }
      })
})