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
                    .collection('invitations')
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
            await db.collection('invitations').insertOne(JSON.parse(req.body));
            // return a message
            return res.json({
                message: 'Post added successfully',
                success: true,
            });
        }

        async function updatePost(req, res) {
            let { db } = await connectToDatabase();
            const projectId = JSON.parse(req.body).projectId;
            const name = JSON.parse(req.body).name;
            const email = JSON.parse(req.body).email;
            const user = {"name": name, "email": email}
            let project = await db
                    .collection('projects')
                    .find({_id : projectId});
            const users = project.users;
            // update the published status of the post
            await db.collection('projects').updateOne(
                {
                    _id: projectId,
                },
                { $set: { "users": users.push(user) } }//click butten, change published true
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
            const id = JSON.parse(req.body)
            // Deleting the post
            await db.collection('invitations').deleteOne({
                _id: id,
            });
        
            // returning a message
            return res.json({
                message: 'Post deleted successfully',
                success: true,
            });
        }



    }
}