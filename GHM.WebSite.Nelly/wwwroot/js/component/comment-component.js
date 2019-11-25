
ko.components.register('comment-component', {
    viewModel: function (params) {
        var self = this;
        self.objectId = params.objectId ? params.objectId : -1;
        self.objectType = params.objectType !== null ? params.objectType : -1;
        self.isShowTitle = params.isShowTitle ? ko.observable(params.isShowTitle) : ko.observable(true);
        self.totalRows = ko.observable(0);
        self.pageSize = ko.observable(20);
        self.currentPage = ko.observable(1);
        self.totalPage = ko.observable(1);
        self.listPage = ko.observableArray([]);
        self.listComments = ko.observableArray([]);

        self.rendTree = function (data) {
            _.each(data, function (item) {
                item.state.show = ko.observable(false);
                if (item.children && item.children.length > 0) {
                    self.rendTree(item.children);
                }
            });
        };

        self.getComment = function (currentPage) {
            self.currentPage(currentPage);
            $.get('/get-comment', {
                objectId: self.objectId,
                objectType: self.objectType,
                page: self.currentPage(),
                pageSize: 20
            }, function (data) {
                self.rendTree(data.items);
                self.totalRows(data.totalRows);
                self.renderPage(self.totalRows());
                self.listComments(data.items);
            });
        };

        self.postComment = function (value) {
            self.getComment(self.currentPage());
        };

        self.renderPage = function (totalRows) {
            self.totalRows(totalRows);
            self.totalPage(Math.ceil(self.totalRows() / self.pageSize()));
            self.listPage([]);
            if (self.totalPage() > 1) {
                for (var i = 1; i <= self.totalPage(); i++) {
                    self.listPage.push({
                        page: i
                    });
                }
            }
        };

        self.searchPageIndex = function (data) {
            self.currentPage(data.page);
            self.getComment(self.currentPage());
        };

        self.firstPage = function () {
            self.currentPage(1);
            self.getComment(1);
        };

        self.lastPage = function () {
            self.currentPage(self.totalPage());
            self.getComment(self.currentPage());
        };

        self.prevPage = function () {
            self.currentPage(self.currentPage() - 1);
            self.getComment(self.currentPage());
        };

        self.nextPage = function () {
            self.currentPage(self.currentPage() + 1);
            self.getComment(self.currentPage());
        };

        $(document).ready(function () {
            self.getComment(1);
        });
    },
    template: `<div class="comments">
    <!--ko if: isShowTitle() -->
    <div class="line"></div>
    <h3 class="title">Bình luận</h3>
    <!--/ko-->
    <comment-box-component params="objectId: objectId, objectType: objectType, postComment: postComment"></comment-box-component>
    <h2 class="comment-no">
               <b data-bind="text: totalRows()"></b>
                Bình luận.           
     </h2>
    <comment-list-component params="objectId: objectId, objectType: objectType, listComments: listComments, getComment: getComment"></comment-list-component>
    <!--ko if: totalPage() > 1-->
    <div class="row">
        <div class="col-sm-12 center" style="text-align:center">
            <ul class="pagination" data-bind="foreach: listPage()">
                <!--ko if: page === 1-->
                <li>
                    <a data-bind="css: $parent.currentPage() === 1 ? 'disabled' :  '', click: $parent.firstPage" href="#">
                        <i class="fa fa-angle-double-left"></i>
                    </a>
                </li>
                <li>
                    <a data-bind="css: $parent.currentPage() === 1 ? 'disabled bg-none' :  'bg-none', click: $parent.prevPage" href="#">
                        <i class="fa fa-angle-left"></i>
                    </a>
                </li>
                <!--/ko-->
                <li>
                    <a data-bind="css: $parent.currentPage() === page ? 'active' : '', text: page, click: $parent.searchPageIndex.bind($data)" href="#"></a>
                </li>
                <!--ko if: page === $parent.totalPage()-->
                <li>
                    <a data-bind="css: $parent.currentPage() === $parent.totalPage() ? 'disabled bg-none' : 'bg-none', click: $parent.nextPage" href="#">
                        <i class="fa fa-angle-right"></i>
                    </a>
                </li>
                <li>
                    <a data-bind="css: $parent.currentPage() === $parent.totalPage() ? 'disabled' : '', click: $parent.lastPage" href="#">
                        <i class="fa fa-angle-double-right"></i>
                    </a>
                </li>
                <!--/ko-->
            </ul>
        </div>
    </div>
    <!--/ko-->
</div>`
});