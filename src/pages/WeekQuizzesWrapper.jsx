import { useParams } from "react-router-dom";
import WeekQuizzes from "./WeekQuizzes";

const WeekQuizzesWrapper = () => {
  const { moduleId, weekId } = useParams();
  return (
    <WeekQuizzes moduleId={parseInt(moduleId)} weekId={parseInt(weekId)} />
  );
};

export default WeekQuizzesWrapper;
