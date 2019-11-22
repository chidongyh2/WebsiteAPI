
ko.components.register('comment-component', {
    viewModel: function (params) {
        var self = this;
        self.objectId = params.objectId ? params.objectId : -1;
        self.objectType = params.objectType ? params.objectType : -1;
        self.isShowTitle = params.isShowTitle !== null ? ko.observable(params.isShowTitle) : ko.observable(true);
        self.listComments = ko.observableArray([]);

        self.rendTree = function (data) {
            _.each(data, function (item) {
                item.state.show = ko.observable(false);
                if (item.children && item.children.length > 0) {
                    self.rendTree(item.children);
                }
            });
        };

        self.getComment = function () {
            $.get('/get-comment', {
                objectId: self.objectId,
                objectType: self.objectType,
                page: 1,
                pageSize: 20
            }, function (data) {
                    self.rendTree(data.items);
                    self.listComments(data.items);
                    console.log(self.listComments());
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
            <comment-box-component params="objectId: objectId, objectType: objectType"></comment-box-component>
            <!--/ko-->
            <h2 class="comment-no">
               <b data-bind="text: listComments().length"></b>
                Bình luận.           
            </h2>
           <comment-list-component params="objectId: objectId, objectType: objectType, listComments: listComments"></comment-list-component>
       </div>`
});