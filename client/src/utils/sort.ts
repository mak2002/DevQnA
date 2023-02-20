function sortQuestionsByTimePeriod(sortOrder: any) {
  const now = new Date();

  if (sortOrder === "latest") {
    return (a: any, b: any) => {
      const aDate = new Date(a.createdAt);
      const bDate = new Date(b.createdAt);
      return bDate.getTime() - aDate.getTime();
    };
  } else if (sortOrder === "oldest") {
    return (a: any, b: any) => {
      const aDate = new Date(a.createdAt);
      const bDate = new Date(b.createdAt);
      return  aDate.getTime() - bDate.getTime();
    };
  } else if (sortOrder === "hot") {
    return (a: any, b: any) => {
      return b.upvotes - a.upvotes;
    };
  }
}

export default sortQuestionsByTimePeriod;
