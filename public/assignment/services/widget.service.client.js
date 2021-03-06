(function () {
    angular
        .module("WebAppMaker")
        .service("WidgetService", WidgetService);

    function WidgetService($http) {

        this.findWidgetsByPageId = findWidgetsByPageId;
        this.findWidgetById = findWidgetById;
        this.updateWidget = updateWidget;
        this.deleteWidget = deleteWidget;
        this.createWidget = createWidget;
        // this.reorderWidget = reorderWidget;

        function findWidgetsByPageId(pageId) {
            return $http.get("/api/page/"+pageId+"/widget");
        }

        function findWidgetById(widgetId) {
            return $http.get("/api/widget/"+widgetId);
        }

        function updateWidget(widgetId,newWidget) {
            return $http.put("/api/widget/"+widgetId,newWidget);
        }

        function deleteWidget(widgetId) {
            return $http.delete("/api/widget/"+widgetId);
        }

        function createWidget(pageId,newWidget) {
            return $http.post("/api/page/"+pageId+"/widget",newWidget);
        }

        // function reorderWidget(pageId, index1, index2) {
        //     return $http.put("/page/" + pageId + "/widget?initial=" + index1 + "&final=" + index2);
        // }
    }
})();