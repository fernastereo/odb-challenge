const Repository = (repositories) => {
  const view = `
    <div>
        ${repositories
          .map(
            (repository) => `
        <div class="space-y-1">
            <div>${repository.owner.login}</div>
            <a href="#">
                <span>${repository.owner.avatar_url}</span>
                <span>${repository.owner.login}</span>
            </a>
        </div>
        <div>${repository.name}</div>
        <div>
            <span>Stars ${repository.stargazers_count}</span>
            <span>Forks ${repository.forks_count}</span>
            <span>Score ${
              repository.stargazers_count * 1 + repository.forks_count * 2 >=
              500
                ? "Popular"
                : ""
            }</span>
        </div>
        `
          )
          .join("")}
    </div>
  `;

  return view;
};

export default Repository;
