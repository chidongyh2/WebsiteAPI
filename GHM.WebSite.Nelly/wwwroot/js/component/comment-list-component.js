ko.components.register('comment-list-component', {
    viewModel: function (params) {
        var self = this;
        self.objectId = params.objectId ? params.objectId : -1;
        self.objectType = params.objectType ? params.objectType : -1;
        self.listComments = params.listComments ? params.listComments : ko.observableArray([]);

        $(document).ready(function () {
           //  console.log(self.objectId, 'nam');
        });
    },
    template: `<div class="list-comment" data-bind="foreach: listComments">
    <div class="comment-item">
        <div class="media">
            <div class="media-left">
                <div class="avatar">
                    <img src="/images/no-avartar.jpg" class="img-circle" style="width:100%">
                </div>
                <div class="media-body">
                    <div class="content">
                        <p class="intro">
                            <strong class="name" data-bind="text: data.fullName "></strong>
                            <span data-bind="text: moment(data.createTime, 'DD/MM/YYYY').fromNow()"></span>
                        </p>
                        <div class="comment-details" data-bind="text: data.content ">
                        </div>
                        <p class="tools">
                            <a href="javascript:;" class="showComment" data-bind="click: function(data){ data.state.show(!data.state.show());}">
                            <span>Trả lời</span> <i class="fa fa-comments"></i> </a>                   
                        </p>
                         <!--ko if: state.show()-->                        
                         <comment-box-component params="objectId: $parent.objectId, objectType: $parent.objectType, parentId: id"></comment-box-component>
                         <!--/ko-->
                         <!--ko if: childCount > 0-->
                               <div class="children">
                               <comment-list-component params="objectId: $parent.objectId, objectType: $parent.objectType, listComments: children"></comment-list-component> 
                               </div>
                         <!--/ko-->
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`
});