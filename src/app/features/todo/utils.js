export const getListByPriority = (list) => {
  const highPriorities = list.filter((task) => Number(task.priority) === 1);
  const mediumPriorities = list.filter((task) => Number(task.priority) === 2);
  const lowPriorities = list.filter((task) => Number(task.priority) === 3);

  return {
    highPriorities,
    mediumPriorities,
    lowPriorities,
  };
};

export const getBorderColor = (priority) => {
  switch (priority) {
    case "1": {
      return "border-danger";
    }
    case "2": {
      return "border-warning";
    }
    case "3": {
      return "border-info";
    }
    default: {
      return "";
    }
  }
};
