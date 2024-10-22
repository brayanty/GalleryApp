import { createClient } from "pexels";

async function getPhoto(query, page) {
  const client = createClient(
    "mddDswSUO7VpyJ2BRQr4cyCKbvrJQlH4UwXR64o4FgcaJFAepQQuLAUd"
  );

  const Photo = await client.photos
    .search({ query, per_page: page })
    .then((photos) => {
      return photos;
    });
  // All requests made with the client will be authenticated
  return Photo;
}

export default getPhoto;
