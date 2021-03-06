module.exports = function (app,model) {
    app.post("/api/website/:websiteId/page",createPage);
    app.get("/api/website/:websiteId/page",findAllPagesForWebsite);
    app.get("/api/page/:pageId",findPageById);
    app.put("/api/page/:pageId", updatePage);
    app.delete("/api/page/:pageId", deletePage);


    function createPage(req, res) {
        var websiteId = req.params.websiteId;
        var page = req.body;
        model.pageModel
            .createPage(websiteId, page)
            .then(
                function (status) {
                    res.sendStatus(200);
                },
                function (error) {
                    res.sendStatus(400).send(error);
                }
            );
    }

    function findAllPagesForWebsite(req, res) {
        var websiteId = req.params.websiteId;
        model
            .pageModel
            .findAllPagesForWebsite(websiteId)
            .then(
                function (pages) {
                    res.json(pages);
                },
                function (error) {
                    res.sendStatus(400).send(error);
                }
            );

    }

    function findPageById(req, res) {
        var pageId = req.params.pageId;
        model.pageModel
            .findPageById(pageId)
            .then(
            function (website) {
                res.json(website);
            }, function (error) {
                res.sendStatus(400).send(error);
            }
        )
    }

    function updatePage(req, res) {
        var pageId = req.params.pageId;
        var newPage = req.body;
        model.pageModel
            .updatePage(pageId,newPage)
            .then(
                function (status) {
                    res.sendStatus(200);
                },
                function (error) {
                    res.sendStatus(400).send(error);
                }
            );

    }

    function deletePage(req, res) {
        var pageId = req.params.pageId;
        model.pageModel
            .deletePage(pageId)
            .then(
                function (status) {
                    res.sendStatus(200);
                },
                function (error) {
                    res.sendStatus(400).send(error)
                }
            );
    }
}