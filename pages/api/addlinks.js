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
                    .collection('links')
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
            let { db } = await connectToDatabase();
            const element = JSON.parse(req.body).name;
            const projectId = JSON.parse(req.body).projectId;
            const link = JSON.parse(req.body).link;

            switch(element) {
                case "github":
                    // update the published status of the post
                    await db.collection('links').updateOne(
                        {
                            "projectId": projectId,
                        },
                        { $set: { "github" : link } }
                    );
                    // return a message
                    return res.json({
                        message: 'Post updated successfully',
                        success: true,
                    });

                case "trello":
                    // update the published status of the post
                    await db.collection('links').updateOne(
                        {
                            "projectId": projectId,
                        },
                        { $set: { "trello" : link } }
                    );
                    // return a message
                    return res.json({
                        message: 'Post updated successfully',
                        success: true,
                    });

                case "googledrive":
                    // update the published status of the post
                    await db.collection('links').updateOne(
                        {
                            "projectId": projectId,
                        },
                        { $set: { "googledrive" : link } }
                    );
                    // return a message
                    return res.json({
                        message: 'Post updated successfully',
                        success: true,
                    });

                case "slack":
                     // update the published status of the post
                     await db.collection('links').updateOne(
                        {
                            "projectId": projectId,
                        },
                        { $set: { "slack" : link } }
                    );
                    // return a message
                    return res.json({
                        message: 'Post updated successfully',
                        success: true,
                    });

                case "etc":
                    // update the published status of the post
                    await db.collection('links').updateOne(
                        {
                            "projectId": projectId,
                        },
                        { $set: { "etc" : link } }
                    );
                    // return a message
                    return res.json({
                        message: 'Post updated successfully',
                        success: true,
                    });
            }
        }

        async function updatePost(req, res) {
            let { db } = await connectToDatabase();
            const element = JSON.parse(req.body).name;
            const projectId = JSON.parse(req.body).projectId;

            switch(element) {
                case "github":
                    // update the published status of the post
                    await db.collection('links').updateOne(
                        {
                            "projectId": projectId,
                        },
                        { $set: { "github" : "" } }
                    );
                    // return a message
                    return res.json({
                        message: 'Post updated successfully',
                        success: true,
                    });

                case "trello":
                    // update the published status of the post
                    await db.collection('links').updateOne(
                        {
                            "projectId": projectId,
                        },
                        { $set: { "trello" : "", "trelloAPIKey" : "","trelloToken" : "" } }
                    );
                    // return a message
                    return res.json({
                        message: 'Post updated successfully',
                        success: true,
                    });

                case "googledrive":
                    // update the published status of the post
                    await db.collection('links').updateOne(
                        {
                            "projectId": projectId,
                        },
                        { $set: { "googledrive" : "" } }
                    );
                    // return a message
                    return res.json({
                        message: 'Post updated successfully',
                        success: true,
                    });

                case "slack":
                     // update the published status of the post
                     await db.collection('links').updateOne(
                        {
                            "projectId": projectId,
                        },
                        { $set: { "slack" : "", "slackWebhook" : "" } }
                    );
                    // return a message
                    return res.json({
                        message: 'Post updated successfully',
                        success: true,
                    });

                case "etc":
                    // update the published status of the post
                    await db.collection('links').updateOne(
                        {
                            "projectId": projectId,
                        },
                        { $set: { "etc" : "" } }
                    );
                    // return a message
                    return res.json({
                        message: 'Post updated successfully',
                        success: true,
                    });
            }
        }

        async function deletePost(req, res) {
            // Connecting to the database
            let { db } = await connectToDatabase();
       
            // Deleting the post
            await db.collection('links').deleteOne({
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