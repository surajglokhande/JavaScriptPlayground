// Simulated async API functions

function fetchUser(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId === 1) {
                resolve({ id: 1, name: "Suraj" });
            } else {
                reject("User not found");
            }
        }, 5000);
    });
}

function fetchPosts(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 101, title: "Post One" },
                { id: 102, title: "Post Two" }
            ]);
        }, 1000);
    });
}

function fetchComments(postId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 201, text: "Awesome post!" },
                { id: 202, text: "Thanks for sharing!" }
            ]);
        }, 1000);
    });
}

// Main async function to coordinate everything
async function showUserPostsWithComments(userId) {
    try {
        // Step 1: Fetch user
        const user = await fetchUser(userId);
        console.log(`User: ${user.name}`);

        // Step 2: Fetch posts by user
        const posts = await fetchPosts(user.id);
        for (const post of posts) {
            console.log(`Post: ${post.title}`);

            // Step 3: Fetch comments for each post (asynchronously in parallel)
            const comments = await fetchComments(post.id);
            for (const comment of comments) {
                console.log(`   Comment: ${comment.text}`);
            }
        }
    } catch (error) {
        console.error("Error:", error);
    }
}

// Run the async function
console.log("start")
showUserPostsWithComments(1);
console.log("end")
// Output (after delays):
// User: Suraj
// Post: Post One
//    Comment: Awesome post!
//    Comment: Thanks for sharing!
// Post: Post Two
//    Comment: Awesome post!
//    Comment: Thanks for sharing!