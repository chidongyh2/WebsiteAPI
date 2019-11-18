
ko.components.register('comment-component', {
    viewModel: function (params) {
        var self = this;
        self.objectId = params.objectId ? params.objectId : ko.observable(-1);
        self.objectType = params.objectType ? params.objectType : ko.observable(-1);
        self.objectName = params.objectName ? params.objectName : ko.observable();
        self.listComments = params.listComments ? params.listComments : ko.observableArray([]);
    },
    template: `<div class="comments">
       <div class="line"></div>
            <h3 class="title">Bình luận</h3>       
            <comment-box-component></comment-box-component>
       </div>`
});