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
  </div>
);
