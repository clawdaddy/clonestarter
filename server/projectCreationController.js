module.exports = {
  addProject: (req, res, next) => {
    const { category, shortBlurb, country } = req.body;
    console.log(category, shortBlurb, country);
    req.app
      .get("db")
      .setupProject([category, shortBlurb, country])
      .then(result => {
        req.app
          .get("db")
          .connect_project_to_user([result[0].id, req.session.user.id])
          .then(result2 => {
            req.session.projectId = result[0].id;
            res.status(200).send(result);
          });
      });
  },
  getAllProjects: (req, res, next) => {
    req.app
      .get("db")
      .getAllProjects([])
      .then(result => res.status(200).send(result));
  },
  getProject: (req, res, next) => {
    const { projectId } = req.params;
    req.app
      .get("db")
      .getProject([projectId])
      .then(result => {
        res.status(200).send(result);
      });
  },
  getMyProjects: ( req, res, next ) => {
    const { id } = req.session.user;
    req.app
      .get("db")
      .get_creator_projects([id])
      .then( result => {
        result[0].projectsArray = result.map(userWithProject => {
          return {
            projectId: userWithProject.project_id,
            projectImage: userWithProject.image,
            projectTitle: userWithProject.title
          };
        }
        )
        req.session.user = result[0]
        console.log('get my projects result', result)
        res.status(200).send(req.session.user)
      })
      .catch( err => console.error('error getting my projects',err))
  },
  saveProject: (req, res, next) => {
    const {
      category,
      subcategory,
      country,
      projectImage,
      projectTitle,
      shortBlurb,
      projectLocation,
      fundingEndDate,
      fundingGoal,
      rewards
    } = req.body;
    const { projectId } = req.params;
    req.app
      .get("db")
      .saveProject([
        +projectId,
        category,
        shortBlurb,
        country,
        projectImage,
        projectTitle,
        subcategory,
        projectLocation,
        fundingGoal,
        fundingEndDate
      ])
      .then( response => {
          res.status(200).send(response);
        })
    },
}
