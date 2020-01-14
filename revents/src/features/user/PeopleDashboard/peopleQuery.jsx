export const peopleDetailedQuery = ({ auth }) => {
  return [
    {
      collection: "users",
      doc: auth.uid,
      subcollections: [{ collection: "following" }],
      storeAs: "following"
    },
    {
      collection: "users",
      doc: auth.uid,
      subcollections: [{ collection: "followers" }],
      storeAs: "followers"
    }
  ];
};
