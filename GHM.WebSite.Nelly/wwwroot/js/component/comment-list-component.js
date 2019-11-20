
ko.components.register('comment-list-component', {
    viewModel: function (params) {
        var self = this;
        self.objectId = params.objectId ? params.objectId : ko.observable(-1);
        self.objectType = params.objectType ? params.objectType : ko.observable(-1);
        self.listComments = params.listComments ? params.listComments : ko.observableArray([]);        

        $(document).ready(function () {
        });
    },
    template: `<div class="list-comment" data-bind="foreach: listComments">
       <div class="comment-item">
          <div class="avatar">
                <img src="/images/no-avartar.jpg" style="width:100%">
            </div>  
                <div class="content">
                    <p class="intro">
                            <strong class="name" data-bind="text:  fullName "></strong>
                            <span data-bind="moment(createTime).fromNow()"></span>
                    </p>
                <div class="comment-details" data-bind="text: content ">
                </div>
                </div>
             </div>   
         </div>  
 </div>  
       </div>`
});