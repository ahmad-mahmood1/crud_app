export const statusColorMapper = (status) => {
    switch (status) {
      case "Active":
        return "#00a651";
      case "Inactive":
        return "#a3a3a3";
      default:
        break;
    }
  };