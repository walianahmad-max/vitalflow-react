const files = import.meta.glob("../assets/*", {
  eager: true,
  query: "?url",
  import: "default",
});
export const asset = (name) => files["../assets/" + name];
