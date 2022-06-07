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
                let projects = await db
                    .collection('projects')
                    .find({})
                    .toArray();
                // return the posts
                return res.json({
                    message: JSON.parse(JSON.stringify(projects)),
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
            // add the post
            const collection = await db.collection('projects').insertOne(JSON.parse(req.body));
            const projectId = collection.insertedId;
            const linkCollection = {
                "projectId": projectId.toString(),
                "github": "",
                "trello": "",
                "googledrive": "",
                "slack": "",
                "trelloAPIKey": "",
                "trelloToken": "",
                "slackWebhook": ""
            }
            await db.collection('links').insertOne(linkCollection);
            // return a message
            return res.json({
                message: JSON.parse(JSON.stringify(projectId)),
                success: true,
            });
        }

        async function updatePost(req, res) {
            let { db } = await connectToDatabase();
        
            // update the published status of the post
            await db.collection('projects').updateOne(
                {
                    _id: new ObjectId(req.body),
                },
                { $set: { published: true } }//click butten, change published true
            );
            // return a message
            return res.json({
                message: 'Post updated successfully',
                success: true,
            });
        }

        async function deletePost(req, res) {
            // Connecting to the database
            let { db } = await connectToDatabase();
        
            // Deleting the post
            await db.collection('projects').deleteOne({
                _id: new ObjectId(req.body),
            });
        
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

