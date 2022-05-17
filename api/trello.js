export async function getDatas(link, key, token) {
  const id = link.split("/")[4];
  const response = await fetch(
    `https://api.trello.com/1/boards/${id}/lists?key=${key}&token=${token}`
  );
  const json = await response.json();
  let returns = [];
  for(let i=0; i<json.length; i++) {
    const cardRes = await fetch(
      `https://api.trello.com/1/lists/${json[i].id}/cards?key=${key}&token=${token}`
    );
    const cardJson = await cardRes.json();
    const list = {"board": json[i], "card": cardJson};
    returns.push(list);
  }
  return returns;
}

export function getProjectName(link) {
  return link.split("/")[5];
}