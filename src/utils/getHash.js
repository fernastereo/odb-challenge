const getHash = (url) => {
  const resolvedUri = url.slice(1).toLocaleLowerCase().split("/")[1] || "";
  return `/${resolvedUri}`;
};

export default getHash;
