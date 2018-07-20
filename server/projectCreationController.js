module.exports = {
    addProject: (req, res, next) => {
        const { category, shortBlurb, country } = req.body;
        console.log(category, shortBlurb, country)
        req.app.get('db').setupProject([category, shortBlurb, country]).then( result => {
            res.status(200).send(result)
        })
    },
    getAllProjects: ( req, res, next ) => {
        req.app.get('db').getAllProjects([]).then( result => res.status(200).send(result))
    },
    getProject: ( req, res, next ) => {
        const { projectId } = req.params;
        req.app.get('db').getProject([projectId]).then( result => {
            res.status(200).send(result)
        })
    }
}