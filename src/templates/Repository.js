const Repository = (repositories) => {
  const view = `
    <div class="lg:grid lg:grid-cols-2 xl:grid-cols-3">
        ${repositories
          .map(
            (repository) => `
            <div class="w-68 shadow-md rounded-lg my-4 mx-2 border-2 px-2 py-2">
                <div class="flex items-center space-x-3">
                    <div class="h-12 w-12 flex-shrink-0">
                        <img class="h-12 w-12 rounded-full" src="${
                          repository.avatar_url
                        }" alt="${repository.login}">
                    </div>
                    <div class="space-y-1">
                        <div class="text-sm font-medium text-gray-900">${
                          repository.userName ?? ""
                        }</div>
                        <a href="${
                          repository.html_url
                        }" class="group flex items-center space-x-2.5">
                            <svg class="h-5 w-5 text-gray-400 group-hover:text-gray-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                            <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clip-rule="evenodd" />
                            </svg>
                            <span class="text-sm font-medium text-gray-500 group-hover:text-gray-900">${
                              repository.login
                            }</span>
                        </a>
                    </div>
                </div>
                <div class="my-4">
                    <a href="${repository.html_url}"
                        <h2 class="font-bold">${repository.full_name}</h2>
                    </a>
                </div>
                <div class="flex space-x-6">
                    <span class="inline-flex items-center text-sm">
                        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
                        </svg>
                        <span class="font-medium text-gray-900">${
                          repository.stargazers_count
                        }</span>
                    </span>
                    <span class="inline-flex items-center text-sm">
                        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
                        </svg>
                        <span class="font-medium text-gray-900">${
                          repository.forks_count
                        }</span>
                    </span>
                    <span class="inline-flex items-center text-sm">
                        <span class="font-medium text-gray-900 flex">${
                          repository.stargazers_count * 1 +
                            repository.forks_count * 2 >=
                          1
                            ? `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 fill-yellow-500 text-gray-800">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                        </svg> <span>Popular</span>`
                            : ""
                        }</span>
                    </span>
                </div>
            </div>
            `
          )
          .join("")}
    </div>
  `;

  return view;
};

export default Repository;
