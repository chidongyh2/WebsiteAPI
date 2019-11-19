
ko.components.register('comment-component', {
    viewModel: function (params) {
        var self = this;
        self.objectId = params.objectId ? ko.observable(params.objectId) : ko.observable(-1);
        self.objectType = params.objectType ? ko.observable(params.objectType) : ko.observable(-1);
        self.listComments = params.listComments ? params.listComments : ko.observableArray([]);
    },
    template: `<div class="comments">
       <div class="line"></div>
            <h3 class="title">Bình luận</h3>       
            <comment-box-component params="objectId: objectId, objectType: objectType"></comment-box-component>
       </div>`
});