const _ = require('lodash');

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
          })
          .catch( err => {
            console.log('error while connecting project to user on db: ', err)
            res.sendStatus(500);
          });
      })
      .catch( err => {
        console.log('error while setting up project', err)
        res.sendStatus(500);
      });
  },
  getAllProjects: (req, res, next) => {
    req.app
      .get("db")
      .getAllProjects([])
      .then(result => res.status(200).send(result))
      .catch( err => {
        console.log('error getting all projects: ', err)
      });
  },
  getProject: (req, res, next) => {
    const { projectId } = req.params;
    req.app
      .get("db")
      .getProject([projectId])
      .then(result => {
        res.status(200).send(result);
      })
      .catch( err => {
        console.log('error getting a project: ', err)
        res.sendStatus(500);
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
      .catch( err => {
        console.error('error getting my projects',err)
        res.sendStatus(500)
      })
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
      .catch( err => {
        console.log('save project response error: ', err)
        res.sendStatus(500);
      })
    },
    createNewReward: ( req, res, next ) => {
      const { project_id, title, pledge_amount, description, estimated_delivery, shipping_details, reward_limit_enabled, backer_limit, reward_limit_end_date, reward_limit_start_date } = req.body.reward
      let returnItems = [];
      const db = req.app.get('db')
      db
        .rewards
        .create_new_reward([project_id, title, pledge_amount, description, estimated_delivery, shipping_details, reward_limit_enabled, backer_limit, reward_limit_end_date, reward_limit_start_date])
        .then( dbResponse => {
          console.log('create new reward response: ', dbResponse)
          if(req.body.items[0]){
            Promise.all(req.body.items.map( item => {
              return db
                .reward_linker_items
                .add_item_to_reward([dbResponse[0].id,item.item_id,item.number])
                .then( item => {
                  console.log('items on reward: ', item)
                  // res.status(200).send({reward_id:dbResponse[0].id,items})
                  return item
                })
                .catch( err => {
                  console.log('adding item to reward response error: ', err)
                  res.sendStatus(500)
                })
            }))
            .then( items => {
              console.log('items from db: ', items)
              returnItems = _.flatten(items)
              res.status(200).send({reward_id:dbResponse[0].id, items:returnItems})
            })
            .catch( err => {
              console.log('promise all items on reward error: ', err)
            })
            
          }
          else {
            res.status(200).send({reward_id:dbResponse[0].id,items:returnItems})
          }
        })
        .catch( err => {
          console.log('new reward response error: ', err)
          res.sendStatus(500)
        })

    },
    getRewardsByProject:( req, res, next ) => {

    },
    getOneReward:( req, res, next ) => {

    }, 
    editReward:( req, res, next ) => {

    },
    deleteReward:( req, res, next ) => {

    },
    createNewRewardItem: ( req, res, next ) => {
      const { digital, name, creator_id } = req.body
      req.app
      .get('db')
      .reward_items
      .create_new_reward_item([ digital, name, creator_id])
      .then( itemResponse => {
        console.log('create new item response: ', itemResponse)
        res.status(200).send({ reward_item:itemResponse[0] })
      })
      .catch( err => {
        console.log('new item response error: ', err)
        res.sendStatus(500)
      })
    },
    getRewardItems: ( req, res, next ) => {
      console.log('HIT GET REWARD ITEMS', req.body)
      res.status(200).send({response:'a response'})
    },
    getOneRewardItem: (req, res, next ) => {

    },
    editRewardItem: ( req, res, next ) => {
      const { digital, name, item_id } = req.body;
      console.log('hit: ', req.body)
      const db = req.app.get('db')
      db
        .reward_items
        .edit_reward_item([digital, name, item_id])
        .then( itemResponse => {
          res.status(200).send({ reward_item:itemResponse[0]})
        })
        .catch( err => {
          console.log('edit item response error: ', err)
          res.sendStatus(500)
        })
    },
    deleteRewardItem: ( req, res, next ) => {
      const { itemId } = req.params;
      const db = req.app.get('db')
      db
        .reward_items
        .delete_reward_item([+itemId])
        .then(response => {
          res.status(200).send(response[0])
        })
        .catch(err => {
          console.log('delete reward item error: ', err)
          res.sendStatus(500)
        })
    },
    addItemsToReward: ( req, res, next ) => {
      const { items, rewardId } = req.body;
      const db = req.app.get('db');
      let returnItems = [];
      Promise.all(items.map( item => {
        return db
          .reward_linker_items
          .add_item_to_reward([+rewardId, +item.id, +item.number])
          .then( item => {
            console.log(`added ${item.id} to reward with id ${rewardId}`)
            return item
          })
          .catch(err => {
            console.log(`error adding ${item.id} to reward with id ${rewardId}`)
            
          })
      }))
      .then( items => {
        console.log(`added items to reward with id ${rewardId}`, items)
        returnItems = _.flatten(items)
        res.status(200).send({reward_id:rewardId, returnItems})
      })
      .catch( err => {
        console.log('error with all promise on add items to reward: ', err)
        res.sendStatus(500)
      })
    },
    editItemOnReward: ( req, res, next ) => {
      const { linkerId, number } = req.body;
      const db = req.app.get('db')
      db
        .reward_linker_items
        .edit_item_on_reward([linkerId, number])
        .then( response => {
          res.status(200).send(response[0])
        })
        .catch( err => {
          console.log( 'edit item on reward error: ', err)
          res.sendStatus(500);
        })
    },
    getItemOnReward: ( req, res, next ) => {

    },
    deleteItemOnReward: (req, res, next) => {
      //this should be the reward_linker_item id, not the item id. That way it only deletes this instance of the item, rather than the template.
      const { itemLinkerId } = req.params;
      const db = req.app.get('db')
      db
        .reward_linker_items
        .delete_item_on_reward([+itemLinkerId])
        .then( response => {
          res.status(200).send(response[0])
        })
        .catch( err => {
          console.log('delete item on reward error: ', err)
          res.sendStatus(500)
        })
    }
}
