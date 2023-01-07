export default function getBroadcasts(posts) {
  return posts.filter((p) => {
    return p.fields.liveIframes;
  });
}
