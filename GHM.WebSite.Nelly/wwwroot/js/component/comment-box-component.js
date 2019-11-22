ko.components.register('comment-box-component', {
    viewModel: function (params) {
        var self = this;
        self.objectId = params.objectId ? params.objectId :-1;
        self.objectType = params.objectType ?params.objectType :-1;
        self.parentId = params.parentId ? ko.observable(params.parentId) : ko.observable(null);
        self.userId = params.userId ? params.userId : ko.observable(null);
        self.userType = params.userType ? params.userType : ko.observable(0);
        self.fullName = ko.observable();
        self.email = ko.observable();
        self.content = ko.observable();

        self.isSending = ko.observable(false);

        self.save = function () {
            self.isSending(true);
            
            $.post('/comment', {
                objectId: self.objectId,
                objectType: self.objectType,
                fullName: self.fullName(),
                email: self.email(),
                content: self.content(),
                parentId: self.parentId(),
                userId: self.userId(),
                userType: self.userType(),
                __RequestVerificationToken: token
            }, function (data) {
                self.isSending(false);

                if (data > 0) {
                    self.fullName('');
                    self.email('');
                    self.content('');

                if (params.postComment instanceof Function) {
                      params.postComment(data);
                   }
                    return;
                }

                toastr.error(data);
            });
        };

        $(document).ready(function () {
            // console.log(self.objectId, 'box');
        });
    },
    template: `<div class="box-comment">
       <form id="postComment" class="form-horizontal" data-bind="submit: save">
       <div class="row">
           <div class="col-sm-6">
               <div class="form-group">
                 <input class="form-control" data-bind="value: fullName" placeholder="Họ tên của bạn (bắt buộc)">
                </div>
            </div>
            <div class="col-sm-6">
                <div class="form-group">
                    <input class="form-control" data-bind="value: email" placeholder="Email của bạn"> 
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                 <div class="form-group">
                       <textarea class="form-control" data-bind="value: content" spellcheck="false" placeholder="Mời bạn nhập câu hỏi hoặc đánh giá (bắt buộc)."></textarea> 
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
