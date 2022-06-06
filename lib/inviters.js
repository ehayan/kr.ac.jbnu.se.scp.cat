function getInviters(){
    const { connectToDatabase } = require('../lib/mongodb');
    let { db } = await connectToDatabase();
    // fetch the inviters
    let inviters = await db
        .collection('inviters')
        .find({})
        .sort({ published: -1 })
        .toArray();
    return inviters;
}

function addInviters(){
    const {connectToDatabase} = require('../lib/mongodb');
    // connect to the database
    let { db } = await connectToDatabase();
    // add the post
    await db.collection('inviters').insertOne(JSON.parse(req.body));
}

function updateInviters(){ 
    const {connectToDatabase} = require('../lib/mongodb');
    let { db } = await connectToDatabase();
        
    // update the published status of the post
    await db.collection('inviters').updateOne(
        {
            _id: new ObjectId(req.body),
        },
        { $set: { published: true } }
    );
}

function deleteProject(){
    const {connectToDatabase} = require('../lib/mongodb');
    let { db } = await connectToDatabase();
    // Deleting the post
    await db.collection('inviters').deleteOne({
    _id: new ObjectId(req.body),
    });
}
