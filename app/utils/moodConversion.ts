export const convertMoodToEmoji = (x: string) => {
  switch (x) {
    case "happy":
      return "😊";
    case "sad":
      return "😢";
    case "angry":
      return "😡";
    case "sleepy":
      return "😴";
    case "annoyed":
      return "😒";
    default:
      return "😊";
  }
};
