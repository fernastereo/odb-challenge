import getRepositories from "./getRepositories";
import getUser from "./getUser";

const prepareData = async (repoName) => {
  const repositories = await getRepositories(repoName);

  const totalCount = repositories.total_count;
  const incompleteResults = repositories.incomplete_results;

  const userDetails = await Promise.all(
    repositories.items.map((item) => getUser(item.owner.login))
  );

  const fullResponse = repositories.items.map((repo, index) => {
    const fullObject = {
      userName: userDetails[index].name,
      avatar_url: repo.owner.avatar_url,
      ownerHtml_url: repo.owner.html_url,
      login: repo.owner.login,
      html_url: repo.html_url,
      full_name: repo.full_name,
      stargazers_count: repo.stargazers_count,
      forks_count: repo.forks_count,
    };
    return fullObject;
  });
  fullResponse.totalCount = totalCount;
  fullResponse.incompleteResults = incompleteResults;

  return fullResponse;
};

export default prepareData;
