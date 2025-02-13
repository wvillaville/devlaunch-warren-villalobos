
/*

Description

Picture yourself as the architect of a vibrant online community where users connect, share, and engage with one another. To enrich the user experience, you're introducing a feature that suggests new connections based on the users a person already follows. Here's the roadmap:

We'll begin by defining the `User` interface, capturing key attributes that define a user's profile:

- `id`: A unique identifier assigned to each user, ensuring distinct identification within the platform.
- `name`: The user's name, providing a personalized touch to their profile.
- `followers`: An array of `User` objects representing those who follow the user, fostering a sense of community and interaction.
- `following`: An array of `User` objects representing the users that the user follows, shaping their network and content feed.

With the foundation laid, your next step is to create a function designed to suggest new connections to a user based on their current network. This function will receive a `User` object and an array of `User` objects as input parameters. Its mission? To scour through the network of users the input `User` follows and identify potential connections that aren't already followed by the input `User` themselves.
INPUTS

alice = {
    id: 1,
    name: "Alice",
    followers: [],
    following: [],
}

bob = {
    id: 2,
    name: "Bob",
    followers: [alice],
    following: [],
}

charlie = {
    id: 3,
    name: "Charlie",
    followers: [alice, bob],
    following: [bob],
}

diana = {
    id: 4,
    name: "Diana",
    followers: [alice, charlie],
    following: [charlie],
}
OUTPUTS

[{
"id": 1,
"name": "Alice",
"followers": [],
"following": []
}, {
"id": 2,
"name": "Bob",
"followers": [
{
"id": 1,
"name": "Alice",
"followers": [],
"following": []
}
],
"following": []
}] 

*/

interface User {
    id: string | number
    name: string
    followers: User[]
    following: User[]
}

function suggestUsersToFollow(user: User): User[] {
    const followingSet = new Set(user.following)
    const suggestedSet = new Set<User>()
    for (const followingUser of followingSet) {
        for (const follower of followingUser.followers) {
            if (follower !== user && !followingSet.has(follower)) {
                suggestedSet.add(follower)
            }
        }
    }
    return Array.from(suggestedSet)
}

const alice: User = {
    id: 1,
    name: "Alice",
    followers: [],
    following: [],
}

const bob: User = {
    id: 2,
    name: "Bob",
    followers: [alice],
    following: [],
}

const charlie: User = {
    id: 3,
    name: "Charlie",
    followers: [alice, bob],
    following: [bob],
}

const diana: User = {
    id: 4,
    name: "Diana",
    followers: [alice, charlie],
    following: [charlie],
}

const suggestedUsers = suggestUsersToFollow(diana)
console.log(suggestedUsers)