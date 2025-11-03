import React from 'react'
import { useLoaderData, useParams } from 'react-router'

function Github() {
    const data = useLoaderData()

    console.log(data);

    return (
        <div className="max-w-4xl mx-auto bg-gray-800 text-white rounded-2xl shadow-lg p-8 grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
            <div className="flex flex-col items-center justify-center text-center">
                <img
                src={data.avatar_url}
                alt="GitHub Avatar"
                className="w-48 h-48 rounded-full shadow-md border-4 border-gray-700"
                />
                <h2 className="text-2xl font-semibold mt-4">{data.name || data.login}</h2>
            </div>


            <div className="flex flex-col justify-center space-y-4">
                {data.company && (
                <p>
                    <span className="font-semibold text-gray-300">Company:</span>{" "}
                    {data.company}
                </p>
                )}
                {data.location && (
                <p>
                    <span className="font-semibold text-gray-300">Location:</span>{" "}
                    {data.location}
                </p>
                )}
                {data.bio && (
                <p>
                    <span className="font-semibold text-gray-300">Bio:</span>{" "}
                    {data.bio}
                </p>
                )}
                <div className="flex flex-wrap gap-6 mt-4">
                <p>
                    <span className="font-semibold text-gray-300">Followers:</span>{" "}
                    {data.followers}
                </p>
                <p>
                    <span className="font-semibold text-gray-300">Following:</span>{" "}
                    {data.following}
                </p>
                <p>
                    <span className="font-semibold text-gray-300">Public Repos:</span>{" "}
                    {data.public_repos}
                </p>
                </div>
            </div>
        </div>

    )
}

export default Github

export const githubInfoLoader = async ({params}) => {
    const {username} = params
    const response = await fetch(`https://api.github.com/users/${username}`)
    if (!response.ok) {
        throw new Response("User not found", { status: 404 });
    }

    return response.json();
}