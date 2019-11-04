$(function () {
  //1.获取所有文章类别
  $.ajax({
    url: 'http://47.111.184.55:8888/api/v1/admin/category/list',
    type: 'get',
    success: function (data) {
      var html = template('categoryTpl', data)
      $('#tplBox').html(html)
    }
  })

  //2.新增分类
  $('#categoryForm').on('submit', function () {
    // 获取到用户在表单中输入的内容并将内容格式化成参数字符串
    // console.log(123);
    var formData = $(this).serialize();
    console.log(formData)
    $.ajax({
      url: 'http://47.111.184.55:8888/api/v1/admin/category/add',
      type: 'post',
      data: formData,
      success: function (data) {
        location.reload()
      }
    })
    return false
  })

  //3.根据id查询指定文章类别
  // 点击编辑按钮
  $('#tplBox').on('click', '.modify', function () {
    var id = $(this).attr('data-id')
    $.ajax({
      url: 'http://47.111.184.55:8888/api/v1/admin/category/search',
      data: {
        id: id
      },
      success: function (data) {
        console.log(data);
        console.log(data.data[0]);

        var html = template('modifyModalTpl', data.data[0]);
        $('#addModalBox').html(html);
      }
    })
    $('#addModal').modal('show');
  })

  $('#addModal').on('click', '#model_shutoend', function () {
    $('#addModal').modal('hide');
  });


  // 模态框提交表单
  $('#addModal').on('submit', '#modifyModal', function () {
    var formdata = $(this).serialize()
    console.log(formdata);

    $.ajax({
      url: 'http://47.111.184.55:8888/api/v1/admin/category/edit',
      type: 'post',
      data: formdata,
      success: function (data) {
        console.log(data);
        location.reload();
      },
      error: function (data) {
        console.log(data);
      }
    })
    return false
  })



  //5.删除文章类别
  $('#tplBox').on('click', '.delete', function () {
    var id = $(this).attr('data-id')
    console.log(id)
    if (confirm("您确定要删除吗？")) {
      $.ajax({
        url: `http://47.111.184.55:8888/api/v1/admin/category/delete`,
        type: 'post',
        data: { id },
        success: function (data) {
          location.reload()
        }
      })
    }
  })
})