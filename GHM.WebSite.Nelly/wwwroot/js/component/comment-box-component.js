ko.components.register('comment-box-component', {
    viewModel: function (params) {
        var self = this;
        self.listComment = params.comments ? params.comments : ko.observableArray([]);
    },
    template: `<div class="comments">
      <form id="postComment" class="">
      <input class="form-control" type="text" id="UserFullname" name="UserFullname" placeholder="Họ tên của bạn">
       <input class="form-control" type="text" id="UserEmail" name="UserEmail" placeholder="Email của bạn"> 
       <textarea class="form-control" spellcheck="false" placeholder="Mời bạn nhập câu hỏi hoặc đánh giá cho sản phẩm." id="txtComment"></textarea> 
       <button type="submit" class="btn btn-primary">Gửi bình luận</button></form>
       
</div>`
});
