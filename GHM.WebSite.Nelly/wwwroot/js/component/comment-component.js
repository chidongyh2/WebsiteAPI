
ko.components.register('comment-component', {
    viewModel: function (params) {
        var self = this;
        self.objectId = params.objectId ? ko.observable(params.objectId) : ko.observable(-1);
        self.objectType = params.objectType ? ko.observable(params.objectType) : ko.observable(-1);
        self.isShowTitle = params.isShowTitle !== null ? ko.observable(params.isShowTitle) : ko.observable(true);

        self.listComments = ko.observableArray([]);

        self.getComment = function () {
            $.get('/get-comment', {
                objectId: self.objectId(),
                objectType: self.objectType(),
                page: 1,
                pageSize: 20
            }, function (data) {
                    self.listComments(data.items);
                    console.log(data.items);
            });
        };

        $(document).ready(function () {
            self.getComment();
        });
    },
    template: `<div class="comments">
       <div class="line"></div>    
         <!--ko if: isShowTitle() -->
            <h3 class="title">Bình luận</h3>
          <!--/ko-->
           <comment-box-component params="objectId: objectId, objectType: objectType"></comment-box-component>
           <comment-list-component params="objectId: objectId, objectType: objectType, listComments: listComments"></comment-list-component>
       </div>`
});