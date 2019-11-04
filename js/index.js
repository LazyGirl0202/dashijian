$(function(){
      // 获取最新评论信息
      var myDate = new Date()
      var month=myDate.getMonth()+1;
      console.log(month);
      
      $.ajax({
        type: 'get',
        url: 'http://47.111.184.55:8888/api/v1/index/latest_comment',
        success: function (data) {
          // console.log(data);
          data.month=month;
          console.log(data);
          
          var html = template('comment_listBoxTpl', data)
          // console.log(html);
  
          $('#comment_listBox').html(html);
        }
  
      })
  
      // 获取焦点关注信息
      $.ajax({
        type: 'get',
        url: 'http://47.111.184.55:8888/api/v1/index/attention',
        success: function (data) {
          console.log(data);
          var html = template('guanzhu_listBoxTpl', data)
          $('#guanzhu_listBox').html(html);
        }
  
      })
})