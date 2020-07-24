export const normalizer = (blogPosts) => {
    let result

    const postsList = blogPosts.map(({id, author: {username}, body, comments}) => ({
        id, author: username, body, comments: comments
        .map(c => c.id)}))
        .reduce((object, item) => ({...object, [item.id]: item}), {});

    const commentsList =  blogPosts
        .flatMap(post => post.comments)
        .reduce((object, {id, comment, author: {username}}) => ({
            ...object, [id]: {id, author: username, comment}}), {})

    const usersList =  [...blogPosts.map(post => post.author),...blogPosts
        .flatMap(post => post.comments).map(comment => comment.author)]
        .reduce((object, {username, name}) => ({...object, [username]: {username, name}}), {})


    result =  {
        posts: { byId: postsList, allIds: Object.keys(postsList) },
        comments: { byId: commentsList, allIds: Object.keys(commentsList) },
        users: { byId: usersList, allIds: Object.keys(usersList) },
    }

    return result
}