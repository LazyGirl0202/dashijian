$(function(){
    //评论列表展示
    $.ajax({
        url: 'http://47.111.184.55:8888/api/v1/admin/comment/search',
        type: 'get',
        success: function (data) {
          var html = template('commentsTp1', { data: data })
          $('#commentBox').html(html)
  
        }
      })
  
      //评论审核通过
      $('#commentBox').on('click', '.pass', function () {
        var id = $(this).attr('data-id')
        $.ajax({
          url: `http://47.111.184.55:8888/api/v1/admin/comment/pass`,
          data: {
            id: id
          },
          type: 'post',
          success: function (data) {
            // console.log(data);
            location.reload()
          }
  
        })
      })
  
      //评论审核不通过
      $('#commentBox').on('click', '.reject', function () {
        var id = $(this).attr('data-id')
  
        $.ajax({
          url: `http://47.111.184.55:8888/api/v1/admin/comment/reject`,
          data: {
            id: id
          },
          type: 'post',
          success: function (data) {
            // console.log(data);
            location.reload()
          }
        })
      })
  
      //删除评论
      $('#commentBox').on('click', '.delete', function () {
        if (confirm('确认删除？？')) {
          var id = $(this).attr('data-id')
          $.ajax({
            url: `http://47.111.184.55:8888/api/v1/admin/comment/delete`,
            data: {
              id: id
            },
            type: 'post',
            success: function (data) {
              // console.log(data);
              location.reload()
            }
          })
        }
      })
  
})