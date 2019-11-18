ko.components.register('comment-box-component', {
    viewModel: function (params) {
        var self = this;
        self.objectId = params.objectId ? params.objectId : ko.observable(-1);
        self.objectType = params.objectType ? params.objectType : ko.observable(-1);
        self.parentId = params.parentId ? params.parentId : ko.observable();
        self.isSending = ko.observable(false);


    },
    template: `<div class="box-comment">
       <form id="postComment" class="form-horizontal" >
       <div class="row">
           <div class="col-sm-6">
               <div class="form-group">
                 <input class="form-control" type="text" id="UserFullname" name="UserFullname" placeholder="Họ tên của bạn">
                </div>
            </div>
            <div class="col-sm-6">
                <div class="form-group">
                    <input class="form-control" type="text" id="UserEmail" name="UserEmail" placeholder="Email của bạn"> 
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                 <div class="form-group">
                       <textarea class="form-control" spellcheck="false" placeholder="Mời bạn nhập câu hỏi hoặc đánh giá cho sản phẩm." id="txtComment"></textarea> 
                 </div>
            </div>
        </div>  
        <div class="row">
             <div class="col-sm-12">
                 <button type="submit" class="btn btn-send" data-bind="enable:!isSending()"> 
                     <i class="fa fa-spin fa-spinner" data-bind="visible:isSending()"style="display:none"></i>
                     Gửi bình luận
                  </button>
              </div>
        </div>      
       </form>       
</div>`
});
