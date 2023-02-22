import React from "react";

import { Repo } from "../../core/github";
import { config } from "../../config";

const RepoList: React.FC<{
  title: string;
  url: string;
  repos: Repo[];
}> = ({ repos, title, url }) => (
  <div>
    <h2 className="text-2xl text-gray-600">{title}</h2>
    <ul>
      {repos.map(({ id, name, url, description, owner }) => (
        <li key={id}>
          <a
            href={url}
            className="block my-4 p-4 -mx-4 hover:bg-gray-800 rounded-md"
          >
            <div>
              <span className="text-teal-400">{owner.login}/</span>
              <span className="text-teal-600">{name}</span>
            </div>
            <div className="text-teal-200">{description}</div>
          </a>
        </li>
      ))}
    </ul>
    <a href={url} className="text-teal-600 text-sm">
      View more on <span className="font-semibold">GitHub</span> →
    </a>
  </div>
);

export const GitHubActivity: React.FC<{
  starredRepos: Repo[];
  contributedRepos: Repo[];
}> = ({ starredRepos, contributedRepos }) => (
  <div className="bg-gray-900">
    <div className="container ">
      <h1 className="text-4xl font-bold text-teal-300">GitHub Activity</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24 md:gap-32">
        <RepoList
          title="Repos I Contributed to"
          url={`https://github.com/${config.githubUsername}`}
          repos={contributedRepos}
        />
        <RepoList
          title="Repos I Like"
          repos={starredRepos}
          url={`https://github.com/${config.githubUsername}?tab=stars`}
        />
      </div>
    </div>
    <div className="container">
      <div className="flex flex-col md:items-center mt-16">
        <div
          className="bg-teal-100 border-t-4 border-teal-500 rounded-md text-teal-darkest px-4 py-3 shadow-md my-2"
          role="alert"
        >
          <div className="flex">
            <svg
              className="h-6 w-6 mr-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="teal"
            >
              <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
);
