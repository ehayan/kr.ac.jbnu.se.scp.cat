// return repository owner's name from github link
export function getOwnerName(link) {
  return link.split("/")[3];
}

// return repository name from github link
export function getRepositoryName(link) {
  return link.split("/")[4];
}

/*
  return 3 recent datas of commit from github link
  data = {
    name : author name,
    avatar_url : author avatar image url,
    date : commit date,
    message : commit message,
    commit_url : commit page url
  }
*/
export async function getCommits(link) {
  const owner = link.split("/")[3];
  const repos = link.split("/")[4];

  const response = await fetch(
    `https://api.github.com/repos/${owner}/${repos}/commits`
  );
  const json = await response.json();
  let returns = [];
  for (let i = 0; i < 20; i++) {
    const value = {
      name: json[i].commit.author.name,
      avatar_url: json[i].author.avatar_url,
      date: json[i].commit.author.date,
      message: json[i].commit.message,
      commit_url: `${link}/commit/${json[i].sha}`,
    };
    returns.push(value);
  }
  return returns;
}
