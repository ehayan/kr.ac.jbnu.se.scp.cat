const { connectToDatabase } = require('../../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;

export default async function handler(req, res) {
    // switch the methods
    switch (req.method) {
        case 'GET': {
            return getPosts(req, res);
        }

        case 'POST': {
            return addPost(req, res);
        }

        case 'PUT': {
            return updatePost(req, res);
        }

        case 'DELETE': {
            return deletePost(req, res);
        }

        async function getPosts(req,res){;
            try {
                // connect to the database
                let { db } = await connectToDatabase();
                // fetch the posts
                let schedules = await db
                    .collection('calendar')
                    .find({})
                    .toArray();
                // return the posts
                return res.json({
                    message: JSON.parse(JSON.stringify(schedules)),
                    success: true,
                });
            } catch (error) {
                // return the error
                return res.json({
                    message: new Error(error).message,
                    success: false,
                });
            }
        }


        async function addPost(req,res){
            // connect to the database
            let { db } = await connectToDatabase();
            const projectId = JSON.parse(req.body);
            const body = {
              "projectId" : projectId
            }
            await db.collection('calendars').insertOne(linkCollection);
            // return a message
            return res.json({
                message: JSON.parse(JSON.stringify(body)),
                success: true,
            });
        }

        async function updatePost(req, res) {
            let { db } = await connectToDatabase();
            const projectId = JSON.parse(req.body).projectId;
            const schedule = JSON.parse(req.body).schedule;
            let project = await db
                    .collection('calendar')
                    .find({projectId : projectId})
                    .toArray();
            const array = project[0].schedules
            array.push(schedule)
            // update the published status of the post
            await db.collection('calendar').updateOne(
                {
                    projectId: projectId,
                },
                { $set: { "schedules": array } }//click butten, change published true
            );
            // return a message
            return res.json({
                message: JSON.stringify(array),
                success: true,
            });
        }

        async function deletePost(req, res) {
            // Connecting to the database
            let { db } = await connectToDatabase();
            const projectId = JSON.parse(req.body).projectId;
            const schedules = JSON.parse(req.body).schedules;
        
            // Deleting the post
            await db.collection('calendar').updateOne(
              {
                  projectId:projectId,
              },
              { $set: { "schedules": schedules } }//click butten, change published true
          );
        
            // returning a message
            return res.json({
                message: 'Post deleted successfully',
                success: true,
            });
        }



    }
}
/*async function getPosts(req,res){
// connect to the database
let { db } = await connectToDatabase();
// fetch the posts
let posts = await db
    .collection('posts')
    .find({})
    .sort({ published: -1 })
    .toArray();
// return the posts
return res.json({
    message: JSON.parse(JSON.stringify(posts)),
    success: true,
})
}*/

