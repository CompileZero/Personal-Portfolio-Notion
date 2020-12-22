const githubToken = process.env.GITHUB_TOKEN;

if (!githubToken) {
  throw new Error("Missing environment variable GITHUB_TOKEN.");
}

export const config = {
  name: "Atharva Kulkarni",
  subtitle: "Enterprise UI Design • FullStack Development",
  birthday: "1997-02-07",
  githubUsername: "compilezero",
  notionBlogTableId: "3a1f675cc61e47a3b77c858dc66b752a",
  notionAchievementTableId: "9ace8568ccdb4263970b9e29dfede38d",
  notionProjectTableId: "1a0d2d6c138c4c35a964efc7b6f5f7fd",
  githubToken,
};
