export async function getCommits(link) {
  const owner = link.split("/")[3];
  const repos = link.split("/")[4];

  const response = await fetch(
    `https://api.github.com/repos/${owner}/${repos}/commits`
  );
  const json = await response.json();
  console.log(json);
  const returns = {
    committer : json[0].committer.login,
  };
  return returns;
}