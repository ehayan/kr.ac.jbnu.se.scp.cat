function getLink(){
    const { connectToDatabase } = require('../lib/mongodb');
    let { db } = await connectToDatabase();
    // fetch the posts
    let links = await db
        .collection('posts')
        .find({})
        .sort({ published: -1 })
        .toArray();

    return links;
}

function postLink() {
    const { connectToDatabase } = require('../lib/mongodb');
    let { db } = await connectToDatabase();

}