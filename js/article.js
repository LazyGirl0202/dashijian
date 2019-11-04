$(function(){
    var id = getUrlParams('id');
    // 从浏览器的地址栏中获取查询参数
    function getUrlParams(name) {
      var paramsAry = location.search.substr(1).split('&');
      // 循环数据
      for (var i = 0; i < paramsAry.length; i++) {
        var tmp = paramsAry[i].split('=');
        if (tmp[0] == name) {
          return tmp[1];
        }
      }
      return -1;
    }
    console.log(id);
    // 评论表单上传
    if (id != -1) {
      $('#comment_formBox').on('submit', function () {
        $('#form_groupHidden').val(id);
        var formData = $(this).serialize();
        console.log(formData);

        $.ajax({
          url: 'http://47.111.184.55:8888/api/v1/index/post_comment',
          type: 'post',
          data: formData,
          success: function (data) {
            console.log(data);
            alert(data)
          },
          error: function (data) {
            console.log(data);
            alert(data.responseJSON.msg)
          }
        })
        // 阻止默认提交
        return false
      })
    }else{
      alert('文章id获取不到')
    }
})