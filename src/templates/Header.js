const Header = () => {
  const view = `
    <nav class="flex-shrink-0 bg-indigo-600">
        <div class="mx-auto max-w-7xl px-8">
            <div class="relative flex h-12 items-center justify-end">
                <div class="flex items-center justify-end">
                    <div class="flex">
                        <a href="#/" class="px-3 py-2 text-sm font-medium text-white hover:text-black">Home</a>

                        <a href="#/about/" class="px-3 py-2 text-sm font-medium text-white hover:text-black">About</a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    `;
  return view;
};

export default Header;
